const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const os = require("os");

const rootDir = __dirname;
const storageRoot = process.env.CMMS_STORAGE_DIR ? path.resolve(process.env.CMMS_STORAGE_DIR) : rootDir;
const dataDir = process.env.CMMS_DATA_DIR ? path.resolve(process.env.CMMS_DATA_DIR) : path.join(storageRoot, "data");
const storePath = path.join(dataDir, "store.json");
const backupDir = process.env.CMMS_BACKUP_DIR ? path.resolve(process.env.CMMS_BACKUP_DIR) : path.join(storageRoot, "backups");
const databaseUrl = String(process.env.DATABASE_URL || "").trim();
const port = Number(process.env.PORT || 8001);
const defaultHost = process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1";
const host = (process.env.CMMS_HOST || process.env.HOST || defaultHost).trim() || defaultHost;
const databaseStateId = "primary";
let databasePool = null;
let databaseStoreReady = null;

const demoUsers = [
  { id: "USR-501", name: "Gene Simmons", role: "Planner", username: "planner", password: "planner123", userStatus: "Active", team: "Production", workload: 7, shift: "Day" },
  { id: "USR-502", name: "Peter Criss", role: "Technician", username: "tech1", password: "tech123", userStatus: "Active", team: "HVAC", workload: 5, shift: "Day" },
  { id: "USR-503", name: "Andrew Mills", role: "Technician", username: "tech2", password: "tech123", userStatus: "Inactive", team: "Utilities", workload: 6, shift: "Evening" },
  { id: "USR-504", name: "David Green", role: "Supervisor", username: "admin", password: "admin123", userStatus: "Active", team: "Machining", workload: 3, shift: "Day" }
];

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(body);
}

function sendEmpty(res, status = 204) {
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end();
}

function getLanAddress() {
  const interfaces = os.networkInterfaces();
  for (const addresses of Object.values(interfaces)) {
    for (const address of addresses || []) {
      if (address.family === "IPv4" && !address.internal && !address.address.startsWith("169.254.")) {
        return address.address;
      }
    }
  }
  return "";
}

function getAppUrls() {
  const localUrl = `http://127.0.0.1:${port}/`;
  const lanAddress = getLanAddress();
  const lanUrl = lanAddress ? `http://${lanAddress}:${port}/` : "";
  const serverUrl = host === "0.0.0.0" || host === "::" ? localUrl : `http://${host}:${port}/`;
  return { localUrl, lanUrl, serverUrl };
}

async function readJsonBody(req, maxBytes = 60 * 1024 * 1024) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBytes) {
      const error = new Error("Payload too large");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function readStore() {
  if (databaseUrl) {
    await ensureDatabaseStore();
    const result = await getDatabasePool().query(
      "SELECT payload FROM cmms_state WHERE id = $1",
      [databaseStateId]
    );
    return result.rows[0]?.payload || {};
  }

  return readJsonStore();
}

async function readJsonStore() {
  try {
    const raw = await fs.readFile(storePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

async function writeStore(data) {
  const payload = {
    ...data,
    meta: {
      ...(data.meta || {}),
      updatedAt: new Date().toISOString(),
      revision: crypto.randomUUID()
    }
  };

  if (databaseUrl) {
    await writeDatabaseStore(payload);
  } else {
    await writeJsonStore(payload);
  }

  try {
    await createDailyBackup(payload);
  } catch (error) {
    console.warn("Daily backup failed:", error.message);
  }
  return payload;
}

async function writeJsonStore(payload) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(payload, null, 2), "utf8");
}

function getDatabasePool() {
  if (!databasePool) {
    const { Pool } = require("pg");
    databasePool = new Pool({ connectionString: databaseUrl });
    databasePool.on("error", (error) => {
      console.error("PostgreSQL pool error:", error.message || error);
    });
  }

  return databasePool;
}

async function ensureDatabaseStore() {
  if (!databaseStoreReady) {
    databaseStoreReady = (async () => {
      const pool = getDatabasePool();
      await pool.query(`
        CREATE TABLE IF NOT EXISTS cmms_state (
          id text PRIMARY KEY,
          payload jsonb NOT NULL,
          updated_at timestamptz NOT NULL DEFAULT now()
        )
      `);
      const existing = await pool.query(
        "SELECT id FROM cmms_state WHERE id = $1",
        [databaseStateId]
      );
      if (existing.rowCount) return;

      const localState = await readJsonStore();
      if (Object.keys(localState || {}).length) {
        await pool.query(
          "INSERT INTO cmms_state (id, payload, updated_at) VALUES ($1, $2::jsonb, now())",
          [databaseStateId, JSON.stringify(localState)]
        );
      }
    })().catch((error) => {
      databaseStoreReady = null;
      throw error;
    });
  }

  return databaseStoreReady;
}

async function writeDatabaseStore(payload) {
  await ensureDatabaseStore();
  await getDatabasePool().query(
    `
      INSERT INTO cmms_state (id, payload, updated_at)
      VALUES ($1, $2::jsonb, now())
      ON CONFLICT (id) DO UPDATE
      SET payload = EXCLUDED.payload,
          updated_at = EXCLUDED.updated_at
    `,
    [databaseStateId, JSON.stringify(payload)]
  );
}

function mergeDemoUsers(users) {
  return Array.isArray(users) ? users : demoUsers;
}

function backupDay(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function backupTimestamp(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, "-");
}

function isSafeBackupFile(file) {
  return (
    file &&
    file === path.basename(file) &&
    file.startsWith("ozminda-cmms-") &&
    file.endsWith(".json")
  );
}

async function writeBackupFile(data, reason = "manual", fixedName = "") {
  await fs.mkdir(backupDir, { recursive: true });
  const safeReason = String(reason || "manual").replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  const file = fixedName || `ozminda-cmms-${backupTimestamp()}-${safeReason}.json`;
  const backupPayload = {
    ...data,
    backupMeta: {
      createdAt: new Date().toISOString(),
      reason: safeReason,
      source: "O'zMinda CMMS"
    }
  };
  const targetPath = path.join(backupDir, file);
  await fs.writeFile(targetPath, JSON.stringify(backupPayload, null, 2), "utf8");
  const stat = await fs.stat(targetPath);
  return { file, createdAt: backupPayload.backupMeta.createdAt, size: stat.size };
}

async function createDailyBackup(data) {
  const file = `ozminda-cmms-${backupDay()}-auto.json`;
  try {
    await fs.access(path.join(backupDir, file));
    return null;
  } catch {
    return writeBackupFile(data, "auto", file);
  }
}

async function createManualBackup() {
  const state = await readStore();
  return writeBackupFile(state, "manual");
}

async function listBackups() {
  try {
    const files = await fs.readdir(backupDir);
    const backups = await Promise.all(
      files
        .filter(isSafeBackupFile)
        .map(async (file) => {
          const stat = await fs.stat(path.join(backupDir, file));
          return {
            file,
            size: stat.size,
            createdAt: stat.birthtime.toISOString(),
            updatedAt: stat.mtime.toISOString()
          };
        })
    );
    return backups.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function sendBackupDownload(res, file) {
  if (!isSafeBackupFile(file)) {
    sendJson(res, 400, { ok: false, message: "Invalid backup file" });
    return;
  }

  try {
    const raw = await fs.readFile(path.join(backupDir, file));
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": raw.length,
      "Content-Disposition": `attachment; filename="${file}"`,
      "Access-Control-Allow-Origin": "*"
    });
    res.end(raw);
  } catch (error) {
    if (error.code === "ENOENT") {
      sendJson(res, 404, { ok: false, message: "Backup not found" });
      return;
    }
    throw error;
  }
}

function publicUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function telegramSettingsFromState(state) {
  const settings = state?.settings?.telegram || {};
  return {
    enabled: Boolean(settings.enabled),
    botToken: String(settings.botToken || "").trim(),
    chatId: String(settings.chatId || "").trim()
  };
}

function entityTitle(entity) {
  return entity?.title || entity?.name || entity?.sku || entity?.reason || entity?.id || "-";
}

function serverRecordTargetName(record, state) {
  if (record?.objectType === "pressForm" || record?.pressFormId) {
    const pressForm = Array.isArray(state?.pressForms)
      ? state.pressForms.find((item) => String(item.id) === String(record.pressFormId))
      : null;
    return pressForm ? `${pressForm.name} (${pressForm.id})` : record?.pressFormId || "";
  }

  const asset = Array.isArray(state?.assets)
    ? state.assets.find((item) => String(item.id) === String(record?.assetId))
    : null;
  return asset ? `${asset.name} (${asset.id})` : record?.assetId || "";
}

function buildServerTelegramMessage(action, section, entity, state, details = "") {
  const company = state?.settings?.companyName || "O'zMinda CMMS";
  const actionLabels = {
    created: "Создана запись",
    status: "Изменен статус",
    stock: "Критический остаток"
  };
  const sectionLabels = {
    workorders: "Ежедневные неисправности",
    requests: "Обращения",
    pm: "ППР",
    inventory: "Критические запасные части"
  };
  const lines = [
    company,
    `${actionLabels[action] || action}: ${sectionLabels[section] || section}`,
    `Название: ${entityTitle(entity)}`
  ];

  if (entity?.id) lines.push(`ID: ${entity.id}`);

  if (section === "workorders" || section === "requests") {
    if (entity?.priority) lines.push(`Приоритет: ${entity.priority}`);
    if (entity?.status) lines.push(`Статус: ${entity.status}`);
    const target = serverRecordTargetName(entity, state);
    if (target) lines.push(`Объект: ${target}`);
    if (entity?.assignedTo || entity?.requester) lines.push(`Ответственный: ${entity.assignedTo || entity.requester}`);
    if (entity?.dueDate) lines.push(`Срок: ${entity.dueDate}`);
  }

  if (section === "pm") {
    const target = serverRecordTargetName(entity, state);
    if (target) lines.push(`Объект: ${target}`);
    if (entity?.repairType) lines.push(`Тип ремонта: ${entity.repairType}`);
    if (entity?.frequency) lines.push(`Периодичность: ${entity.frequency}`);
    if (entity?.nextDue) lines.push(`Следующая дата: ${entity.nextDue}`);
    if (entity?.owner) lines.push(`Ответственный: ${entity.owner}`);
  }

  if (section === "inventory") {
    if (entity?.sku) lines.push(`SKU: ${entity.sku}`);
    lines.push(`Остаток: ${Number(entity?.onHand || 0)}`);
    lines.push(`Минимум: ${Number(entity?.minQty || 0)}`);
    if (entity?.location) lines.push(`Локация: ${entity.location}`);
  }

  if (details) lines.push(`Детали: ${details}`);
  return lines.filter(Boolean).join("\n").slice(0, 3900);
}

function byId(items) {
  return new Map((Array.isArray(items) ? items : []).map((item) => [String(item.id), item]));
}

async function notifyStateChanges(previousState, nextState) {
  const settings = telegramSettingsFromState(nextState);
  if (!settings.enabled || !settings.botToken || !settings.chatId) return;

  const messages = [];
  const previousWorkorders = byId(previousState?.workorders);
  const previousRequests = byId(previousState?.requests);
  const previousPm = byId(previousState?.pm);
  const previousInventory = byId(previousState?.inventory);

  (Array.isArray(nextState?.workorders) ? nextState.workorders : []).forEach((item) => {
    const previous = previousWorkorders.get(String(item.id));
    if (!previous) {
      messages.push(buildServerTelegramMessage("created", "workorders", item, nextState));
      return;
    }
    if (previous.status !== item.status) {
      messages.push(buildServerTelegramMessage("status", "workorders", item, nextState, `${previous.status || "-"} -> ${item.status || "-"}`));
    }
  });

  (Array.isArray(nextState?.requests) ? nextState.requests : []).forEach((item) => {
    const previous = previousRequests.get(String(item.id));
    if (!previous) {
      messages.push(buildServerTelegramMessage("created", "requests", item, nextState));
      return;
    }
    if (previous.status !== item.status) {
      messages.push(buildServerTelegramMessage("status", "requests", item, nextState, `${previous.status || "-"} -> ${item.status || "-"}`));
    }
  });

  (Array.isArray(nextState?.pm) ? nextState.pm : []).forEach((item) => {
    if (!previousPm.has(String(item.id))) {
      messages.push(buildServerTelegramMessage("created", "pm", item, nextState));
    }
  });

  (Array.isArray(nextState?.inventory) ? nextState.inventory : []).forEach((item) => {
    const previous = previousInventory.get(String(item.id));
    if (!previous) return;
    const previousWasLow = Number(previous.onHand || 0) <= Number(previous.minQty || 0);
    const nowLow = Number(item.onHand || 0) <= Number(item.minQty || 0);
    if (!previousWasLow && nowLow) {
      messages.push(buildServerTelegramMessage("stock", "inventory", item, nextState, `${Number(previous.onHand || 0)} -> ${Number(item.onHand || 0)}`));
    }
  });

  for (const message of messages.slice(0, 5)) {
    await sendTelegramMessage(settings, message);
  }
}

async function sendTelegramMessage(settings, text) {
  const botToken = String(settings?.botToken || "").trim();
  const chatId = String(settings?.chatId || "").trim();
  const message = String(text || "").trim();

  if (!botToken || !chatId) {
    return { ok: false, skipped: true, message: "Telegram bot token or chat ID is empty" };
  }
  if (!message) {
    return { ok: false, skipped: true, message: "Telegram message is empty" };
  }

  let response;
  try {
    response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message.slice(0, 3900),
        disable_web_page_preview: true
      })
    });
  } catch (error) {
    return {
      ok: false,
      message: error.message || "Telegram request failed"
    };
  }

  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    return {
      ok: false,
      message: payload.description || `Telegram API error ${response.status}`
    };
  }
  return { ok: true, messageId: payload.result?.message_id || null };
}

async function handleApi(req, res, url) {
  if (req.method === "OPTIONS") {
    sendEmpty(res);
    return;
  }

  if (url.pathname === "/api/health" && req.method === "GET") {
    const { localUrl, lanUrl, serverUrl } = getAppUrls();
    sendJson(res, 200, {
      ok: true,
      service: "O'zMinda CMMS Backend",
      host,
      port,
      storage: databaseUrl ? "postgres" : "json",
      lanEnabled: host === "0.0.0.0" || host === "::",
      localUrl,
      lanUrl,
      serverUrl
    });
    return;
  }

  if (url.pathname === "/api/state" && req.method === "GET") {
    const state = await readStore();
    sendJson(res, 200, { state });
    return;
  }

  if (url.pathname === "/api/state" && req.method === "PUT") {
    const body = await readJsonBody(req);
    const previousState = await readStore();
    const nextState = await writeStore(body.state || body);
    await notifyStateChanges(previousState, nextState).catch((error) => {
      console.warn("Telegram state notification failed:", error.message || error);
    });
    sendJson(res, 200, { ok: true, state: nextState });
    return;
  }

  if (url.pathname === "/api/backup" && req.method === "POST") {
    const backup = await createManualBackup();
    sendJson(res, 200, { ok: true, backup });
    return;
  }

  if (url.pathname === "/api/backups" && req.method === "GET") {
    const backups = await listBackups();
    sendJson(res, 200, { ok: true, backups });
    return;
  }

  if (url.pathname === "/api/backup/download" && req.method === "GET") {
    await sendBackupDownload(res, url.searchParams.get("file") || "");
    return;
  }

  if (url.pathname === "/api/login" && req.method === "POST") {
    const body = await readJsonBody(req, 1024 * 1024);
    const username = String(body.username || "").trim().toLowerCase();
    const password = String(body.password || "");
    const state = await readStore();
    const users = mergeDemoUsers(state.users);
    const user = users.find((item) =>
      String(item.username || "").trim().toLowerCase() === username &&
      item.password === password &&
      item.userStatus === "Active"
    );

    if (!user) {
      sendJson(res, 401, { ok: false, message: "Invalid credentials or inactive account" });
      return;
    }

    sendJson(res, 200, { ok: true, user: publicUser(user) });
    return;
  }

  if (url.pathname === "/api/telegram/test" && req.method === "POST") {
    const body = await readJsonBody(req, 1024 * 1024);
    const state = await readStore();
    const settings = telegramSettingsFromState(state);
    const result = await sendTelegramMessage(settings, body.message || "O'zMinda CMMS: Telegram notifications test");
    sendJson(res, 200, result);
    return;
  }

  if (url.pathname === "/api/telegram/notify" && req.method === "POST") {
    const body = await readJsonBody(req, 1024 * 1024);
    const state = await readStore();
    const hasRequestSettings = body.telegram && typeof body.telegram === "object";
    const requestSettings = hasRequestSettings
      ? telegramSettingsFromState({ settings: { telegram: body.telegram } })
      : null;
    const storedSettings = telegramSettingsFromState(state);
    const settings = hasRequestSettings
      ? requestSettings
      : storedSettings;

    if (!settings.enabled) {
      sendJson(res, 200, { ok: true, skipped: true, message: "Telegram notifications disabled" });
      return;
    }

    const result = await sendTelegramMessage(settings, body.message || "");
    sendJson(res, 200, result);
    return;
  }

  sendJson(res, 404, { ok: false, message: "API route not found" });
}

async function serveStatic(req, res, url) {
  const requested = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = path.normalize(path.join(rootDir, requested));
  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const body = await fs.readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    });
    res.end(body);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    throw error;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    await serveStatic(req, res, url);
  } catch (error) {
    const status = error.statusCode || 500;
    sendJson(res, status, { ok: false, message: error.message || "Server error" });
  }
});

server.listen(port, host, () => {
  const localUrl = `http://127.0.0.1:${port}`;
  const displayUrl = host === "0.0.0.0" || host === "::" ? localUrl : `http://${host}:${port}`;
  console.log(`O'zMinda CMMS backend: ${displayUrl}`);
  if (host === "0.0.0.0" || host === "::") {
    console.log("LAN mode is enabled. Open the app from another device using this computer's Wi-Fi IP address.");
  }
});
