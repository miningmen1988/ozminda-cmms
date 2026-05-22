# O'zMinda CMMS Backend

Local backend for the CMMS prototype. It serves the app and stores data in a JSON file.

## Start

```bash
npm start
```

Open:

```text
http://127.0.0.1:8001/
```

## Mobile / Wi-Fi Access

Use this when you want to open the CMMS from a phone on the same Wi-Fi network.

```powershell
.\start-cmms-mobile.ps1
```

The script starts the backend in LAN mode, opens the app on the computer, and prints a phone address like:

```text
http://192.168.1.25:8001/
```

Enter that address in the phone browser. If the phone cannot open it, allow Node.js / PowerShell through Windows Firewall for private networks.

For manual LAN start:

```powershell
.\start-cmms.ps1 -Lan
```

## Demo Login

```text
Username: admin
Password: admin123
```

Other demo users are available from the Users section after login.

## API

```text
GET  /api/health
GET  /api/state
PUT  /api/state
POST /api/login
```

## Data

The backend saves application state here:

```text
data/store.json
```

If the backend is not running, the frontend still falls back to browser localStorage.

## Backups

Automatic daily backups and manual backups are saved here:

```text
backups/
```

Manual backups can be created from the `Backup` button in the app. The backend also exposes:

```text
POST /api/backup
GET  /api/backups
GET  /api/backup/download?file=<backup-file.json>
```
