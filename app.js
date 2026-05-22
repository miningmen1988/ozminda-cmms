const translations = {
  ru: {
    nav: {
      dashboard: "Dashboard",
      workorders: "Work Orders",
      requests: "Requests",
      assets: "Assets",
      pressForms: "Пресс формы",
      inventory: "Inventory",
      pm: "Preventive Maintenance",
      users: "Users",
      reports: "Reports",
      analytics: "KPI Analytics"
    },
    plantLabel: "Производственная площадка",
    overviewLabel: "Операционный обзор",
    heroTitle: "Центр обслуживания оборудования",
    heroText: "Следите за аварийными заявками, плановым сервисом и загрузкой техников в одном окне.",
    activeOrdersSmall: "активных заявок",
    prioritiesTitle: "Приоритеты",
    upcomingPm: "Ближайшие PM",
    workOrdersTitle: "Рабочие заявки",
    allStatuses: "Все статусы",
    allPriorities: "Все приоритеты",
    thTitle: "Название",
    thStatus: "Статус",
    thPriority: "Приоритет",
    thAsset: "Актив",
    thAssigned: "Исполнитель",
    thDueDate: "Срок",
    assetsRegistry: "Реестр активов",
    incomingRequests: "Входящие запросы",
    requestSummary: "Сводка по обращениям",
    inventoryTitle: "Склад и запчасти",
    thPart: "Деталь",
    thSku: "SKU",
    thOnHand: "В наличии",
    thMinQty: "Мин. кол-во",
    thLocation: "Локация",
    pmTitle: "Плановое обслуживание",
    teamRoles: "Команда и роли",
    operationalMetrics: "Операционные показатели",
    recommendations: "Рекомендации",
    analyticsTitle: "KPI аналитика",
    kpiByAsset: "KPI по активам",
    kpiTrend: "Тренд KPI по событиям",
    failureLog: "Журнал отказов и ремонтов",
    productionLog: "Журнал production run",
    addFailure: "+ Отказ / ремонт",
    addProduction: "+ Production run",
    addBtn: "Добавить",
    editBtn: "Редактировать",
    deleteBtn: "Удалить",
    actionsColumn: "Действия",
    closeBtn: "Закрыть",
    searchPlaceholder: "Поиск по заявкам, активам, техникам",
    live: "Live",
    statuses: {
      Open: "Открыта",
      "In Progress": "В работе",
      "On Hold": "На паузе",
      Done: "Завершена",
      New: "Новая",
      Approved: "Подтверждена",
      Waiting: "Ожидание",
      Stable: "Стабильно",
      Warning: "Предупреждение",
      Critical: "Критично",
      Active: "Активный"
    },
    priorities: {
      Critical: "Критический",
      High: "Высокий",
      Medium: "Средний",
      Low: "Низкий"
    },
    stats: {
      activeWorkOrders: "Активные заявки",
      assets: "Активы",
      pmTasks: "PM задачи",
      technicians: "Техники",
      overdue: "просрочено",
      critical: "критичных",
      planned: "запланировано",
      assignedNow: "назначено сейчас"
    },
    ordersWord: "заявок",
    requestsWord: "запросов",
    previewNoDetails: "Без описания",
    emptyFiltered: "По вашему фильтру ничего не найдено.",
    emptyAssets: "Попробуйте изменить поисковый запрос.",
    nothingFound: "Ничего не найдено",
    requestsNotFound: "Запросы не найдены",
    inventoryNotFound: "Поиск не нашел складских позиций.",
    usersNotFound: "Пользователи не найдены",
    health: "Состояние",
    shift: "Смена",
    workload: "Загрузка",
    activeTasks: "активных задач",
    nextDue: "Следующая дата",
    owner: "Ответственный",
    insight: "Рекомендация",
    reorder: "Пополнить",
    ok: "ОК",
    lowStock: "позиции ниже минимального остатка",
    criticalAssetExists: "Есть критичный актив, его стоит вынести в отдельный план реагирования.",
    criticalAssetNone: "Критичных активов в текущем реестре нет.",
    requestSlow: "Часть входящих запросов еще не конвертирована в работу, нужен более быстрый triage.",
    requestStable: "Поток входящих запросов обрабатывается стабильно.",
    reportLabels: {
      completion: "Закрытие WO",
      approval: "Подтверждение запросов",
      lowStock: "Дефицит склада",
      criticalAssets: "Критичные активы",
      mtbf: "MTBF",
      mttr: "MTTR",
      oee: "OEE"
    },
    reportNotes: {
      completion: "закрыто из общего списка",
      approval: "подтвержденных запросов",
      lowStock: "требуют пополнения",
      criticalAssets: "требуют внимания",
      mtbf: "среднее время между отказами",
      mttr: "среднее время восстановления",
      oee: "общая эффективность оборудования"
    },
    actions: {
      dashboard: "Быстрое действие",
      workorders: "+ Новая заявка",
      requests: "+ Новый запрос",
      assets: "+ Новый актив",
      inventory: "+ Новая запчасть",
      pm: "+ Новый PM",
      users: "+ Новый пользователь",
      reports: "+ Новый отчет",
      analytics: "KPI действия"
    },
    modal: {
      workorders: "Новая заявка",
      requests: "Новый запрос",
      assets: "Новый актив",
      inventory: "Новая запчасть",
      pm: "Новая PM задача",
      users: "Новый пользователь",
      report: "Новый отчет",
      failure: "Новое событие отказа",
      production: "Новый production run"
    },
    save: {
      workorders: "Сохранить заявку",
      requests: "Сохранить запрос",
      assets: "Сохранить актив",
      inventory: "Сохранить запчасть",
      pm: "Сохранить PM",
      users: "Сохранить пользователя",
      report: "Сохранить отчет",
      failure: "Сохранить событие",
      production: "Сохранить production run"
    },
    field: {
      title: "Название",
      priority: "Приоритет",
      status: "Статус",
      asset: "Актив",
      assignedTo: "Исполнитель",
      dueDate: "Срок",
      description: "Описание",
      requester: "Заявитель",
      createdAt: "Дата",
      note: "Примечание",
      name: "Название",
      category: "Категория",
      location: "Локация",
      health: "Состояние",
      sku: "SKU",
      onHand: "В наличии",
      minQty: "Мин. кол-во",
      frequency: "Периодичность",
      nextDue: "Следующая дата",
      owner: "Ответственный",
      role: "Роль",
      team: "Команда",
      workload: "Загрузка",
      shift: "Смена",
      failureStart: "Начало отказа",
      repairEnd: "Окончание ремонта",
      reason: "Причина",
      plannedMinutes: "План, мин",
      downtimeMinutes: "Простой, мин",
      idealCycleTimeSeconds: "Идеал. цикл, сек",
      totalCount: "Общий выпуск",
      goodCount: "Годный выпуск"
    },
    placeholder: {
      title: "Например: Вибрация на насосе 2",
      assignedTo: "Имя техника",
      description: "Кратко опишите проблему или задачу",
      requester: "Кто отправил запрос",
      note: "Дополнительная информация",
      name: "Введите название",
      category: "Например: HVAC",
      location: "Например: Цех 1",
      sku: "Код запчасти",
      frequency: "Например: Каждые 30 дней",
      owner: "Команда или сотрудник",
      role: "Например: Technician",
      team: "Например: Utilities",
      reason: "Например: отказ подшипника"
    },
    generatedReport: "Отчет сформирован",
    generatedReportText: "Снимок показателей добавлен в рекомендации.",
    snapshot: "Снимок",
    reportCreated: "Создан автоматически",
    brandedReportPrefix: "O'zMinda отчет",
    hours: "ч",
    minutes: "мин",
    noEvents: "События пока не добавлены",
    noRuns: "Производственные смены пока не добавлены"
  },
  uz: {
    nav: {
      dashboard: "Boshqaruv paneli",
      workorders: "Ish buyurtmalari",
      requests: "So'rovlar",
      assets: "Uskunalar",
      inventory: "Ombor",
      pm: "Rejali servis",
      users: "Foydalanuvchilar",
      reports: "Hisobotlar",
      analytics: "KPI Analytics"
    },
    plantLabel: "Ishlab chiqarish maydoni",
    overviewLabel: "Operatsion ko'rinish",
    heroTitle: "Uskunalar servis markazi",
    heroText: "Favqulodda buyurtmalar, rejali servis va texniklar yuklamasini bitta oynada kuzating.",
    activeOrdersSmall: "faol buyurtmalar",
    prioritiesTitle: "Ustuvorliklar",
    upcomingPm: "Yaqin PM",
    workOrdersTitle: "Ish buyurtmalari",
    allStatuses: "Barcha statuslar",
    allPriorities: "Barcha ustuvorliklar",
    thTitle: "Nomi",
    thStatus: "Status",
    thPriority: "Ustuvorlik",
    thAsset: "Uskuna",
    thAssigned: "Mas'ul",
    thDueDate: "Muddat",
    assetsRegistry: "Uskunalar reyestri",
    incomingRequests: "Kiruvchi so'rovlar",
    requestSummary: "Murojaatlar xulosasi",
    inventoryTitle: "Ombor va ehtiyot qismlar",
    thPart: "Qism",
    thSku: "SKU",
    thOnHand: "Mavjud",
    thMinQty: "Min. miqdor",
    thLocation: "Joylashuv",
    pmTitle: "Rejali texnik xizmat",
    teamRoles: "Jamoa va rollar",
    operationalMetrics: "Operatsion ko'rsatkichlar",
    recommendations: "Tavsiyalar",
    analyticsTitle: "KPI tahlili",
    kpiByAsset: "Aktivlar bo'yicha KPI",
    kpiTrend: "Hodisalar bo'yicha KPI trendi",
    failureLog: "Nosozlik va ta'mir jurnali",
    productionLog: "Production run jurnali",
    addFailure: "+ Nosozlik / ta'mir",
    addProduction: "+ Production run",
    addBtn: "Qo'shish",
    editBtn: "Tahrirlash",
    deleteBtn: "O'chirish",
    actionsColumn: "Amallar",
    closeBtn: "Yopish",
    searchPlaceholder: "Buyurtmalar, aktivlar va texniklar bo'yicha qidirish",
    live: "Jonli",
    statuses: {
      Open: "Ochiq",
      "In Progress": "Jarayonda",
      "On Hold": "Kutishda",
      Done: "Bajarilgan",
      New: "Yangi",
      Approved: "Tasdiqlangan",
      Waiting: "Kutilmoqda",
      Stable: "Barqaror",
      Warning: "Ogohlantirish",
      Critical: "Kritik",
      Active: "Faol"
    },
    priorities: {
      Critical: "Kritik",
      High: "Yuqori",
      Medium: "O'rta",
      Low: "Past"
    },
    stats: {
      activeWorkOrders: "Faol buyurtmalar",
      assets: "Uskunalar",
      pmTasks: "PM vazifalari",
      technicians: "Texniklar",
      overdue: "muddati o'tgan",
      critical: "kritik",
      planned: "rejalashtirilgan",
      assignedNow: "hozir biriktirilgan"
    },
    ordersWord: "buyurtma",
    requestsWord: "so'rov",
    previewNoDetails: "Tafsilot yo'q",
    emptyFiltered: "Filtr bo'yicha hech narsa topilmadi.",
    emptyAssets: "Qidiruv so'rovini o'zgartirib ko'ring.",
    nothingFound: "Hech narsa topilmadi",
    requestsNotFound: "So'rovlar topilmadi",
    inventoryNotFound: "Qidiruv ombor pozitsiyalarini topmadi.",
    usersNotFound: "Foydalanuvchilar topilmadi",
    health: "Holati",
    shift: "Smena",
    workload: "Yuklama",
    activeTasks: "faol vazifa",
    nextDue: "Keyingi sana",
    owner: "Mas'ul",
    insight: "Tavsiya",
    reorder: "Buyurtma berish",
    ok: "Yaxshi",
    lowStock: "pozitsiya minimal qoldiqdan past",
    criticalAssetExists: "Kritik aktiv bor, unga alohida reja kerak.",
    criticalAssetNone: "Joriy reyestrda kritik aktivlar yo'q.",
    requestSlow: "Kiruvchi so'rovlarning bir qismi hali ishga aylantirilmagan, tezroq triage kerak.",
    requestStable: "Kiruvchi so'rovlar oqimi barqaror qayta ishlanmoqda.",
    reportLabels: {
      completion: "WO yopilishi",
      approval: "So'rov tasdig'i",
      lowStock: "Kam qoldiq",
      criticalAssets: "Kritik aktivlar",
      mtbf: "MTBF",
      mttr: "MTTR",
      oee: "OEE"
    },
    reportNotes: {
      completion: "umumiy ro'yxatdan yopilgan",
      approval: "tasdiqlangan so'rovlar",
      lowStock: "to'ldirish kerak",
      criticalAssets: "e'tibor talab qiladi",
      mtbf: "nosozliklar orasidagi o'rtacha vaqt",
      mttr: "tiklash uchun o'rtacha vaqt",
      oee: "uskunaning umumiy samaradorligi"
    },
    actions: {
      dashboard: "Tezkor amal",
      workorders: "+ Yangi buyurtma",
      requests: "+ Yangi so'rov",
      assets: "+ Yangi uskuna",
      inventory: "+ Yangi ehtiyot qism",
      pm: "+ Yangi PM",
      users: "+ Yangi foydalanuvchi",
      reports: "Hisobot yaratish",
      analytics: "KPI amallari"
    },
    modal: {
      workorders: "Yangi buyurtma",
      requests: "Yangi so'rov",
      assets: "Yangi uskuna",
      inventory: "Yangi ehtiyot qism",
      pm: "Yangi PM vazifa",
      users: "Yangi foydalanuvchi",
      report: "Yangi hisobot",
      failure: "Yangi nosozlik hodisasi",
      production: "Yangi production run"
    },
    save: {
      workorders: "Buyurtmani saqlash",
      requests: "So'rovni saqlash",
      assets: "Uskunani saqlash",
      inventory: "Qismni saqlash",
      pm: "PM ni saqlash",
      users: "Foydalanuvchini saqlash",
      report: "Hisobotni saqlash",
      failure: "Hodisani saqlash",
      production: "Production run ni saqlash"
    },
    field: {
      title: "Nomi",
      priority: "Ustuvorlik",
      status: "Status",
      asset: "Uskuna",
      assignedTo: "Mas'ul",
      dueDate: "Muddat",
      description: "Tavsif",
      requester: "So'rovchi",
      createdAt: "Sana",
      note: "Izoh",
      name: "Nomi",
      category: "Kategoriya",
      location: "Joylashuv",
      health: "Holat",
      sku: "SKU",
      onHand: "Mavjud",
      minQty: "Min. miqdor",
      frequency: "Davriylik",
      nextDue: "Keyingi sana",
      owner: "Mas'ul",
      role: "Roli",
      team: "Jamoa",
      workload: "Yuklama",
      shift: "Smena",
      failureStart: "Nosozlik boshlanishi",
      repairEnd: "Ta'mir tugashi",
      reason: "Sabab",
      plannedMinutes: "Reja, min",
      downtimeMinutes: "To'xtash, min",
      idealCycleTimeSeconds: "Ideal sikl, sek",
      totalCount: "Umumiy son",
      goodCount: "Yaxshi mahsulot"
    },
    placeholder: {
      title: "Masalan: 2-nasosda vibratsiya",
      assignedTo: "Texnik ismi",
      description: "Muammo yoki vazifani qisqacha yozing",
      requester: "So'rovni kim yubordi",
      note: "Qo'shimcha ma'lumot",
      name: "Nomini kiriting",
      category: "Masalan: HVAC",
      location: "Masalan: 1-sex",
      sku: "Qism kodi",
      frequency: "Masalan: Har 30 kunda",
      owner: "Jamoa yoki xodim",
      role: "Masalan: Technician",
      team: "Masalan: Utilities",
      reason: "Masalan: podshipnik nosozligi"
    },
    generatedReport: "Hisobot yaratildi",
    generatedReportText: "Ko'rsatkichlar surati tavsiyalarga qo'shildi.",
    snapshot: "Snapshot",
    reportCreated: "Avtomatik yaratildi",
    brandedReportPrefix: "O'zMinda hisobot",
    hours: "soat",
    minutes: "min",
    noEvents: "Hodisalar hali qo'shilmagan",
    noRuns: "Production run lar hali qo'shilmagan"
  }
};

Object.assign(translations.ru, {
  brandSubtitle: "Умная CMMS-платформа",
  nextStepLabel: "Следующий шаг",
  addBackendTitle: "Можно добавить backend",
  addBackendText: "Этот прототип уже хранит данные локально и готов к переходу на API.",
  thFailureStart: "Начало отказа",
  thRepairEnd: "Окончание ремонта",
  thHours: "Часы",
  thReason: "Причина",
  thPlanned: "План",
  thDowntime: "Простой",
  thTotal: "Итого",
  thGood: "Годные",
  nav: {
    dashboard: "Панель",
    workorders: "Заявки",
    requests: "Запросы",
    assets: "Активы",
    inventory: "Склад",
    pm: "ППР",
    users: "Пользователи",
    reports: "Отчеты",
    analytics: "KPI аналитика"
  }
});

Object.assign(translations.uz, {
  brandSubtitle: "Aqlli CMMS platformasi",
  nextStepLabel: "Keyingi qadam",
  addBackendTitle: "Backend qo'shish mumkin",
  addBackendText: "Ushbu prototip ma'lumotlarni lokal saqlaydi va API ga o'tishga tayyor.",
  thFailureStart: "Nosozlik boshlanishi",
  thRepairEnd: "Ta'mir tugashi",
  thHours: "Soat",
  thReason: "Sabab",
  thPlanned: "Reja",
  thDowntime: "To'xtash",
  thTotal: "Jami",
  thGood: "Yaxshi",
  nav: {
    dashboard: "Panel",
    workorders: "Buyurtmalar",
    requests: "So'rovlar",
    assets: "Uskunalar",
    inventory: "Ombor",
    pm: "PPR",
    users: "Foydalanuvchilar",
    reports: "Hisobotlar",
    analytics: "KPI tahlili"
  }
});

translations.en = {
  nav: {
    dashboard: "Dashboard",
    workorders: "Work Orders",
    requests: "Requests",
    assets: "Equipments",
    inventory: "Inventory",
    pm: "Preventive Maintenance",
    users: "Users",
    reports: "Reports",
    analytics: "KPI Analytics"
  },
  brandSubtitle: "Smart CMMS Platform",
  nextStepLabel: "Next Step",
  addBackendTitle: "Backend can be added",
  addBackendText: "This prototype already stores data locally and is ready to move to an API.",
  plantLabel: "Production Site",
  overviewLabel: "Operations Overview",
  heroTitle: "Equipment Service Center",
  heroText: "Track emergency work orders, planned service, and technician workload in one place.",
  activeOrdersSmall: "active work orders",
  prioritiesTitle: "Priorities",
  upcomingPm: "Upcoming PM",
  workOrdersTitle: "Work Orders",
  allStatuses: "All statuses",
  allPriorities: "All priorities",
  thTitle: "Title",
  thStatus: "Status",
  thPriority: "Priority",
  thAsset: "Asset",
  thAssigned: "Assigned",
  thDueDate: "Due Date",
  thPart: "Part",
  thSku: "SKU",
  thOnHand: "On Hand",
  thMinQty: "Min Qty",
  thLocation: "Location",
  thFailureStart: "Failure Start",
  thRepairEnd: "Repair End",
  thHours: "Hours",
  thReason: "Reason",
  thPlanned: "Planned",
  thDowntime: "Downtime",
  thTotal: "Total",
  thGood: "Good",
  assetsRegistry: "Equipment Registry",
  incomingRequests: "Incoming Requests",
  requestSummary: "Request Summary",
  inventoryTitle: "Inventory & Parts",
  pmTitle: "Preventive Maintenance",
  teamRoles: "Team & Roles",
  operationalMetrics: "Operational Metrics",
  recommendations: "Recommendations",
  analyticsTitle: "KPI Analytics",
  kpiByAsset: "KPI by Asset",
  kpiTrend: "KPI Trend",
  failureLog: "Failure Log",
  productionLog: "Production Runs",
  addFailure: "+ Failure Event",
  addProduction: "+ Production Run",
  addBtn: "Add",
  editBtn: "Edit",
  deleteBtn: "Delete",
  actionsColumn: "Actions",
  closeBtn: "Close",
  searchPlaceholder: "Search work orders, assets, technicians",
  live: "Live",
  statuses: {
    Open: "Open",
    "In Progress": "In Progress",
    "On Hold": "On Hold",
    Done: "Done",
    New: "New",
    Approved: "Approved",
    Waiting: "Waiting",
    Stable: "Stable",
    Warning: "Warning",
    Critical: "Critical",
    Active: "Active",
    Day: "Day",
    Evening: "Evening",
    Night: "Night"
  },
  priorities: {
    Critical: "Critical",
    High: "High",
    Medium: "Medium",
    Low: "Low"
  },
  stats: {
    activeWorkOrders: "Active Work Orders",
    assets: "Equipments",
    pmTasks: "PM Tasks",
    technicians: "Technicians",
    overdue: "overdue",
    critical: "critical",
    planned: "planned",
    assignedNow: "assigned now"
  },
  ordersWord: "orders",
  requestsWord: "requests",
  previewNoDetails: "No details",
  emptyFiltered: "Nothing found for this filter.",
  emptyAssets: "Try changing the search query.",
  nothingFound: "Nothing found",
  requestsNotFound: "No requests found",
  inventoryNotFound: "No inventory items found.",
  usersNotFound: "No users found",
  health: "Health",
  shift: "Shift",
  workload: "Workload",
  activeTasks: "active tasks",
  nextDue: "Next Due",
  owner: "Owner",
  insight: "Insight",
  reorder: "Reorder",
  ok: "OK",
  lowStock: "items are below minimum stock",
  criticalAssetExists: "There is a critical asset that needs a dedicated response plan.",
  criticalAssetNone: "There are no critical assets in the current registry.",
  requestSlow: "Some incoming requests have not yet been converted into work orders.",
  requestStable: "Incoming requests are being processed steadily.",
  reportLabels: {
    completion: "WO Completion",
    approval: "Request Approval",
    lowStock: "Low Stock",
    criticalAssets: "Critical Assets",
    mtbf: "MTBF",
    mttr: "MTTR",
    oee: "OEE"
  },
  reportNotes: {
    completion: "closed from the overall list",
    approval: "approved requests",
    lowStock: "need replenishment",
    criticalAssets: "require attention",
    mtbf: "mean time between failures",
    mttr: "mean time to repair",
    oee: "overall equipment effectiveness"
  },
  actions: {
    dashboard: "Quick Action",
    workorders: "+ New Work Order",
    requests: "+ New Request",
    assets: "+ New Equipment",
    inventory: "+ New Part",
    pm: "+ New PM Task",
    users: "+ New User",
    reports: "+ New Report",
    analytics: "KPI Actions"
  },
  modal: {
    workorders: "New Work Order",
    requests: "New Request",
    assets: "New Equipment",
    inventory: "New Part",
    pm: "New PM Task",
    users: "New User",
    report: "New Report",
    failure: "New Failure Event",
    production: "New Production Run"
  },
  save: {
    workorders: "Save Work Order",
    requests: "Save Request",
    assets: "Save Equipment",
    inventory: "Save Part",
    pm: "Save PM Task",
    users: "Save User",
    report: "Save Report",
    failure: "Save Event",
    production: "Save Production Run"
  },
    field: {
    title: "Title",
    priority: "Priority",
    status: "Status",
    asset: "Equipment",
    assignedTo: "Assigned To",
    dueDate: "Due Date",
    description: "Description",
    requester: "Requester",
    createdAt: "Date",
    note: "Note",
    name: "Name",
    category: "Category",
    location: "Location",
    health: "Health",
    sku: "SKU",
    onHand: "On Hand",
    minQty: "Min Qty",
    frequency: "Frequency",
    nextDue: "Next Due",
    owner: "Owner",
    role: "Role",
    team: "Team",
    workload: "Workload",
    shift: "Shift",
    failureStart: "Failure Start",
    repairEnd: "Repair End",
    reason: "Reason",
    plannedMinutes: "Planned Min",
    downtimeMinutes: "Downtime Min",
    idealCycleTimeSeconds: "Ideal Cycle Sec",
    totalCount: "Total Count",
      goodCount: "Good Count"
    },
    placeholder: {
    title: "For example: Vibration on pump 2",
    assignedTo: "Technician name",
    description: "Describe the issue or task briefly",
    requester: "Who submitted the request",
    note: "Additional information",
    name: "Enter a name",
    category: "For example: HVAC",
    location: "For example: Shop 1",
    sku: "Part code",
    frequency: "For example: Every 30 days",
    owner: "Team or employee",
    role: "For example: Technician",
      team: "For example: Utilities",
      reason: "For example: bearing failure"
    },
    fileFieldHelp: "Upload image",
    generatedReport: "Generated Report",
  generatedReportText: "A KPI snapshot was added to recommendations.",
  snapshot: "Snapshot",
  reportCreated: "Created automatically",
  brandedReportPrefix: "O'zMinda Report",
  hours: "h",
  minutes: "min",
  noEvents: "No events added yet",
  noRuns: "No production runs added yet"
};

translations.ru.pageTitle = "O'zMinda CMMS";
translations.uz.pageTitle = "O'zMinda CMMS";
translations.en.pageTitle = "O'zMinda CMMS";
Object.assign(translations.ru, {
  reportsOverviewEyebrow: "Отчет руководителя",
  reportsOverviewTitle: "Понятная сводка CMMS",
  reportOverviewSubtitle: "Главные показатели собраны в одном месте: эффективность оборудования, скорость ремонта, заявки и риски склада.",
  reportScore: "Итоговая оценка",
  reportStatusGood: "Стабильно",
  reportStatusGoodTitle: "Система работает устойчиво",
  reportStatusWatch: "Контроль",
  reportStatusWatchTitle: "Есть зоны для контроля",
  reportStatusCritical: "Внимание",
  reportStatusCriticalTitle: "Нужны действия по надежности",
  reportFormulaTitle: "Как считается KPI",
  reportFormulaOee: "OEE = доступность x производительность x качество",
  reportFormulaMtbf: "MTBF = рабочее время / количество отказов",
  reportFormulaMttr: "MTTR = время ремонта / количество отказов",
  reportDataTitle: "Данные для расчета",
  reportRuntime: "Рабочее время",
  reportDowntime: "Простой производства",
  reportFailures: "Отказы",
  reportSavedSnapshots: "Сохраненные отчеты",
  generatedReportText: "Снимок показателей сохранен в разделе отчетов."
});
Object.assign(translations.uz, {
  reportsOverviewEyebrow: "Rahbar hisoboti",
  reportsOverviewTitle: "CMMS bo'yicha tushunarli xulosa",
  reportOverviewSubtitle: "Asosiy ko'rsatkichlar bir joyda: uskuna samaradorligi, ta'mir tezligi, buyurtmalar va ombor xatarlari.",
  reportScore: "Yakuniy baho",
  reportStatusGood: "Barqaror",
  reportStatusGoodTitle: "Tizim barqaror ishlamoqda",
  reportStatusWatch: "Nazorat",
  reportStatusWatchTitle: "Nazorat qilinadigan joylar bor",
  reportStatusCritical: "Diqqat",
  reportStatusCriticalTitle: "Ishonchlilik bo'yicha choralar kerak",
  reportFormulaTitle: "KPI qanday hisoblanadi",
  reportFormulaOee: "OEE = mavjudlik x unumdorlik x sifat",
  reportFormulaMtbf: "MTBF = ish vaqti / nosozliklar soni",
  reportFormulaMttr: "MTTR = ta'mir vaqti / nosozliklar soni",
  reportDataTitle: "Hisoblash ma'lumotlari",
  reportRuntime: "Ish vaqti",
  reportDowntime: "Ishlab chiqarish to'xtashi",
  reportFailures: "Nosozliklar",
  reportSavedSnapshots: "Saqlangan hisobotlar",
  generatedReportText: "Ko'rsatkichlar surati hisobotlar bo'limida saqlandi."
});
Object.assign(translations.en, {
  reportsOverviewEyebrow: "Management report",
  reportsOverviewTitle: "Clear CMMS Summary",
  reportOverviewSubtitle: "Key indicators in one place: equipment effectiveness, repair speed, work flow, and inventory risk.",
  reportScore: "Overall score",
  reportStatusGood: "Stable",
  reportStatusGoodTitle: "The system is running steadily",
  reportStatusWatch: "Watch",
  reportStatusWatchTitle: "Some areas need monitoring",
  reportStatusCritical: "Attention",
  reportStatusCriticalTitle: "Reliability actions are needed",
  reportFormulaTitle: "How KPI Is Calculated",
  reportFormulaOee: "OEE = availability x performance x quality",
  reportFormulaMtbf: "MTBF = runtime / failures",
  reportFormulaMttr: "MTTR = repair time / failures",
  reportDataTitle: "Calculation Data",
  reportRuntime: "Runtime",
  reportDowntime: "Production downtime",
  reportFailures: "Failures",
  reportSavedSnapshots: "Saved Reports",
  generatedReportText: "The KPI snapshot was saved in reports."
});
translations.ru.field.images = "Фотографии оборудования";
translations.uz.field.images = "Uskuna rasmlari";
translations.en.field.images = "Equipment Photos";
translations.ru.field.pressFormImages = "Фотографии пресс формы";
translations.uz.field.pressFormImages = "Press forma rasmlari";
translations.en.field.pressFormImages = "Press Form Photos";
translations.ru.fileFieldHelp = "Можно выбрать несколько фото или сделать снимок с камеры";
translations.uz.fileFieldHelp = "Bir nechta rasm tanlash yoki kameradan surat olish mumkin";
translations.en.fileFieldHelp = "You can select multiple photos or take a camera shot";
translations.ru.qrTitle = "QR-код";
translations.uz.qrTitle = "QR-kod";
translations.en.qrTitle = "QR Code";
translations.ru.printAssetQrBtn = "Печать QR";
translations.uz.printAssetQrBtn = "QR chop etish";
translations.en.printAssetQrBtn = "Print QR";
translations.ru.assetQrSheetTitle = "QR-наклейки оборудования";
translations.uz.assetQrSheetTitle = "Uskuna QR yorliqlari";
translations.en.assetQrSheetTitle = "Equipment QR Labels";
translations.ru.assetQrSheetSubtitle = "Распечатайте наклейки и установите их на оборудование.";
translations.uz.assetQrSheetSubtitle = "Yorliqlarni chop etib, uskunalarga o'rnating.";
translations.en.assetQrSheetSubtitle = "Print the labels and place them on equipment.";
translations.ru.assetQrScanHint = "Сканируйте телефоном";
translations.uz.assetQrScanHint = "Telefon bilan skanerlang";
translations.en.assetQrScanHint = "Scan with phone";
translations.ru.assetQrPrintEmpty = "Нет оборудования для печати QR-кодов.";
translations.uz.assetQrPrintEmpty = "QR chop etish uchun uskuna yo'q.";
translations.en.assetQrPrintEmpty = "No equipment to print QR codes for.";
translations.ru.qrScanTitle = "Сканировать для открытия";
translations.uz.qrScanTitle = "Ochish uchun skanerlang";
translations.en.qrScanTitle = "Scan to open";
translations.ru.qrScanText = "Код открывает эту карточку на телефоне.";
translations.uz.qrScanText = "Kod telefonda shu kartani ochadi.";
translations.en.qrScanText = "The code opens this card on a phone.";
translations.ru.localStorageFullWarning = "Запись показана на экране, но памяти приложения может не хватить для сохранения всех фото. Добавляйте меньше фото или снимайте заново.";
translations.uz.localStorageFullWarning = "Yozuv ekranda ko'rindi, lekin ilova xotirasi barcha rasmlarni saqlashga yetmasligi mumkin. Kamroq rasm qo'shing yoki qayta suratga oling.";
translations.en.localStorageFullWarning = "The record is shown, but the app may not have enough storage for all photos. Add fewer photos or take them again.";
translations.ru.dashboardAlertsEyebrow = "Контроль CMMS";
translations.uz.dashboardAlertsEyebrow = "CMMS nazorati";
translations.en.dashboardAlertsEyebrow = "CMMS Control";
translations.ru.dashboardAlertsTitle = "Уведомления";
translations.uz.dashboardAlertsTitle = "Bildirishnomalar";
translations.en.dashboardAlertsTitle = "Notifications";
translations.ru.auditEyebrow = "История";
translations.uz.auditEyebrow = "Tarix";
translations.en.auditEyebrow = "History";
translations.ru.auditTitle = "Последние действия";
translations.uz.auditTitle = "Oxirgi amallar";
translations.en.auditTitle = "Latest Actions";
translations.ru.exportCsvBtn = "Экспорт CSV";
translations.uz.exportCsvBtn = "CSV eksport";
translations.en.exportCsvBtn = "Export CSV";
translations.ru.exportReportBtn = "PDF/Печать";
translations.uz.exportReportBtn = "PDF/Chop etish";
translations.en.exportReportBtn = "PDF/Print";
translations.ru.assignQuickLabel = "Исполнитель";
translations.uz.assignQuickLabel = "Ijrochi";
translations.en.assignQuickLabel = "Assigned";
translations.ru.slaLabel = "SLA";
translations.uz.slaLabel = "SLA";
translations.en.slaLabel = "SLA";
translations.ru.slaOk = "В срок";
translations.uz.slaOk = "Muddatida";
translations.en.slaOk = "On time";
translations.ru.slaOverdue = "Просрочено";
translations.uz.slaOverdue = "Kechikkan";
translations.en.slaOverdue = "Overdue";
translations.ru.commentsTitle = "Комментарии";
translations.uz.commentsTitle = "Izohlar";
translations.en.commentsTitle = "Comments";
translations.ru.commentPlaceholder = "Добавить комментарий";
translations.uz.commentPlaceholder = "Izoh qo'shish";
translations.en.commentPlaceholder = "Add a comment";
translations.ru.addCommentBtn = "Добавить";
translations.uz.addCommentBtn = "Qo'shish";
translations.en.addCommentBtn = "Add";
translations.ru.timelineTitle = "История";
translations.uz.timelineTitle = "Tarix";
translations.en.timelineTitle = "Timeline";
translations.ru.inventorySupplier = "Поставщик";
translations.uz.inventorySupplier = "Yetkazuvchi";
translations.en.inventorySupplier = "Supplier";
translations.ru.inventoryPrice = "Цена";
translations.uz.inventoryPrice = "Narx";
translations.en.inventoryPrice = "Price";
translations.ru.field.supplier = "Поставщик";
translations.uz.field.supplier = "Yetkazuvchi";
translations.en.field.supplier = "Supplier";
translations.ru.field.unitCost = "Цена";
translations.uz.field.unitCost = "Narx";
translations.en.field.unitCost = "Price";
translations.ru.field.reorderUrl = "Ссылка для заказа";
translations.uz.field.reorderUrl = "Buyurtma havolasi";
translations.en.field.reorderUrl = "Reorder URL";
translations.ru.reorderAction = "Заказать";
translations.uz.reorderAction = "Buyurtma";
translations.en.reorderAction = "Reorder";
translations.ru.pmMonthView = "Месяц";
translations.uz.pmMonthView = "Oy";
translations.en.pmMonthView = "Month";
translations.ru.pmWeekView = "Неделя";
translations.uz.pmWeekView = "Hafta";
translations.en.pmWeekView = "Week";
translations.ru.stockMoveTitle = "Движение запчасти";
translations.uz.stockMoveTitle = "Ehtiyot qism harakati";
translations.en.stockMoveTitle = "Part movement";
translations.ru.stockMoveType = "Операция";
translations.uz.stockMoveType = "Amal";
translations.en.stockMoveType = "Movement";
translations.ru.stockMoveQty = "Количество";
translations.uz.stockMoveQty = "Miqdor";
translations.en.stockMoveQty = "Quantity";
translations.ru.stockMoveNote = "Комментарий";
translations.uz.stockMoveNote = "Izoh";
translations.en.stockMoveNote = "Comment";
translations.ru.stockMoveHistory = "История движения";
translations.uz.stockMoveHistory = "Harakat tarixi";
translations.en.stockMoveHistory = "Movement history";
translations.ru.stockMoveBalance = "Остаток";
translations.uz.stockMoveBalance = "Qoldiq";
translations.en.stockMoveBalance = "On hand";
translations.ru.stockMoveEmpty = "Движений пока нет.";
translations.uz.stockMoveEmpty = "Hozircha harakat yo'q.";
translations.en.stockMoveEmpty = "No movements yet.";
translations.ru.saveStockMoveBtn = "Сохранить движение";
translations.uz.saveStockMoveBtn = "Harakatni saqlash";
translations.en.saveStockMoveBtn = "Save movement";
translations.ru.stockMoveOpen = "Приход / списание";
translations.uz.stockMoveOpen = "Kirim / chiqim";
translations.en.stockMoveOpen = "Receive / issue";
translations.ru.stockNotEnough = "Недостаточно запчастей на складе для списания.";
translations.uz.stockNotEnough = "Chiqim uchun omborda ehtiyot qism yetarli emas.";
translations.en.stockNotEnough = "There is not enough stock for this issue.";
translations.ru.stockMoveTypes = { Receipt: "Приход", Issue: "Списание", Return: "Возврат" };
translations.uz.stockMoveTypes = { Receipt: "Kirim", Issue: "Chiqim", Return: "Qaytarish" };
translations.en.stockMoveTypes = { Receipt: "Receipt", Issue: "Issue", Return: "Return" };
translations.ru.statuses["Waiting Parts"] = "Ожидание запчастей";
translations.uz.statuses["Waiting Parts"] = "Ehtiyot qism kutilmoqda";
translations.en.statuses["Waiting Parts"] = "Waiting Parts";
translations.ru.statuses["Waiting Technician"] = "Ожидание специалиста";
translations.uz.statuses["Waiting Technician"] = "Mutaxassis kutilmoqda";
translations.en.statuses["Waiting Technician"] = "Waiting Technician";
translations.ru.field.rootCause = "Причина неисправности";
translations.uz.field.rootCause = "Nosozlik sababi";
translations.en.field.rootCause = "Root cause";
translations.ru.field.workPerformed = "Выполненные работы";
translations.uz.field.workPerformed = "Bajarilgan ishlar";
translations.en.field.workPerformed = "Work performed";
translations.ru.field.completedBy = "Подтвердил завершение";
translations.uz.field.completedBy = "Yakunlashni tasdiqladi";
translations.en.field.completedBy = "Completion confirmed by";
translations.ru.placeholder.rootCause = "Например: износ ремня, утечка воздуха, ошибка датчика";
translations.uz.placeholder.rootCause = "Masalan: remen eskirgan, havo sizishi, sensor xatosi";
translations.en.placeholder.rootCause = "Example: belt wear, air leak, sensor fault";
translations.ru.placeholder.workPerformed = "Что проверили, заменили и как протестировали запуск";
translations.uz.placeholder.workPerformed = "Nima tekshirildi, almashtirildi va sinov qanday o'tdi";
translations.en.placeholder.workPerformed = "What was checked, replaced, and tested";
translations.ru.placeholder.completedBy = "Сотрудник, принявший работу";
translations.uz.placeholder.completedBy = "Ishni qabul qilgan xodim";
translations.en.placeholder.completedBy = "Person who accepted the work";
translations.ru.repairStagesTitle = "Этап ремонта";
translations.uz.repairStagesTitle = "Ta'mir bosqichi";
translations.en.repairStagesTitle = "Repair stage";
translations.ru.repairStageHelp = "Нажмите этап, чтобы обновить статус наряда.";
translations.uz.repairStageHelp = "Naryad statusini yangilash uchun bosqichni bosing.";
translations.en.repairStageHelp = "Select a stage to update the work order.";
translations.ru.faultCloseoutTitle = "Наряд и простой";
translations.uz.faultCloseoutTitle = "Naryad va to'xtash";
translations.en.faultCloseoutTitle = "Work order closeout";
translations.ru.downtimeLabel = "Простой";
translations.uz.downtimeLabel = "To'xtash";
translations.en.downtimeLabel = "Downtime";
translations.ru.currentDowntime = "идет";
translations.uz.currentDowntime = "davom etmoqda";
translations.en.currentDowntime = "running";
translations.ru.noAlerts = "Критичных уведомлений сейчас нет";
translations.uz.noAlerts = "Hozir muhim bildirishnomalar yo'q";
translations.en.noAlerts = "No critical notifications right now";
translations.ru.noAudit = "История пока пустая";
translations.uz.noAudit = "Tarix hozircha bo'sh";
translations.en.noAudit = "No history yet";
translations.ru.csvExported = "CSV-файл готов для Excel";
translations.uz.csvExported = "CSV fayl Excel uchun tayyor";
translations.en.csvExported = "CSV file is ready for Excel";
translations.ru.alertLowStock = "Низкий остаток";
translations.uz.alertLowStock = "Kam qoldiq";
translations.en.alertLowStock = "Low stock";
translations.ru.alertOverduePm = "Просрочен ППР";
translations.uz.alertOverduePm = "PPR muddati o'tgan";
translations.en.alertOverduePm = "Overdue PM";
translations.ru.alertCriticalFault = "Критичная неисправность";
translations.uz.alertCriticalFault = "Kritik nosozlik";
translations.en.alertCriticalFault = "Critical fault";
translations.ru.alertCycleLimit = "Пресс-форма близко к лимиту";
translations.uz.alertCycleLimit = "Press forma limitga yaqin";
translations.en.alertCycleLimit = "Press form near cycle limit";
Object.assign(translations.ru, {
  equipmentDetailsTitle: "Карточка оборудования",
  pmCalendarTitle: "Календарь PM",
  openDetails: "Открыть карточку",
  equipmentProfile: "Профиль",
  linkedWorkOrders: "Связанные заявки",
  linkedPm: "Связанные PM",
  maintenanceHistory: "История отказов",
  documentsTitle: "Файлы и вложения",
  noDocuments: "Вложений пока нет",
  noLinkedWorkOrders: "Связанных заявок пока нет",
  noLinkedPm: "PM-задач пока нет",
  noMaintenanceHistory: "История отказов пока пуста",
  selectEquipmentHint: "Выберите оборудование слева, чтобы увидеть KPI, историю и вложения.",
  allEquipment: "Все оборудование",
  analyticsSummaryTitle: "Операционная сводка",
  reactiveVsPm: "Reactive vs Preventive",
  downtimeRisk: "Риск простоя",
  plannedWindow: "План на 30 дней",
  pmCalendarEmpty: "На ближайшие 30 дней PM-задач не найдено",
  attachmentsHelp: "Можно загрузить PDF, фото и другие файлы",
  noEquipmentPhoto: "Нет фото",
  detailHealth: "Состояние",
  detailCriticality: "Критичность",
  relatedParts: "Связанные запчасти",
  noRelatedParts: "Подходящие запчасти не найдены",
  assetCountPhotos: "фото",
  partCountPhotos: "фото",
  field: {
    ...translations.ru.field,
    manufacturer: "Производитель",
    model: "Модель",
    serialNumber: "Серийный номер",
    installDate: "Дата ввода",
    criticality: "Критичность",
    notes: "Примечания",
    attachments: "Вложения",
    partImages: "Фотографии запчасти"
  },
  placeholder: {
    ...translations.ru.placeholder,
    manufacturer: "Например: Siemens",
    model: "Например: S7-1200",
    serialNumber: "Например: SN-2026-001",
    criticality: "Например: A / High",
    notes: "Паспорт, ограничения, особые замечания"
  }
});
Object.assign(translations.uz, {
  equipmentDetailsTitle: "Uskuna kartasi",
  pmCalendarTitle: "PM kalendari",
  openDetails: "Kartani ochish",
  equipmentProfile: "Profil",
  linkedWorkOrders: "Bog'langan buyurtmalar",
  linkedPm: "Bog'langan PM",
  maintenanceHistory: "Nosozlik tarixi",
  documentsTitle: "Fayllar va ilovalar",
  noDocuments: "Hali fayl biriktirilmagan",
  noLinkedWorkOrders: "Bog'langan buyurtmalar yo'q",
  noLinkedPm: "PM vazifalari yo'q",
  noMaintenanceHistory: "Nosozlik tarixi hali bo'sh",
  selectEquipmentHint: "Chap tomondan uskunani tanlang, KPI, tarix va fayllar ko'rsatiladi.",
  allEquipment: "Barcha uskunalar",
  analyticsSummaryTitle: "Operatsion xulosa",
  reactiveVsPm: "Reactive vs Preventive",
  downtimeRisk: "To'xtash riski",
  plannedWindow: "30 kunlik reja",
  pmCalendarEmpty: "Yaqin 30 kun uchun PM vazifalari topilmadi",
  attachmentsHelp: "PDF, rasm va boshqa fayllarni yuklash mumkin",
  noEquipmentPhoto: "Rasm yo'q",
  detailHealth: "Holati",
  detailCriticality: "Kritikligi",
  relatedParts: "Bog'liq ehtiyot qismlar",
  noRelatedParts: "Mos ehtiyot qismlar topilmadi",
  assetCountPhotos: "rasm",
  partCountPhotos: "rasm",
  field: {
    ...translations.uz.field,
    manufacturer: "Ishlab chiqaruvchi",
    model: "Model",
    serialNumber: "Seriya raqami",
    installDate: "Ishga tushirilgan sana",
    criticality: "Kritiklik",
    notes: "Izohlar",
    attachments: "Ilovalar",
    partImages: "Ehtiyot qism rasmlari"
  },
  placeholder: {
    ...translations.uz.placeholder,
    manufacturer: "Masalan: Siemens",
    model: "Masalan: S7-1200",
    serialNumber: "Masalan: SN-2026-001",
    criticality: "Masalan: A / High",
    notes: "Pasport, cheklovlar, maxsus eslatmalar"
  }
});
Object.assign(translations.en, {
  equipmentDetailsTitle: "Equipment Details",
  pmCalendarTitle: "PM Calendar",
  openDetails: "Open Details",
  equipmentProfile: "Profile",
  linkedWorkOrders: "Linked Work Orders",
  linkedPm: "Linked PM",
  maintenanceHistory: "Failure History",
  documentsTitle: "Files & Attachments",
  noDocuments: "No attachments yet",
  noLinkedWorkOrders: "No linked work orders yet",
  noLinkedPm: "No PM tasks yet",
  noMaintenanceHistory: "Failure history is empty",
  selectEquipmentHint: "Select equipment on the left to see KPI, history, and attachments.",
  allEquipment: "All Equipment",
  analyticsSummaryTitle: "Operations Snapshot",
  reactiveVsPm: "Reactive vs Preventive",
  downtimeRisk: "Downtime Risk",
  plannedWindow: "30-Day Plan",
  pmCalendarEmpty: "No PM tasks found for the next 30 days",
  attachmentsHelp: "Upload PDFs, photos, and other files",
  noEquipmentPhoto: "No photo",
  detailHealth: "Health",
  detailCriticality: "Criticality",
  relatedParts: "Related Parts",
  noRelatedParts: "No matching parts found",
  assetCountPhotos: "photos",
  partCountPhotos: "photos",
  field: {
    ...translations.en.field,
    manufacturer: "Manufacturer",
    model: "Model",
    serialNumber: "Serial Number",
    installDate: "Install Date",
    criticality: "Criticality",
    notes: "Notes",
    attachments: "Attachments",
    partImages: "Part Photos"
  },
  placeholder: {
    ...translations.en.placeholder,
    manufacturer: "Example: Siemens",
    model: "Example: S7-1200",
    serialNumber: "Example: SN-2026-001",
    criticality: "Example: A / High",
    notes: "Manual notes, constraints, special remarks"
  }
});
translations.ru.nav.assets = "Оборудование";
translations.ru.nav.pressForms = "Пресс формы";
translations.ru.nav.criticalParts = "Критические запасные части";
translations.ru.criticalPartsTitle = "Критические запасные части";
translations.ru.criticalPartsNotFound = "Критические запчасти не найдены";
translations.ru.criticalPartRisk = "Риск";
translations.ru.field.criticalPart = "Тип запчасти";
translations.ru.criticalPartOptions = { Critical: "Критическая", Standard: "Обычная" };
translations.ru.actions.criticalParts = "+ Новая критическая запчасть";
translations.ru.createdWhen = "Создано";
translations.ru.neededBy = "Нужно до";
translations.ru.createdBy = "Создал";
translations.ru.nav.settings = "Настройки";
translations.ru.settingsInterfaceEyebrow = "Интерфейс";
translations.ru.settingsInterfaceTitle = "Настройки интерфейса";
translations.ru.settingsLanguageTitle = "Язык";
translations.ru.settingsLanguageText = "Выберите язык отображения.";
translations.ru.settingsAccountEyebrow = "Аккаунт";
translations.ru.settingsAccountTitle = "Текущий пользователь";
translations.ru.settingsDataEyebrow = "Данные";
translations.ru.settingsDataTitle = "Данные и Backup";
translations.ru.settingsBackupTitle = "Backup";
translations.ru.settingsBackupReady = "Доступно для администратора";
translations.ru.settingsBackupRestricted = "Нет прав на создание backup";
translations.ru.settingsStorageTitle = "Хранилище";
translations.ru.settingsStorageBackend = "Backend API";
translations.ru.settingsStorageLocal = "Локальное хранилище";
translations.ru.settingsCompanyEyebrow = "Компания";
translations.ru.settingsCompanyTitle = "Профиль предприятия";
translations.ru.settingsCompanyName = "Название компании";
translations.ru.settingsCompanySite = "Производственная площадка";
translations.ru.settingsAccessEyebrow = "Доступ";
translations.ru.settingsAccessTitle = "Пользователи и доступ";
translations.ru.settingsAccessSubtitle = "Управляйте логинами, ролями и уровнем доступа.";
translations.ru.settingsAddUser = "Добавить пользователя";
translations.ru.settingsAccessLabel = "Доступ";
translations.ru.settingsTelegramEyebrow = "Уведомления";
translations.ru.settingsTelegramTitle = "Telegram";
translations.ru.settingsTelegramEnabled = "Включено";
translations.ru.settingsTelegramBotToken = "Bot token";
translations.ru.settingsTelegramChatId = "Chat ID";
translations.ru.settingsTelegramTest = "Тест";
translations.ru.settingsTelegramHelp = "Создайте бота в BotFather, укажите token и chat ID.";
translations.ru.settingsTelegramSaved = "Telegram настройки сохранены";
translations.ru.settingsTelegramTestOk = "Тестовое сообщение отправлено";
translations.ru.settingsTelegramTestFailed = "Не удалось отправить Telegram сообщение";
translations.ru.settingsTelegramNeedBackend = "Запустите backend, чтобы отправлять Telegram уведомления";
translations.ru.userDeleteSelfWarning = "Нельзя удалить текущего пользователя.";
translations.ru.userLastAdminWarning = "Нельзя удалить последнего администратора.";
translations.ru.userDuplicateWarning = "Пользователь с таким логином уже есть.";
translations.ru.roleAccess = {
  Supervisor: "Полный доступ ко всем разделам",
  Planner: "Планирование, заявки, ППР и отчеты",
  Technician: "Неисправности, оборудование и KPI"
};
translations.ru.saveSettingsBtn = "Сохранить";
translations.ru.settingsSaved = "Настройки сохранены";
translations.ru.alertOpen = "Открыть";
translations.ru.alertsTotalCount = "Всего";
translations.ru.alertsCriticalCount = "Критично";
translations.ru.alertsWarningCount = "Внимание";
translations.ru.roles = {
  Supervisor: "Админ",
  Planner: "Планировщик",
  Technician: "Техник"
};
Object.assign(translations.ru.statuses, {
  Inactive: "Неактивный",
  Day: "День",
  Evening: "Вечер",
  Night: "Ночь"
});
translations.ru.assetsRegistry = "Реестр оборудования";
translations.ru.pressFormsRegistry = "Реестр пресс форм";
translations.ru.stats.assets = "Оборудование";
translations.ru.actions.assets = "+ Новое оборудование";
translations.ru.actions.pressForms = "+ Новая пресс форма";
translations.ru.modal.assets = "Новое оборудование";
translations.ru.modal.pressForms = "Новая пресс форма";
translations.ru.save.assets = "Сохранить оборудование";
translations.ru.save.pressForms = "Сохранить пресс форму";
translations.ru.field.cavityCount = "Гнезда";
translations.ru.field.pressFormStatus = "Состояние";
translations.ru.field.currentCycles = "Текущие циклы";
translations.ru.field.cycleLimit = "Плановый ресурс";
translations.uz.nav.pressForms = "Press formalar";
translations.uz.nav.criticalParts = "Kritik ehtiyot qismlar";
translations.uz.criticalPartsTitle = "Kritik ehtiyot qismlar";
translations.uz.criticalPartsNotFound = "Kritik ehtiyot qismlar topilmadi";
translations.uz.criticalPartRisk = "Xavf";
translations.uz.field.criticalPart = "Qism turi";
translations.uz.criticalPartOptions = { Critical: "Kritik", Standard: "Oddiy" };
translations.uz.actions.criticalParts = "+ Yangi kritik qism";
translations.uz.createdWhen = "Yaratilgan";
translations.uz.neededBy = "Kerak sana";
translations.uz.createdBy = "Yaratgan";
translations.uz.nav.settings = "Sozlamalar";
translations.uz.settingsInterfaceEyebrow = "Interfeys";
translations.uz.settingsInterfaceTitle = "Interfeys sozlamalari";
translations.uz.settingsLanguageTitle = "Til";
translations.uz.settingsLanguageText = "Ko'rsatish tilini tanlang.";
translations.uz.settingsAccountEyebrow = "Akkaunt";
translations.uz.settingsAccountTitle = "Joriy foydalanuvchi";
translations.uz.settingsDataEyebrow = "Ma'lumot";
translations.uz.settingsDataTitle = "Ma'lumot va Backup";
translations.uz.settingsBackupTitle = "Backup";
translations.uz.settingsBackupReady = "Administrator uchun mavjud";
translations.uz.settingsBackupRestricted = "Backup yaratish huquqi yo'q";
translations.uz.settingsStorageTitle = "Saqlash";
translations.uz.settingsStorageBackend = "Backend API";
translations.uz.settingsStorageLocal = "Lokal xotira";
translations.uz.settingsCompanyEyebrow = "Kompaniya";
translations.uz.settingsCompanyTitle = "Korxona profili";
translations.uz.settingsCompanyName = "Kompaniya nomi";
translations.uz.settingsCompanySite = "Ishlab chiqarish maydoni";
translations.uz.settingsAccessEyebrow = "Ruxsat";
translations.uz.settingsAccessTitle = "Foydalanuvchilar va ruxsat";
translations.uz.settingsAccessSubtitle = "Loginlar, rollar va kirish darajasini boshqaring.";
translations.uz.settingsAddUser = "Foydalanuvchi qo'shish";
translations.uz.settingsAccessLabel = "Ruxsat";
translations.uz.settingsTelegramEyebrow = "Bildirishnomalar";
translations.uz.settingsTelegramTitle = "Telegram";
translations.uz.settingsTelegramEnabled = "Yoqilgan";
translations.uz.settingsTelegramBotToken = "Bot token";
translations.uz.settingsTelegramChatId = "Chat ID";
translations.uz.settingsTelegramTest = "Test";
translations.uz.settingsTelegramHelp = "BotFather orqali bot yarating, token va chat ID kiriting.";
translations.uz.settingsTelegramSaved = "Telegram sozlamalari saqlandi";
translations.uz.settingsTelegramTestOk = "Test xabari yuborildi";
translations.uz.settingsTelegramTestFailed = "Telegram xabarini yuborib bo'lmadi";
translations.uz.settingsTelegramNeedBackend = "Telegram bildirishnomalari uchun backendni ishga tushiring";
translations.uz.userDeleteSelfWarning = "Joriy foydalanuvchini o'chirib bo'lmaydi.";
translations.uz.userLastAdminWarning = "Oxirgi administratorni o'chirib bo'lmaydi.";
translations.uz.userDuplicateWarning = "Bunday loginli foydalanuvchi allaqachon bor.";
translations.uz.roleAccess = {
  Supervisor: "Barcha bo'limlarga to'liq ruxsat",
  Planner: "Rejalashtirish, nosozliklar, PPR va hisobotlar",
  Technician: "Nosozliklar, uskunalar va KPI"
};
translations.uz.saveSettingsBtn = "Saqlash";
translations.uz.settingsSaved = "Sozlamalar saqlandi";
translations.uz.alertOpen = "Ochish";
translations.uz.alertsTotalCount = "Jami";
translations.uz.alertsCriticalCount = "Kritik";
translations.uz.alertsWarningCount = "Diqqat";
translations.uz.roles = {
  Supervisor: "Admin",
  Planner: "Rejalashtiruvchi",
  Technician: "Texnik"
};
Object.assign(translations.uz.statuses, {
  Inactive: "Nofaol",
  Day: "Kunduzgi",
  Evening: "Kechki",
  Night: "Tungi"
});
translations.uz.pressFormsRegistry = "Press formalar reyestri";
translations.uz.actions.pressForms = "+ Yangi press forma";
translations.uz.modal.pressForms = "Yangi press forma";
translations.uz.save.pressForms = "Press formani saqlash";
translations.uz.field.cavityCount = "Uyalar";
translations.uz.field.pressFormStatus = "Holati";
translations.uz.field.currentCycles = "Joriy sikllar";
translations.uz.field.cycleLimit = "Reja resursi";
translations.en.nav.pressForms = "Press Forms";
translations.en.nav.criticalParts = "Critical Spare Parts";
translations.en.criticalPartsTitle = "Critical Spare Parts";
translations.en.criticalPartsNotFound = "No critical spare parts found";
translations.en.criticalPartRisk = "Risk";
translations.en.field.criticalPart = "Part Type";
translations.en.criticalPartOptions = { Critical: "Critical", Standard: "Standard" };
translations.en.actions.criticalParts = "+ New Critical Spare";
translations.en.createdWhen = "Created when";
translations.en.neededBy = "Needed by";
translations.en.createdBy = "Created by";
translations.en.nav.settings = "Settings";
translations.en.settingsInterfaceEyebrow = "Interface";
translations.en.settingsInterfaceTitle = "Interface Settings";
translations.en.settingsLanguageTitle = "Language";
translations.en.settingsLanguageText = "Choose the display language.";
translations.en.settingsAccountEyebrow = "Account";
translations.en.settingsAccountTitle = "Current User";
translations.en.settingsDataEyebrow = "Data";
translations.en.settingsDataTitle = "Data & Backup";
translations.en.settingsBackupTitle = "Backup";
translations.en.settingsBackupReady = "Available for administrators";
translations.en.settingsBackupRestricted = "No permission to create backup";
translations.en.settingsStorageTitle = "Storage";
translations.en.settingsStorageBackend = "Backend API";
translations.en.settingsStorageLocal = "Local storage";
translations.en.settingsCompanyEyebrow = "Company";
translations.en.settingsCompanyTitle = "Company Profile";
translations.en.settingsCompanyName = "Company name";
translations.en.settingsCompanySite = "Production site";
translations.en.settingsAccessEyebrow = "Access";
translations.en.settingsAccessTitle = "Users & Access";
translations.en.settingsAccessSubtitle = "Manage login accounts, roles, and access level.";
translations.en.settingsAddUser = "Add user";
translations.en.settingsAccessLabel = "Access";
translations.en.settingsTelegramEyebrow = "Notifications";
translations.en.settingsTelegramTitle = "Telegram";
translations.en.settingsTelegramEnabled = "Enabled";
translations.en.settingsTelegramBotToken = "Bot token";
translations.en.settingsTelegramChatId = "Chat ID";
translations.en.settingsTelegramTest = "Test";
translations.en.settingsTelegramHelp = "Create a bot in BotFather, then enter token and chat ID.";
translations.en.settingsTelegramSaved = "Telegram settings saved";
translations.en.settingsTelegramTestOk = "Test message sent";
translations.en.settingsTelegramTestFailed = "Could not send Telegram message";
translations.en.settingsTelegramNeedBackend = "Start the backend to send Telegram notifications";
translations.en.userDeleteSelfWarning = "You cannot delete the current user.";
translations.en.userLastAdminWarning = "You cannot delete the last administrator.";
translations.en.userDuplicateWarning = "A user with this username already exists.";
translations.en.roleAccess = {
  Supervisor: "Full access to all sections",
  Planner: "Planning, faults, PM, and reports",
  Technician: "Faults, equipment, and KPI"
};
translations.en.saveSettingsBtn = "Save";
translations.en.settingsSaved = "Settings saved";
translations.en.alertOpen = "Open";
translations.en.alertsTotalCount = "Total";
translations.en.alertsCriticalCount = "Critical";
translations.en.alertsWarningCount = "Warning";
translations.en.roles = {
  Supervisor: "Admin",
  Planner: "Planner",
  Technician: "Technician"
};
Object.assign(translations.en.statuses, {
  Inactive: "Inactive"
});
translations.en.pressFormsRegistry = "Press Forms Registry";
translations.en.actions.pressForms = "+ New Press Form";
translations.en.modal.pressForms = "New Press Form";
translations.en.save.pressForms = "Save Press Form";
translations.en.field.cavityCount = "Cavities";
translations.en.field.pressFormStatus = "Status";
translations.en.field.currentCycles = "Current Cycles";
translations.en.field.cycleLimit = "Cycle Limit";
translations.ru.field.targetObject = "Объект";
translations.uz.field.targetObject = "Obyekt";
translations.en.field.targetObject = "Target";
translations.ru.field.repairType = "Тип ремонта";
translations.uz.field.repairType = "Ta'mir turi";
translations.en.field.repairType = "Repair Type";
translations.ru.field.cycleInterval = "Периодичность по циклам";
translations.uz.field.cycleInterval = "Sikl bo'yicha davriylik";
translations.en.field.cycleInterval = "Cycle Interval";
translations.ru.field.checklist = "Чеклист ППР";
translations.uz.field.checklist = "PPR chek-listi";
translations.en.field.checklist = "PM Checklist";
translations.ru.placeholder.cycleInterval = "Например: 50000";
translations.uz.placeholder.cycleInterval = "Masalan: 50000";
translations.en.placeholder.cycleInterval = "Example: 50000";
translations.ru.placeholder.checklist = "Один пункт на строку: проверить крепления, смазать узлы...";
translations.uz.placeholder.checklist = "Har bir bandni alohida qatorga yozing";
translations.en.placeholder.checklist = "One item per line: inspect fasteners, lubricate points...";
translations.ru.checklistEmpty = "Чеклист пока не добавлен";
translations.uz.checklistEmpty = "Chek-list hali qo'shilmagan";
translations.en.checklistEmpty = "No checklist added yet";
translations.ru.checklistDone = "выполнено";
translations.uz.checklistDone = "bajarildi";
translations.en.checklistDone = "done";
translations.ru.checklistColumnNo = "№";
translations.uz.checklistColumnNo = "№";
translations.en.checklistColumnNo = "No.";
translations.ru.checklistColumnDone = "Готово";
translations.uz.checklistColumnDone = "Tayyor";
translations.en.checklistColumnDone = "Done";
translations.ru.checklistColumnTask = "Пункт проверки";
translations.uz.checklistColumnTask = "Tekshiruv bandi";
translations.en.checklistColumnTask = "Check item";
translations.ru.checklistColumnResponse = "Ответ";
translations.uz.checklistColumnResponse = "Javob";
translations.en.checklistColumnResponse = "Response";
translations.ru.checklistColumnComment = "Комментарий";
translations.uz.checklistColumnComment = "Izoh";
translations.en.checklistColumnComment = "Comment";
translations.ru.checklistColumnStatus = "Статус";
translations.uz.checklistColumnStatus = "Holat";
translations.en.checklistColumnStatus = "Status";
translations.ru.checklistStatusOpen = "Открыто";
translations.uz.checklistStatusOpen = "Ochiq";
translations.en.checklistStatusOpen = "Open";
translations.ru.checklistStatusDone = "Выполнено";
translations.uz.checklistStatusDone = "Bajarildi";
translations.en.checklistStatusDone = "Done";
translations.ru.checklistResponseNone = "Не выбрано";
translations.uz.checklistResponseNone = "Tanlanmagan";
translations.en.checklistResponseNone = "Not selected";
translations.ru.checklistResponseOK = "ОК";
translations.uz.checklistResponseOK = "OK";
translations.en.checklistResponseOK = "OK";
translations.ru.checklistResponseIssue = "Замечание";
translations.uz.checklistResponseIssue = "Izoh bor";
translations.en.checklistResponseIssue = "Issue";
translations.ru.checklistResponseNA = "Н/П";
translations.uz.checklistResponseNA = "Tegishli emas";
translations.en.checklistResponseNA = "N/A";
translations.ru.checklistCommentPlaceholder = "Комментарий";
translations.uz.checklistCommentPlaceholder = "Izoh";
translations.en.checklistCommentPlaceholder = "Comment";
translations.ru.pmCalendarEyebrow = "План-график";
translations.uz.pmCalendarEyebrow = "Reja jadvali";
translations.en.pmCalendarEyebrow = "Schedule";
translations.ru.pmCalendarTitle = "Календарь ППР";
translations.uz.pmCalendarTitle = "PPR kalendari";
translations.en.pmCalendarTitle = "PM Calendar";
translations.ru.defaultPmChecklist = {
  asset: ["Визуальный осмотр", "Проверить крепления", "Проверить смазку", "Проверить защитные устройства", "Записать результат"],
  pressForm: {
    Inspection: ["Осмотреть рабочие поверхности", "Проверить направляющие", "Проверить каналы охлаждения", "Проверить крепления", "Записать результат"],
    Preventive: ["Очистить пресс форму", "Смазать направляющие", "Проверить выталкиватели", "Проверить охлаждение", "Записать результат"],
    CurrentRepair: ["Определить дефект", "Заменить поврежденные элементы", "Проверить ход выталкивателей", "Сделать пробный запуск", "Записать результат"],
    MajorRepair: ["Разобрать узлы", "Проверить износ", "Заменить критичные детали", "Собрать и проверить ход", "Сделать пробный запуск"],
    Cleaning: ["Очистить полости", "Удалить налет", "Продуть каналы", "Смазать направляющие", "Проверить поверхность"]
  }
};
translations.uz.defaultPmChecklist = {
  asset: ["Vizual ko'rik", "Mahkamlashlarni tekshirish", "Moylashni tekshirish", "Himoya qurilmalarini tekshirish", "Natijani yozish"],
  pressForm: {
    Inspection: ["Ishchi yuzalarni ko'rish", "Yo'naltirgichlarni tekshirish", "Sovutish kanallarini tekshirish", "Mahkamlashlarni tekshirish", "Natijani yozish"],
    Preventive: ["Press formani tozalash", "Yo'naltirgichlarni moylash", "Itargichlarni tekshirish", "Sovutishni tekshirish", "Natijani yozish"],
    CurrentRepair: ["Nosozlikni aniqlash", "Shikastlangan qismlarni almashtirish", "Itargich yurishini tekshirish", "Sinov ishga tushirish", "Natijani yozish"],
    MajorRepair: ["Uzellarni ajratish", "Yeyilishni tekshirish", "Kritik qismlarni almashtirish", "Yig'ish va yurishni tekshirish", "Sinov ishga tushirish"],
    Cleaning: ["Bo'shliqlarni tozalash", "Qoldiqlarni olib tashlash", "Kanallarni havo bilan tozalash", "Yo'naltirgichlarni moylash", "Yuzani tekshirish"]
  }
};
translations.en.defaultPmChecklist = {
  asset: ["Visual inspection", "Check fasteners", "Check lubrication", "Check safety guards", "Record result"],
  pressForm: {
    Inspection: ["Inspect working surfaces", "Check guide pins", "Check cooling channels", "Check fasteners", "Record result"],
    Preventive: ["Clean press form", "Lubricate guides", "Check ejectors", "Check cooling", "Record result"],
    CurrentRepair: ["Identify defect", "Replace damaged parts", "Check ejector travel", "Run trial cycle", "Record result"],
    MajorRepair: ["Disassemble units", "Check wear", "Replace critical parts", "Assemble and check movement", "Run trial cycle"],
    Cleaning: ["Clean cavities", "Remove deposits", "Blow cooling channels", "Lubricate guides", "Inspect surface"]
  }
};
translations.ru.cyclesUnit = "циклов";
translations.uz.cyclesUnit = "sikl";
translations.en.cyclesUnit = "cycles";
translations.ru.repairTypes = {
  Inspection: "Осмотр",
  Preventive: "Профилактика",
  CurrentRepair: "Текущий ремонт",
  MajorRepair: "Капитальный ремонт",
  Cleaning: "Очистка"
};
translations.uz.repairTypes = {
  Inspection: "Ko'rik",
  Preventive: "Profilaktika",
  CurrentRepair: "Joriy ta'mir",
  MajorRepair: "Kapital ta'mir",
  Cleaning: "Tozalash"
};
translations.en.repairTypes = {
  Inspection: "Inspection",
  Preventive: "Preventive",
  CurrentRepair: "Current Repair",
  MajorRepair: "Major Repair",
  Cleaning: "Cleaning"
};
translations.ru.field.asset = "Оборудование";
translations.ru.thAsset = "Оборудование";
translations.ru.statuses.Day = "День";
translations.ru.statuses.Evening = "Вечер";
translations.ru.statuses.Night = "Ночь";
translations.uz.statuses.Day = "Kunduzgi";
translations.uz.statuses.Evening = "Kechki";
translations.uz.statuses.Night = "Tungi";
translations.ru.statusFlowTitle = "Поток заявок";
translations.ru.priorityMixTitle = "Структура приоритетов";
translations.ru.assetHealthTitle = "Состояние активов";
translations.ru.teamLoadTitle = "Загрузка команды";
translations.uz.statusFlowTitle = "Buyurtmalar oqimi";
translations.uz.priorityMixTitle = "Ustuvorlik tarkibi";
translations.uz.assetHealthTitle = "Aktivlar holati";
translations.uz.teamLoadTitle = "Jamoa yuklamasi";
translations.en.statusFlowTitle = "Work Order Flow";
translations.en.priorityMixTitle = "Priority Mix";
translations.en.assetHealthTitle = "Asset Health";
translations.en.teamLoadTitle = "Team Load";
translations.ru.thId = "ID";
translations.uz.thId = "ID";
translations.en.thId = "ID";
translations.ru.photoColumn = "Фото";
translations.uz.photoColumn = "Rasm";
translations.en.photoColumn = "Photo";
translations.ru.allHealthFilter = "Все состояния";
translations.uz.allHealthFilter = "Barcha holatlar";
translations.en.allHealthFilter = "All Health";
translations.ru.allCriticalitiesFilter = "Все критичности";
translations.uz.allCriticalitiesFilter = "Barcha kritiklar";
translations.en.allCriticalitiesFilter = "All Criticalities";
translations.ru.allLocationsFilter = "Все локации";
translations.uz.allLocationsFilter = "Barcha joylashuvlar";
translations.en.allLocationsFilter = "All Locations";
translations.ru.sortAssetsLabel = "Сортировка";
translations.uz.sortAssetsLabel = "Saralash";
translations.en.sortAssetsLabel = "Sort";
translations.ru.sortAssetsNameAsc = "Название A-Я";
translations.uz.sortAssetsNameAsc = "Nomi A-Z";
translations.en.sortAssetsNameAsc = "Name A-Z";
translations.ru.sortAssetsNameDesc = "Название Я-А";
translations.uz.sortAssetsNameDesc = "Nomi Z-A";
translations.en.sortAssetsNameDesc = "Name Z-A";
translations.ru.sortAssetsLocation = "По локации";
translations.uz.sortAssetsLocation = "Joylashuv bo'yicha";
translations.en.sortAssetsLocation = "By Location";
translations.ru.sortAssetsHealth = "По состоянию";
translations.uz.sortAssetsHealth = "Holati bo'yicha";
translations.en.sortAssetsHealth = "By Health";
translations.ru.sortAssetsCriticality = "По критичности";
translations.uz.sortAssetsCriticality = "Kritiklik bo'yicha";
translations.en.sortAssetsCriticality = "By Criticality";
translations.ru.statuses.Inactive = "Неактивен";
translations.uz.statuses.Inactive = "Faol emas";
translations.en.statuses.Inactive = "Inactive";
translations.ru.loginTitle = "Вход в систему";
translations.ru.loginSubtitle = "Введите логин и пароль пользователя с активным статусом.";
translations.ru.loginUsername = "Логин";
translations.ru.loginPassword = "Пароль";
translations.ru.loginButton = "Войти";
translations.ru.logout = "Выйти";
translations.ru.backupButton = "Backup";
translations.ru.backupWorking = "Сохраняю...";
translations.ru.backupSaved = "Резервная копия создана";
translations.ru.backupFailed = "Не удалось создать резервную копию";
translations.ru.invalidLogin = "Неверный логин, пароль или пользователь неактивен.";
translations.ru.accessDenied = "Недостаточно прав для этого действия.";
translations.ru.sessionGuest = "Гость";
translations.ru.sessionRoleLabel = "Роль";
translations.ru.field.username = "Логин";
translations.ru.field.password = "Пароль";
translations.ru.field.userStatus = "Статус";
translations.ru.placeholder.username = "Например: planner";
translations.ru.placeholder.password = "Введите пароль";
translations.uz.loginTitle = "Tizimga kirish";
translations.uz.loginSubtitle = "Faol foydalanuvchi login va parolini kiriting.";
translations.uz.loginUsername = "Login";
translations.uz.loginPassword = "Parol";
translations.uz.loginButton = "Kirish";
translations.uz.logout = "Chiqish";
translations.uz.backupButton = "Backup";
translations.uz.backupWorking = "Saqlanmoqda...";
translations.uz.backupSaved = "Zaxira nusxa yaratildi";
translations.uz.backupFailed = "Zaxira nusxa yaratib bo'lmadi";
translations.uz.invalidLogin = "Login yoki parol noto'g'ri, yoki foydalanuvchi faol emas.";
translations.uz.accessDenied = "Bu amal uchun ruxsat yetarli emas.";
translations.uz.sessionGuest = "Mehmon";
translations.uz.sessionRoleLabel = "Rol";
translations.uz.field.username = "Login";
translations.uz.field.password = "Parol";
translations.uz.field.userStatus = "Status";
translations.uz.placeholder.username = "Masalan: planner";
translations.uz.placeholder.password = "Parolni kiriting";
translations.en.loginTitle = "Sign In";
translations.en.loginSubtitle = "Use the username and password of an active user account.";
translations.en.loginUsername = "Username";
translations.en.loginPassword = "Password";
translations.en.loginButton = "Login";
translations.en.logout = "Logout";
translations.en.backupButton = "Backup";
translations.en.backupWorking = "Saving...";
translations.en.backupSaved = "Backup created";
translations.en.backupFailed = "Could not create backup";
translations.en.invalidLogin = "Incorrect username, password, or inactive account.";
translations.en.accessDenied = "You do not have permission for this action.";
translations.en.sessionGuest = "Guest";
translations.en.sessionRoleLabel = "Role";
translations.en.field.username = "Username";
translations.en.field.password = "Password";
translations.en.field.userStatus = "Status";
translations.en.placeholder.username = "Example: planner";
translations.en.placeholder.password = "Enter password";

Object.assign(translations.ru, {
  kpiTargetsTitle: "Цели KPI",
  kpiTargetsSubtitle: "Задайте плановые значения, чтобы видеть выполнение по MTBF, MTTR, OEE и качеству.",
  kpiTargetsSave: "Сохранить цели",
  kpiTargetsSaved: "Цели KPI сохранены",
  targetWord: "Цель",
  actualWord: "Факт",
  targetMet: "В цели",
  targetWatch: "Близко к цели",
  targetMiss: "Ниже цели",
  higherIsBetter: "чем выше, тем лучше",
  lowerIsBetter: "чем ниже, тем лучше",
  kpiTargetMtbf: "Цель MTBF",
  kpiTargetMttr: "Цель MTTR",
  kpiTargetOee: "Цель OEE",
  kpiTargetAvailability: "Цель доступности",
  kpiTargetPerformance: "Цель производительности",
  kpiTargetQuality: "Цель качества",
  kpiTargetCompletion: "Цель закрытия WO",
  kpiTargetApproval: "Цель подтверждения запросов"
});

Object.assign(translations.uz, {
  kpiTargetsTitle: "KPI maqsadlari",
  kpiTargetsSubtitle: "MTBF, MTTR, OEE va sifat bo'yicha reja qiymatlarini belgilang.",
  kpiTargetsSave: "Maqsadlarni saqlash",
  kpiTargetsSaved: "KPI maqsadlari saqlandi",
  targetWord: "Maqsad",
  actualWord: "Fakt",
  targetMet: "Maqsadda",
  targetWatch: "Maqsadga yaqin",
  targetMiss: "Maqsaddan past",
  higherIsBetter: "yuqori bo'lsa yaxshi",
  lowerIsBetter: "past bo'lsa yaxshi",
  kpiTargetMtbf: "MTBF maqsadi",
  kpiTargetMttr: "MTTR maqsadi",
  kpiTargetOee: "OEE maqsadi",
  kpiTargetAvailability: "Mavjudlik maqsadi",
  kpiTargetPerformance: "Unumdorlik maqsadi",
  kpiTargetQuality: "Sifat maqsadi",
  kpiTargetCompletion: "WO yopish maqsadi",
  kpiTargetApproval: "So'rov tasdiqlash maqsadi"
});

Object.assign(translations.en, {
  kpiTargetsTitle: "KPI Targets",
  kpiTargetsSubtitle: "Set planned values to track MTBF, MTTR, OEE, and quality against target.",
  kpiTargetsSave: "Save Targets",
  kpiTargetsSaved: "KPI targets saved",
  targetWord: "Target",
  actualWord: "Actual",
  targetMet: "On target",
  targetWatch: "Close to target",
  targetMiss: "Below target",
  higherIsBetter: "higher is better",
  lowerIsBetter: "lower is better",
  kpiTargetMtbf: "MTBF target",
  kpiTargetMttr: "MTTR target",
  kpiTargetOee: "OEE target",
  kpiTargetAvailability: "Availability target",
  kpiTargetPerformance: "Performance target",
  kpiTargetQuality: "Quality target",
  kpiTargetCompletion: "WO completion target",
  kpiTargetApproval: "Request approval target"
});

Object.assign(translations.ru, {
  equipmentNotSelected: "Оборудование не выбрано",
  equipmentNotFound: "Оборудование не найдено"
});

Object.assign(translations.uz, {
  equipmentNotSelected: "Uskuna tanlanmagan",
  equipmentNotFound: "Uskuna topilmadi"
});

Object.assign(translations.en, {
  equipmentNotSelected: "No equipment selected",
  equipmentNotFound: "Equipment not found"
});

Object.assign(translations.ru, {
  nav: {
    ...translations.ru.nav,
    workorders: "Ежедневные неисправности",
    requests: "Ежедневные неисправности"
  },
  workOrdersTitle: "Ежедневные неисправности",
  dailyFaultsEyebrow: "Журнал смены",
  dailyFaultsTitle: "Ежедневные неисправности",
  dailyFaultsSubtitle: "Один раздел для всех неисправностей: обращения, активные работы, оборудование и текущий статус.",
  dailyFaultsListTitle: "Журнал неисправностей",
  dailyFaultWorkOrder: "Работа",
  dailyFaultRequest: "Обращение",
  dailyFaultOwner: "Ответственный",
  dailyFaultDate: "Дата",
  dailyFaultsTotal: "Всего записей",
  dailyFaultsActive: "Активные",
  dailyFaultsCritical: "Критичные",
  dailyFaultsOverdue: "Просрочено",
  dailyFaultsPending: "Ожидают решения",
  noDailyFaults: "Неисправности не найдены",
  usedPartsHelp: "Выберите запчасти со склада и укажите количество. При сохранении они автоматически спишутся со склада.",
  repairPhotosHelp: "Добавьте фото-отчет: снятая деталь, установленная запчасть, результат ремонта.",
  actionPlanLabel: "План мероприятий по устранению",
  photoReportLabel: "Фото-отчет",
  pcs: "шт",
  searchPlaceholder: "Поиск по неисправностям, оборудованию, техникам",
  activeOrdersSmall: "активных неисправностей",
  ordersWord: "неисправностей",
  statusFlowTitle: "Поток неисправностей",
  statuses: {
    ...translations.ru.statuses,
    Repaired: "Отремонтирован"
  },
  field: {
    ...translations.ru.field,
    faultStart: "Дата и время начала неисправности",
    faultEnd: "Дата и время окончания неисправности",
    actionPlan: "План мероприятий по устранению",
    usedParts: "Использованные запчасти",
    repairPhotos: "Фото-отчет по ремонту"
  },
  actions: {
    ...translations.ru.actions,
    dashboard: "Быстрое действие",
    workorders: "+ Новая неисправность",
    requests: "+ Новая неисправность"
  },
  modal: {
    ...translations.ru.modal,
    workorders: "Новая неисправность",
    requests: "Новое обращение"
  },
  save: {
    ...translations.ru.save,
    workorders: "Сохранить неисправность",
    requests: "Сохранить обращение"
  },
  stats: {
    ...translations.ru.stats,
    activeWorkOrders: "Активные неисправности"
  },
  placeholder: {
    ...translations.ru.placeholder,
    title: "Например: неисправность станка MT-150",
    description: "Коротко опишите неисправность, причину или действие",
    actionPlan: "Например: остановить оборудование, проверить датчик, заменить ремень, выполнить пробный запуск"
  }
});

Object.assign(translations.uz, {
  nav: {
    ...translations.uz.nav,
    workorders: "Kunlik nosozliklar",
    requests: "Kunlik nosozliklar"
  },
  workOrdersTitle: "Kunlik nosozliklar",
  dailyFaultsEyebrow: "Smena jurnali",
  dailyFaultsTitle: "Kunlik nosozliklar",
  dailyFaultsSubtitle: "Barcha nosozliklar uchun bitta bo'lim: murojaatlar, faol ishlar, uskuna va joriy status.",
  dailyFaultsListTitle: "Nosozliklar jurnali",
  dailyFaultWorkOrder: "Ish",
  dailyFaultRequest: "Murojaat",
  dailyFaultOwner: "Mas'ul",
  dailyFaultDate: "Sana",
  dailyFaultsTotal: "Jami yozuvlar",
  dailyFaultsActive: "Faol",
  dailyFaultsCritical: "Kritik",
  dailyFaultsOverdue: "Kechikkan",
  dailyFaultsPending: "Qaror kutmoqda",
  noDailyFaults: "Nosozliklar topilmadi",
  usedPartsHelp: "Ombordan ehtiyot qismlarni tanlang va sonini kiriting. Saqlanganda ombordan avtomatik yechiladi.",
  repairPhotosHelp: "Foto-hisobot qo'shing: yechilgan detal, o'rnatilgan qism, ta'mir natijasi.",
  actionPlanLabel: "Nosozlikni bartaraf etish rejasi",
  photoReportLabel: "Foto-hisobot",
  pcs: "dona",
  searchPlaceholder: "Nosozliklar, uskunalar, texniklar bo'yicha qidirish",
  activeOrdersSmall: "faol nosozliklar",
  ordersWord: "nosozlik",
  statusFlowTitle: "Nosozliklar oqimi",
  statuses: {
    ...translations.uz.statuses,
    Repaired: "Ta'mirlandi"
  },
  field: {
    ...translations.uz.field,
    faultStart: "Nosozlik boshlanish sanasi va vaqti",
    faultEnd: "Nosozlik tugash sanasi va vaqti",
    actionPlan: "Bartaraf etish rejasi",
    usedParts: "Ishlatilgan ehtiyot qismlar",
    repairPhotos: "Ta'mir bo'yicha foto-hisobot"
  },
  actions: {
    ...translations.uz.actions,
    dashboard: "Tezkor amal",
    workorders: "+ Yangi nosozlik",
    requests: "+ Yangi nosozlik"
  },
  modal: {
    ...translations.uz.modal,
    workorders: "Yangi nosozlik",
    requests: "Yangi murojaat"
  },
  save: {
    ...translations.uz.save,
    workorders: "Nosozlikni saqlash",
    requests: "Murojaatni saqlash"
  },
  stats: {
    ...translations.uz.stats,
    activeWorkOrders: "Faol nosozliklar"
  },
  placeholder: {
    ...translations.uz.placeholder,
    title: "Masalan: MT-150 stanogida nosozlik",
    description: "Nosozlik, sabab yoki bajariladigan ishni qisqacha yozing",
    actionPlan: "Masalan: uskunani to'xtatish, sensorni tekshirish, remenni almashtirish, sinov ishga tushirish"
  }
});

Object.assign(translations.en, {
  nav: {
    ...translations.en.nav,
    workorders: "Daily Faults",
    requests: "Daily Faults"
  },
  workOrdersTitle: "Daily Faults",
  dailyFaultsEyebrow: "Shift Log",
  dailyFaultsTitle: "Daily Faults",
  dailyFaultsSubtitle: "One section for every fault: requests, active work, equipment, and response status.",
  dailyFaultsListTitle: "Fault Journal",
  dailyFaultWorkOrder: "Work",
  dailyFaultRequest: "Request",
  dailyFaultOwner: "Owner",
  dailyFaultDate: "Date",
  dailyFaultsTotal: "Total Records",
  dailyFaultsActive: "Active",
  dailyFaultsCritical: "Critical",
  dailyFaultsOverdue: "Overdue",
  dailyFaultsPending: "Pending",
  noDailyFaults: "No faults found",
  usedPartsHelp: "Select spare parts from inventory and enter quantity. Saving will automatically deduct them from stock.",
  repairPhotosHelp: "Attach a photo report: removed part, installed spare, and repair result.",
  actionPlanLabel: "Fault Elimination Plan",
  photoReportLabel: "Photo Report",
  pcs: "pcs",
  searchPlaceholder: "Search faults, equipment, technicians",
  activeOrdersSmall: "active faults",
  ordersWord: "faults",
  statusFlowTitle: "Fault Flow",
  statuses: {
    ...translations.en.statuses,
    Repaired: "Repaired"
  },
  field: {
    ...translations.en.field,
    faultStart: "Fault Start Date & Time",
    faultEnd: "Fault End Date & Time",
    actionPlan: "Elimination Plan",
    usedParts: "Used Spare Parts",
    repairPhotos: "Repair Photo Report"
  },
  actions: {
    ...translations.en.actions,
    dashboard: "Quick Action",
    workorders: "+ New Fault",
    requests: "+ New Fault"
  },
  modal: {
    ...translations.en.modal,
    workorders: "New Fault",
    requests: "New Request"
  },
  save: {
    ...translations.en.save,
    workorders: "Save Fault",
    requests: "Save Request"
  },
  stats: {
    ...translations.en.stats,
    activeWorkOrders: "Active Faults"
  },
  placeholder: {
    ...translations.en.placeholder,
    title: "Example: MT-150 equipment fault",
    description: "Briefly describe the fault, cause, or required action",
    actionPlan: "Example: stop equipment, inspect sensor, replace belt, perform test run"
  }
});

Object.assign(translations.ru, {
  dailyQuickAll: "Все",
  dailyQuickActive: "Активные",
  dailyQuickCritical: "Критические",
  dailyQuickOverdue: "Просроченные",
  dailyQuickToday: "Сегодня",
  dailyQuickPending: "Ожидание",
  dailyFaultDetailTitle: "Детали",
  dailyFaultDetailEmpty: "Выберите строку в журнале",
  dailyFaultObject: "Объект",
  dailyFaultDates: "Даты",
  dailyFaultPlan: "План"
});

Object.assign(translations.uz, {
  dailyQuickAll: "Hammasi",
  dailyQuickActive: "Faol",
  dailyQuickCritical: "Kritik",
  dailyQuickOverdue: "Kechikkan",
  dailyQuickToday: "Bugun",
  dailyQuickPending: "Kutmoqda",
  dailyFaultDetailTitle: "Tafsilot",
  dailyFaultDetailEmpty: "Jurnaldan qator tanlang",
  dailyFaultObject: "Obyekt",
  dailyFaultDates: "Sanalar",
  dailyFaultPlan: "Reja"
});

Object.assign(translations.en, {
  dailyQuickAll: "All",
  dailyQuickActive: "Active",
  dailyQuickCritical: "Critical",
  dailyQuickOverdue: "Overdue",
  dailyQuickToday: "Today",
  dailyQuickPending: "Pending",
  dailyFaultDetailTitle: "Details",
  dailyFaultDetailEmpty: "Select a row in the journal",
  dailyFaultObject: "Object",
  dailyFaultDates: "Dates",
  dailyFaultPlan: "Plan"
});

Object.assign(translations.ru, {
  pmOverdue: "Просрочено",
  pmDueToday: "Сегодня",
  daysLeft: "дн.",
  dashboardKpiEyebrow: "KPI аналитика",
  dashboardKpiTitle: "MTBF, MTTR и OEE",
  dashboardKpiSubtitle: "Общие показатели предприятия и фильтр по каждому оборудованию.",
  dashboardKpiPressSubtitle: "Показатели ресурса и обслуживания с фильтром по каждой пресс форме.",
  dashboardKpiOverall: "Все оборудование",
  dashboardKpiSelected: "Выбранное оборудование",
  dashboardKpiAvailability: "Доступность",
  dashboardKpiPerformance: "Производительность",
  dashboardKpiQuality: "Качество",
  dashboardKpiRuntime: "Рабочее время",
  dashboardKpiFailures: "Отказы"
});

Object.assign(translations.uz, {
  pmOverdue: "Kechikkan",
  pmDueToday: "Bugun",
  daysLeft: "kun",
  dashboardKpiEyebrow: "KPI tahlili",
  dashboardKpiTitle: "MTBF, MTTR va OEE",
  dashboardKpiSubtitle: "Korxona bo'yicha umumiy KPI va har bir uskuna bo'yicha filtr.",
  dashboardKpiPressSubtitle: "Har bir press forma bo'yicha resurs va servis ko'rsatkichlari.",
  dashboardKpiOverall: "Barcha uskunalar",
  dashboardKpiSelected: "Tanlangan uskuna",
  dashboardKpiAvailability: "Mavjudlik",
  dashboardKpiPerformance: "Unumdorlik",
  dashboardKpiQuality: "Sifat",
  dashboardKpiRuntime: "Ish vaqti",
  dashboardKpiFailures: "Nosozliklar"
});

Object.assign(translations.en, {
  pmOverdue: "Overdue",
  pmDueToday: "Today",
  daysLeft: "days",
  dashboardKpiEyebrow: "KPI analytics",
  dashboardKpiTitle: "MTBF, MTTR & OEE",
  dashboardKpiSubtitle: "Overall plant KPI with a filter for each equipment.",
  dashboardKpiPressSubtitle: "Resource and service KPIs with a filter for each press form.",
  dashboardKpiOverall: "All equipment",
  dashboardKpiSelected: "Selected equipment",
  dashboardKpiAvailability: "Availability",
  dashboardKpiPerformance: "Performance",
  dashboardKpiQuality: "Quality",
  dashboardKpiRuntime: "Runtime",
  dashboardKpiFailures: "Failures"
});

Object.assign(translations.ru, {
  dashboardType: {
    label: "Тип панели",
    assets: "Оборудование",
    pressForms: "Пресс формы"
  },
  dashboardStats: {
    equipment: "ОБОРУДОВАНИЕ",
    pressForms: "ПРЕСС ФОРМЫ",
    critical: "КРИТИЧНЫЕ",
    criticalCaption: "Высокий риск обслуживания",
    registry: "РЕЕСТР",
    registryCaption: "Единиц в реестре",
    resource: "РЕСУРС",
    resourceCaption: "Использование ресурса",
    efficiencyCaption: "Эффективность",
    faultRecords: "Записи неисправностей"
  },
  dashboardChartEyebrow: "JSON диаграмма",
  dashboardPriorityEyebrow: "Приоритет",
  priorityFaultMixTitle: "Структура неисправностей",
  dashboardPressForms: {
    all: "Все пресс формы",
    label: "Пресс формы",
    resource: "Ресурс",
    cavities: "Гнезда",
    risks: "Риски",
    formsWord: "пресс форм",
    faultsWord: "неисправностей",
    selected: "Выбранная пресс форма",
    scopeAll: "Все пресс формы",
    resourceService: "Ресурс и обслуживание"
  },
  pressFormNotSelected: "Пресс форма не выбрана",
  pressFormProfile: "Паспорт пресс формы",
  pressFormCard: "Карточка пресс формы",
  generatedReportActiveWo: "Активные заявки",
  generatedReportLowStock: "Низкий остаток",
  uptimeWindow: "окно доступности",
  assetSnapshot: "Сервисный обзор",
  assetRecentFaults: "Последние неисправности",
  assetOpenFaults: "Активные неисправности",
  assetNextPm: "Ближайший ППР",
  assetNoFaults: "Неисправностей пока нет",
  assetNoPm: "ППР не запланирован",
  assetNoUsedParts: "Запчасти еще не списывались",
  contextDashboard: "Общий обзор",
  contextEquipment: "Контур оборудования",
  contextPressForms: "Контур пресс форм"
});

Object.assign(translations.uz, {
  dashboardType: {
    label: "Panel turi",
    assets: "Uskunalar",
    pressForms: "Press formalar"
  },
  dashboardStats: {
    equipment: "USKUNALAR",
    pressForms: "PRESS FORMALAR",
    critical: "KRITIK",
    criticalCaption: "Yuqori servis xavfi",
    registry: "REYESTR",
    registryCaption: "Reyestrdagi birliklar",
    resource: "RESURS",
    resourceCaption: "Resursdan foydalanish",
    efficiencyCaption: "Samaradorlik",
    faultRecords: "Nosozlik yozuvlari"
  },
  dashboardChartEyebrow: "JSON diagramma",
  dashboardPriorityEyebrow: "Ustuvorlik",
  priorityFaultMixTitle: "Nosozliklar tuzilmasi",
  dashboardPressForms: {
    all: "Barcha press formalar",
    label: "Press formalar",
    resource: "Resurs",
    cavities: "Uyalar",
    risks: "Xatarlar",
    formsWord: "press forma",
    faultsWord: "nosozlik",
    selected: "Tanlangan press forma",
    scopeAll: "Barcha press formalar",
    resourceService: "Resurs va servis"
  },
  pressFormNotSelected: "Press forma tanlanmagan",
  pressFormProfile: "Press forma pasporti",
  pressFormCard: "Press forma kartasi",
  generatedReportActiveWo: "Faol buyurtmalar",
  generatedReportLowStock: "Kam qoldiq",
  uptimeWindow: "ish vaqti oynasi",
  assetSnapshot: "Servis ko'rinishi",
  assetRecentFaults: "Oxirgi nosozliklar",
  assetOpenFaults: "Faol nosozliklar",
  assetNextPm: "Yaqin PPR",
  assetNoFaults: "Nosozliklar hali yo'q",
  assetNoPm: "PPR rejalashtirilmagan",
  assetNoUsedParts: "Ehtiyot qismlar hali sarflanmagan",
  contextDashboard: "Umumiy ko'rinish",
  contextEquipment: "Uskunalar yo'nalishi",
  contextPressForms: "Press formalar yo'nalishi"
});

Object.assign(translations.en, {
  dashboardType: {
    label: "Dashboard type",
    assets: "Equipment",
    pressForms: "Press Forms"
  },
  dashboardStats: {
    equipment: "EQUIPMENT",
    pressForms: "PRESS FORMS",
    critical: "CRITICAL",
    criticalCaption: "High service risk",
    registry: "REGISTRY",
    registryCaption: "Units in registry",
    resource: "RESOURCE",
    resourceCaption: "Resource usage",
    efficiencyCaption: "Efficiency",
    faultRecords: "Fault records"
  },
  dashboardChartEyebrow: "JSON chart",
  dashboardPriorityEyebrow: "Priority",
  priorityFaultMixTitle: "Fault Structure",
  dashboardPressForms: {
    all: "All press forms",
    label: "Press Forms",
    resource: "Resource",
    cavities: "Cavities",
    risks: "Risks",
    formsWord: "press forms",
    faultsWord: "faults",
    selected: "Selected press form",
    scopeAll: "All press forms",
    resourceService: "Resource and service"
  },
  pressFormNotSelected: "No press form selected",
  pressFormProfile: "Press Form Profile",
  pressFormCard: "Press Form Card",
  generatedReportActiveWo: "Active WO",
  generatedReportLowStock: "Low stock",
  uptimeWindow: "uptime window",
  assetSnapshot: "Service Snapshot",
  assetRecentFaults: "Recent Faults",
  assetOpenFaults: "Active Faults",
  assetNextPm: "Next PM",
  assetNoFaults: "No faults recorded yet",
  assetNoPm: "No PM scheduled",
  assetNoUsedParts: "No spare parts issued yet",
  contextDashboard: "Overview",
  contextEquipment: "Equipment track",
  contextPressForms: "Press forms track"
});

const seedData = {
  settings: {
    companyName: "O'zMinda LLC",
    siteName: "",
    telegram: {
      enabled: false,
      botToken: "",
      chatId: ""
    }
  },
  assets: [
    { id: "AST-100", name: "Drill Press 2", location: "Mechanical Bay", health: "Stable", category: "Production", manufacturer: "Bosch", model: "DP-420", serialNumber: "DP-2024-420", installDate: "2024-01-15", criticality: "B", notes: "Primary press for maintenance training.", attachments: [] },
    { id: "AST-101", name: "Air Handler 3", location: "Roof", health: "Warning", category: "HVAC", manufacturer: "Daikin", model: "AHU-900", serialNumber: "AHU-900-113", installDate: "2023-10-02", criticality: "A", notes: "Supports assembly ventilation zone.", attachments: [] },
    { id: "AST-102", name: "CNC Mill 1", location: "Cell A", health: "Stable", category: "Machining", manufacturer: "Mazak", model: "VCN-530", serialNumber: "CNC-530-778", installDate: "2024-05-09", criticality: "A", notes: "Tight tolerance production cell.", attachments: [] },
    { id: "AST-103", name: "Centrifugal Pump 1", location: "Utility Zone", health: "Critical", category: "Utilities", manufacturer: "Grundfos", model: "CR-32", serialNumber: "PMP-CR32-552", installDate: "2022-12-18", criticality: "A", notes: "High-priority utility support pump.", attachments: [] }
  ],
  pressForms: [
    { id: "PF-100", name: "Cap 32 mm mold", model: "M-32-CAP", serialNumber: "PF-2024-032", cavityCount: 8, currentCycles: 120000, cycleLimit: 500000, location: "Press line 1", health: "Stable", installDate: "2024-02-10", notes: "Main cap production mold.", pressFormImages: [] },
    { id: "PF-101", name: "Handle insert mold", model: "HND-2K", serialNumber: "PF-2023-118", cavityCount: 4, currentCycles: 310000, cycleLimit: 450000, location: "Tool room", health: "Warning", installDate: "2023-11-18", notes: "Check guide pins before next run.", pressFormImages: [] }
  ],
  requests: [
    { id: "REQ-301", title: "Leak near Pump 1", requester: "Night Shift", priority: "Critical", status: "New", assetId: "AST-103", createdAt: "2026-04-24", note: "Visible leak under coupling guard." },
    { id: "REQ-302", title: "AHU airflow reduced", requester: "Facilities", priority: "High", status: "Approved", assetId: "AST-101", createdAt: "2026-04-23", note: "Operator reports weak airflow in assembly zone." },
    { id: "REQ-303", title: "Noise from CNC spindle", requester: "Machining", priority: "Medium", status: "Waiting", assetId: "AST-102", createdAt: "2026-04-22", note: "Unusual sound at high RPM." }
  ],
  workorders: [
    { id: crypto.randomUUID(), title: "Monthly inspection for Drill Press 2", status: "Open", priority: "High", assetId: "AST-100", assignedTo: "Gene Simmons", dueDate: "2026-04-28", description: "Check belt tension and lubrication points." },
    { id: crypto.randomUUID(), title: "AHU vibration check", status: "In Progress", priority: "Critical", assetId: "AST-101", assignedTo: "Peter Criss", dueDate: "2026-04-25", description: "Investigate abnormal vibration reported by operations." },
    { id: crypto.randomUUID(), title: "Pump seal replacement", status: "Open", priority: "High", assetId: "AST-103", assignedTo: "Andrew Mills", dueDate: "2026-04-26", description: "Planned change after leakage detected." },
    { id: crypto.randomUUID(), title: "CNC spindle alignment", status: "On Hold", priority: "Medium", assetId: "AST-102", assignedTo: "David Green", dueDate: "2026-04-30", description: "Awaiting spare parts approval." }
  ],
  inventory: [
    { id: "INV-401", name: "Pump Seal Kit", sku: "PSK-2201", onHand: 2, minQty: 4, location: "Aisle B-03", objectType: "asset" },
    { id: "INV-402", name: "V-Belt 5VX", sku: "BLT-5VX", onHand: 11, minQty: 6, location: "Aisle A-08", objectType: "asset" },
    { id: "INV-403", name: "HEPA Filter AHU", sku: "FLT-HEPA-13", onHand: 1, minQty: 3, location: "HVAC Cage", objectType: "asset" },
    { id: "INV-404", name: "Spindle Grease", sku: "GRS-CNC-02", onHand: 8, minQty: 4, location: "Tool Crib", objectType: "asset" },
    { id: "INV-501", name: "Ejector pin set", sku: "MOLD-EJP-08", onHand: 6, minQty: 4, location: "Mold shelf A", objectType: "pressForm" },
    { id: "INV-502", name: "Guide bush 20 mm", sku: "MOLD-GB-20", onHand: 3, minQty: 4, location: "Mold shelf B", objectType: "pressForm" }
  ],
  pm: [
    { id: "PM-201", title: "Quarterly AHU inspection", assetId: "AST-101", objectType: "asset", frequency: "Every 90 days", nextDue: "2026-05-02", owner: "HVAC Team", checklist: ["Inspect filters", "Check vibration", "Record pressure drop"] },
    { id: "PM-202", title: "Weekly pump lubrication", assetId: "AST-103", objectType: "asset", frequency: "Every 7 days", nextDue: "2026-04-27", owner: "Utilities Team", checklist: ["Check oil level", "Lubricate bearing", "Inspect leakage"] },
    { id: "PM-203", title: "Monthly CNC calibration", assetId: "AST-102", objectType: "asset", frequency: "Every 30 days", nextDue: "2026-05-01", owner: "Machining Team", checklist: ["Clean reference points", "Run calibration cycle", "Save calibration report"] },
    { id: "PM-301", title: "Mold cleaning and lubrication", pressFormId: "PF-100", objectType: "pressForm", frequency: "15000 cycles", repairType: "Cleaning", cycleInterval: 15000, nextDue: "2026-05-10", owner: "Tooling Team", checklist: ["Clean cavities", "Lubricate guide pins", "Check ejector movement"] },
    { id: "PM-302", title: "Cooling channel inspection", pressFormId: "PF-101", objectType: "pressForm", frequency: "30000 cycles", repairType: "Inspection", cycleInterval: 30000, nextDue: "2026-05-18", owner: "Tooling Team", checklist: ["Flush cooling channels", "Check connectors", "Record flow result"] }
  ],
  users: [
    { id: "USR-501", name: "Gene Simmons", role: "Planner", username: "planner", password: "planner123", userStatus: "Active", team: "Production", workload: 7, shift: "Day" },
    { id: "USR-502", name: "Peter Criss", role: "Technician", username: "tech1", password: "tech123", userStatus: "Active", team: "HVAC", workload: 5, shift: "Day" },
    { id: "USR-503", name: "Andrew Mills", role: "Technician", username: "tech2", password: "tech123", userStatus: "Inactive", team: "Utilities", workload: 6, shift: "Evening" },
    { id: "USR-504", name: "David Green", role: "Supervisor", username: "admin", password: "admin123", userStatus: "Active", team: "Machining", workload: 3, shift: "Day" }
  ],
  failureEvents: [
    {
      id: "FE-701",
      assetId: "AST-101",
      failureStart: "2026-04-02T08:10:00",
      repairEnd: "2026-04-02T11:40:00",
      reason: "AHU vibration trip"
    },
    {
      id: "FE-702",
      assetId: "AST-103",
      failureStart: "2026-04-09T14:20:00",
      repairEnd: "2026-04-09T18:05:00",
      reason: "Seal leakage"
    },
    {
      id: "FE-703",
      assetId: "AST-102",
      failureStart: "2026-04-16T09:00:00",
      repairEnd: "2026-04-16T12:15:00",
      reason: "Spindle alignment fault"
    },
    {
      id: "FE-704",
      assetId: "AST-100",
      failureStart: "2026-04-21T06:45:00",
      repairEnd: "2026-04-21T08:00:00",
      reason: "Lubrication blockage"
    }
  ],
  productionRuns: [
    {
      id: "PR-801",
      assetId: "AST-100",
      plannedMinutes: 2400,
      downtimeMinutes: 75,
      idealCycleTimeSeconds: 52,
      totalCount: 2480,
      goodCount: 2426
    },
    {
      id: "PR-802",
      assetId: "AST-101",
      plannedMinutes: 1800,
      downtimeMinutes: 210,
      idealCycleTimeSeconds: 65,
      totalCount: 1260,
      goodCount: 1220
    },
    {
      id: "PR-803",
      assetId: "AST-102",
      plannedMinutes: 2280,
      downtimeMinutes: 195,
      idealCycleTimeSeconds: 48,
      totalCount: 2415,
      goodCount: 2364
    },
    {
      id: "PR-804",
      assetId: "AST-103",
      plannedMinutes: 2100,
      downtimeMinutes: 225,
      idealCycleTimeSeconds: 58,
      totalCount: 1825,
      goodCount: 1768
    }
  ],
  kpiTargets: {
    mtbfHours: 48,
    mttrHours: 4,
    oeePercent: 85,
    availabilityPercent: 90,
    performancePercent: 95,
    qualityPercent: 98,
    completionPercent: 80,
    approvalPercent: 70
  },
  generatedReports: [],
  auditLog: []
};

const storageKey = "mms-cmms-demo-v1";
const languageKey = "mms-cmms-language";
const sessionKey = "mms-cmms-session-user";
const localApiCandidates = ["http://127.0.0.1:8002", "http://127.0.0.1:8001"];
const isLocalAppHost = ["127.0.0.1", "localhost"].includes(window.location.hostname);
const apiBaseCandidates = Array.from(new Set([
  ...(isLocalAppHost ? localApiCandidates : []),
  window.location.origin && window.location.origin !== "null" ? window.location.origin : "",
  ...localApiCandidates
].filter(Boolean)));
let activeApiBase = "";
let qrPreferredOrigin = apiBaseCandidates[0] || "http://127.0.0.1:8001";
let currentLanguage = localStorage.getItem(languageKey) || "ru";
const state = await loadState();
syncPmUsedPartMarkers();
await refreshMobileOrigin();
let currentView = "dashboard";
let currentModalView = "workorders";
let currentEditId = null;
let dashboardObjectType = "asset";
let dailyFaultQuickFilter = "all";
let selectedDailyFaultKey = "";
let pmCalendarMode = "month";
let selectedAssetId = state.assets[0]?.id || null;
let currentUserId = localStorage.getItem(sessionKey) || "";

const views = {
  dashboard: document.getElementById("dashboard-view"),
  workorders: document.getElementById("workorders-view"),
  requests: document.getElementById("requests-view"),
  assets: document.getElementById("assets-view"),
  pressForms: document.getElementById("pressForms-view"),
  inventory: document.getElementById("inventory-view"),
  criticalParts: document.getElementById("criticalParts-view"),
  pm: document.getElementById("pm-view"),
  users: document.getElementById("users-view"),
  settings: document.getElementById("settings-view")
};

const navLinks = [...document.querySelectorAll(".nav-link")];
const dashboardTypeButtons = [...document.querySelectorAll(".dashboard-type-btn")];
const navGroups = {
  equipment: {
    views: ["assets", "inventory", "criticalParts", "workorders", "pm"],
    submenu: document.getElementById("equipment-submenu")
  },
  pressForms: {
    views: ["pressForms", "inventory", "criticalParts", "workorders", "pm"],
    submenu: document.getElementById("press-forms-submenu")
  }
};
let activeNavGroup = "equipment";
const expandedNavGroups = new Set();

function getNavButtonGroup(button) {
  if (button?.dataset.navGroup) return button.dataset.navGroup;
  const groupEntry = Object.entries(navGroups).find(([, group]) => group.submenu?.contains(button));
  return groupEntry?.[0] || "";
}

function syncNavChildGroups() {
  Object.entries(navGroups).forEach(([groupKey, group]) => {
    group.submenu?.querySelectorAll(".nav-link-sub").forEach((button) => {
      button.dataset.navGroup = groupKey;
    });
  });
}

function syncActiveNavGroupForView(viewName) {
  if (viewName === "assets") {
    activeNavGroup = "equipment";
  } else if (viewName === "pressForms") {
    activeNavGroup = "pressForms";
  } else if (!navGroups[activeNavGroup]?.views.includes(viewName)) {
    activeNavGroup = "equipment";
  }
}

function navGroupObjectType(groupKey) {
  return groupKey === "pressForms" ? "pressForm" : "asset";
}

function recordMatchesNavGroup(record, groupKey) {
  return recordObjectType(record) === navGroupObjectType(groupKey);
}

function navGroupAlertCounts(groupKey) {
  const activeFaults = state.workorders
    .filter((item) => recordMatchesNavGroup(item, groupKey) && !isWorkorderComplete(item.status))
    .length
    + state.requests
      .filter((item) => recordMatchesNavGroup(item, groupKey) && item.status !== "Approved")
      .length;
  const lowCriticalParts = state.inventory
    .filter((item) => recordMatchesNavGroup(item, groupKey))
    .filter((item) => isCriticalSparePart(item) && Number(item.onHand || 0) <= Number(item.minQty || 0))
    .length;
  const overduePm = state.pm
    .filter((item) => recordMatchesNavGroup(item, groupKey))
    .filter((item) => item.nextDue && item.nextDue < todayISO())
    .length;

  return {
    activeFaults,
    lowCriticalParts,
    overduePm,
    total: activeFaults + lowCriticalParts + overduePm
  };
}

function setNavBadge(button, count, tone = "") {
  if (!button) return;
  let badge = button.querySelector(":scope > .nav-count");
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "nav-count";
    badge.setAttribute("aria-hidden", "true");
    button.append(badge);
  }

  badge.textContent = count > 99 ? "99+" : String(count);
  badge.hidden = !count;
  badge.dataset.tone = tone;
}

function renderNavBadges() {
  Object.keys(navGroups).forEach((groupKey) => {
    const counts = navGroupAlertCounts(groupKey);
    setNavBadge(document.querySelector(`.nav-parent-link[data-nav-group="${groupKey}"]`), counts.total, "summary");
    setNavBadge(document.querySelector(`.nav-link-sub[data-nav-group="${groupKey}"][data-view="workorders"]`), counts.activeFaults, "fault");
    setNavBadge(document.querySelector(`.nav-link-sub[data-nav-group="${groupKey}"][data-view="criticalParts"]`), counts.lowCriticalParts, "stock");
    setNavBadge(document.querySelector(`.nav-link-sub[data-nav-group="${groupKey}"][data-view="pm"]`), counts.overduePm, "pm");
  });
}

syncNavChildGroups();
const modal = document.getElementById("workorder-modal");
const assetDetailModal = document.getElementById("asset-detail-modal");
const assetDetailModalTitle = document.getElementById("asset-detail-modal-title");
const assetDetailModalBody = document.getElementById("asset-detail-modal-body");
const stockMoveModal = document.getElementById("stock-move-modal");
const stockMoveForm = document.getElementById("stock-move-form");
const stockMoveTitle = document.getElementById("stock-move-title");
const stockMovePartId = document.getElementById("stock-move-part-id");
const stockMoveType = document.getElementById("stock-move-type");
const stockMoveQty = document.getElementById("stock-move-qty");
const stockMoveNote = document.getElementById("stock-move-note");
const stockMoveError = document.getElementById("stock-move-error");
const stockMoveSummary = document.getElementById("stock-move-summary");
const stockMoveHistory = document.getElementById("stock-move-history");
const form = document.getElementById("entity-form");
const modalFields = document.getElementById("modal-fields");
const modalTitle = document.getElementById("modal-title");
const modalSubmit = document.getElementById("modal-submit");
const openModalBtn = document.getElementById("open-modal-btn");
const addDailyFaultBtn = document.getElementById("add-daily-fault-btn");
const dailyFaultQuickFilters = document.getElementById("daily-faults-quick-filters");
const addAssetBtn = document.getElementById("add-asset-btn");
const printAssetQrBtn = document.getElementById("print-asset-qr-btn");
const addPressFormBtn = document.getElementById("add-press-form-btn");
const addInventoryBtn = document.getElementById("add-inventory-btn");
const addCriticalPartBtn = document.getElementById("add-critical-part-btn");
const addPmBtn = document.getElementById("add-pm-btn");
const addUserBtn = document.getElementById("add-user-btn");
const addFailureBtn = document.getElementById("add-failure-btn");
const addProductionBtn = document.getElementById("add-production-btn");
const dashboardKpiAssetFilter = document.getElementById("dashboard-kpi-asset-filter");
const analyticsAssetFilter = document.getElementById("analytics-asset-filter");
const searchInput = document.getElementById("global-search");
const assetHealthFilter = document.getElementById("asset-health-filter");
const assetCriticalityFilter = document.getElementById("asset-criticality-filter");
const assetLocationFilter = document.getElementById("asset-location-filter");
const assetSort = document.getElementById("asset-sort");
const statusFilter = document.getElementById("status-filter");
const priorityFilter = document.getElementById("priority-filter");
const languageSwitcher = document.getElementById("language-switcher");
const settingsLanguageSwitcher = document.getElementById("settings-language-switcher");
const settingsBackupBtn = document.getElementById("settings-backup-btn");
const settingsCompanyNameInput = document.getElementById("settings-company-name");
const settingsCompanySiteInput = document.getElementById("settings-company-site");
const settingsCompanySaveBtn = document.getElementById("settings-company-save-btn");
const settingsAddUserBtn = document.getElementById("settings-add-user-btn");
const settingsTelegramEnabled = document.getElementById("settings-telegram-enabled");
const settingsTelegramToken = document.getElementById("settings-telegram-token");
const settingsTelegramChatId = document.getElementById("settings-telegram-chat-id");
const settingsTelegramSaveBtn = document.getElementById("settings-telegram-save-btn");
const settingsTelegramTestBtn = document.getElementById("settings-telegram-test-btn");
const settingsTelegramStatus = document.getElementById("settings-telegram-status");
const authScreen = document.getElementById("auth-screen");
const loginForm = document.getElementById("login-form");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginError = document.getElementById("login-error");
const backupBtn = document.getElementById("backup-btn");
const logoutBtn = document.getElementById("logout-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const exportReportBtn = document.getElementById("export-report-btn");
const notificationBtn = document.getElementById("notification-btn");
const notificationPopover = document.getElementById("notification-popover");
const notificationCount = document.getElementById("notification-count");
const notificationCriticalCount = document.getElementById("notification-critical-count");
const notificationList = document.getElementById("notification-list");
const staticLabels = [...document.querySelectorAll("[data-i18n]")];
let storageWarningShown = false;

function createRecordId(prefix = "ID") {
  const safePrefix = String(prefix || "ID").toUpperCase();
  const randomPart = typeof crypto !== "undefined" && crypto.getRandomValues
    ? Array.from(crypto.getRandomValues(new Uint8Array(3)), (byte) => byte.toString(16).padStart(2, "0")).join("")
    : Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
  return `${safePrefix}-${Date.now().toString(36).toUpperCase()}-${randomPart.toUpperCase()}`;
}

const formConfigs = {
  workorders: {
    fields: [
      { name: "title", type: "text", required: true },
      { name: "priority", type: "select", options: ["Critical", "High", "Medium", "Low"], required: true, value: "Medium" },
      { name: "status", type: "select", options: ["Open", "In Progress", "Waiting Parts", "Waiting Technician", "On Hold", "Repaired", "Done"], required: true, value: "Open" },
      { name: "targetObject", type: "maintenance-target", required: true },
      { name: "assignedTo", type: "text", required: true },
      { name: "dueDate", type: "date", required: true },
      { name: "faultStart", type: "datetime-local", required: true, defaultNow: true },
      { name: "faultEnd", type: "datetime-local" },
      { name: "description", type: "textarea", rows: 3 },
      { name: "rootCause", type: "textarea", rows: 3 },
      { name: "actionPlan", type: "textarea", rows: 4 },
      { name: "workPerformed", type: "textarea", rows: 4 },
      { name: "usedParts", type: "parts-usage" },
      { name: "repairPhotos", type: "file", accept: "image/*", multiple: true, helpKey: "repairPhotosHelp" },
      { name: "completedBy", type: "text" }
    ],
    onSubmit(formData) {
      state.workorders.unshift({
        id: createRecordId("WO"),
        title: formData.get("title"),
        priority: formData.get("priority"),
        status: formData.get("status"),
        objectType: formData.get("objectType") || currentObjectType(),
        assetId: formData.get("objectType") === "pressForm" ? "" : formData.get("assetId"),
        pressFormId: formData.get("objectType") === "pressForm" ? formData.get("pressFormId") : "",
        assignedTo: formData.get("assignedTo"),
        dueDate: formData.get("dueDate"),
        faultStart: formData.get("faultStart"),
        faultEnd: formData.get("faultEnd"),
        rootCause: formData.get("rootCause"),
        actionPlan: formData.get("actionPlan"),
        workPerformed: formData.get("workPerformed"),
        usedParts: parseUsedPartsField(formData.get("usedParts")),
        repairPhotos: parseImagesField(formData.get("repairPhotos")),
        description: formData.get("description"),
        completedBy: formData.get("completedBy"),
        comments: []
      });
    }
  },
  requests: {
    fields: [
      { name: "title", type: "text", required: true },
      { name: "requester", type: "text", required: true },
      { name: "assetId", type: "asset-select", required: true },
      { name: "priority", type: "select", options: ["Critical", "High", "Medium", "Low"], required: true, value: "Medium" },
      { name: "status", type: "select", options: ["New", "Approved", "Waiting"], required: true, value: "New" },
      { name: "createdAt", type: "date", required: true },
      { name: "note", type: "textarea", rows: 4 }
    ],
    onSubmit(formData) {
      state.requests.unshift({
        id: createRecordId("REQ"),
        title: formData.get("title"),
        requester: formData.get("requester"),
        assetId: formData.get("assetId"),
        priority: formData.get("priority"),
        status: formData.get("status"),
        createdAt: formData.get("createdAt"),
        note: formData.get("note")
      });
    }
  },
  assets: {
    fields: [
      { name: "name", type: "text", required: true },
      { name: "category", type: "text", required: true },
      { name: "manufacturer", type: "text" },
      { name: "model", type: "text" },
      { name: "serialNumber", type: "text" },
      { name: "location", type: "text", required: true },
      { name: "installDate", type: "date" },
      { name: "health", type: "select", options: ["Stable", "Warning", "Critical"], required: true, value: "Stable" },
      { name: "criticality", type: "text" },
      { name: "notes", type: "textarea", rows: 3 },
      { name: "images", type: "file", accept: "image/*", multiple: true },
      { name: "attachments", type: "file", accept: ".pdf,image/*,.doc,.docx,.xls,.xlsx,.txt", multiple: true, helpKey: "attachmentsHelp" }
    ],
    onSubmit(formData) {
      state.assets.unshift({
        id: createRecordId("AST"),
        name: formData.get("name"),
        category: formData.get("category"),
        manufacturer: formData.get("manufacturer"),
        model: formData.get("model"),
        serialNumber: formData.get("serialNumber"),
        location: formData.get("location"),
        installDate: formData.get("installDate"),
        health: formData.get("health"),
        criticality: formData.get("criticality"),
        notes: formData.get("notes"),
        images: parseImagesField(formData.get("images")),
        attachments: parseAttachmentsField(formData.get("attachments"))
      });
    }
  },
  pressForms: {
    fields: [
      { name: "name", type: "text", required: true },
      { name: "model", type: "text", required: true },
      { name: "serialNumber", type: "text", required: true },
      { name: "cavityCount", type: "number", required: true, value: "1" },
      { name: "currentCycles", type: "number", required: true, value: "0" },
      { name: "cycleLimit", type: "number", required: true, value: "500000" },
      { name: "location", type: "text", required: true },
      { name: "health", type: "select", options: ["Stable", "Warning", "Critical"], required: true, value: "Stable" },
      { name: "installDate", type: "date" },
      { name: "notes", type: "textarea", rows: 3 },
      { name: "pressFormImages", type: "file", accept: "image/*", multiple: true }
    ],
    onSubmit(formData) {
      state.pressForms.unshift({
        id: createRecordId("PF"),
        name: formData.get("name"),
        model: formData.get("model"),
        serialNumber: formData.get("serialNumber"),
        cavityCount: Number(formData.get("cavityCount")),
        currentCycles: Number(formData.get("currentCycles")),
        cycleLimit: Number(formData.get("cycleLimit")),
        location: formData.get("location"),
        health: formData.get("health"),
        installDate: formData.get("installDate"),
        notes: formData.get("notes"),
        pressFormImages: parseImagesField(formData.get("pressFormImages"))
      });
    }
  },
  inventory: {
    fields: [
      { name: "name", type: "text", required: true },
      { name: "sku", type: "text", required: true },
      { name: "onHand", type: "number", required: true, value: "1" },
      { name: "minQty", type: "number", required: true, value: "1" },
      { name: "location", type: "text", required: true },
      { name: "supplier", type: "text" },
      { name: "unitCost", type: "number", value: "0" },
      { name: "reorderUrl", type: "text" },
      { name: "criticalPart", type: "select", options: ["Critical", "Standard"], required: true, value: "Standard" },
      { name: "partImages", type: "file", accept: "image/*", multiple: true }
    ],
    onSubmit(formData) {
      state.inventory.unshift({
        id: createRecordId("INV"),
        name: formData.get("name"),
        sku: formData.get("sku"),
        onHand: Number(formData.get("onHand")),
        minQty: Number(formData.get("minQty")),
        location: formData.get("location"),
        supplier: formData.get("supplier"),
        unitCost: Number(formData.get("unitCost") || 0),
        reorderUrl: formData.get("reorderUrl"),
        criticalPart: formData.get("criticalPart") || "Standard",
        objectType: currentObjectType(),
        stockMoves: [],
        partImages: parseImagesField(formData.get("partImages"))
      });
    }
  },
  pm: {
    fields: [
      { name: "title", type: "text", required: true },
      { name: "targetObject", type: "maintenance-target", required: true },
      { name: "frequency", type: "text", required: true },
      { name: "nextDue", type: "date", required: true },
      { name: "owner", type: "text", required: true },
      { name: "checklist", type: "textarea", rows: 5 },
      { name: "usedParts", type: "parts-usage" }
    ],
    onSubmit(formData) {
      state.pm.unshift(buildPmEntityFromForm(formData, createRecordId("PM")));
    }
  },
  users: {
    fields: [
      { name: "name", type: "text", required: true },
      { name: "role", type: "select", options: ["Supervisor", "Planner", "Technician"], required: true, value: "Technician" },
      { name: "username", type: "text", required: true },
      { name: "password", type: "password", required: true },
      { name: "userStatus", type: "select", options: ["Active", "Inactive"], required: true, value: "Active" },
      { name: "team", type: "text", required: true },
      { name: "workload", type: "number", required: true, value: "0" },
      { name: "shift", type: "select", options: ["Day", "Evening", "Night"], required: true, value: "Day" }
    ],
    onSubmit(formData) {
      state.users.unshift({
        id: createRecordId("USR"),
        name: String(formData.get("name") || "").trim(),
        role: normalizeRoleKey(formData.get("role")),
        username: String(formData.get("username") || "").trim().toLowerCase(),
        password: formData.get("password"),
        userStatus: formData.get("userStatus"),
        team: String(formData.get("team") || "").trim(),
        workload: Number(formData.get("workload")),
        shift: formData.get("shift")
      });
    }
  },
  report: {
    fields: [
      { name: "title", type: "text", required: true },
      { name: "description", type: "textarea", rows: 4, required: true }
    ],
    onSubmit(formData) {
      state.generatedReports.unshift({
        id: createRecordId("RPT"),
        title: formData.get("title"),
        text: formData.get("description"),
        createdAt: new Date().toISOString().slice(0, 10)
      });
    }
  },
  failure: {
    fields: [
      { name: "assetId", type: "asset-select", required: true },
      { name: "failureStart", type: "datetime-local", required: true },
      { name: "repairEnd", type: "datetime-local", required: true },
      { name: "reason", type: "text", required: true }
    ],
    onSubmit(formData) {
      state.failureEvents.unshift({
        id: createRecordId("FE"),
        assetId: formData.get("assetId"),
        failureStart: formData.get("failureStart"),
        repairEnd: formData.get("repairEnd"),
        reason: formData.get("reason")
      });
    }
  },
  production: {
    fields: [
      { name: "assetId", type: "asset-select", required: true },
      { name: "plannedMinutes", type: "number", required: true, value: "480" },
      { name: "downtimeMinutes", type: "number", required: true, value: "0" },
      { name: "idealCycleTimeSeconds", type: "number", required: true, value: "60" },
      { name: "totalCount", type: "number", required: true, value: "100" },
      { name: "goodCount", type: "number", required: true, value: "98" }
    ],
    onSubmit(formData) {
      state.productionRuns.unshift({
        id: createRecordId("PR"),
        assetId: formData.get("assetId"),
        plannedMinutes: Number(formData.get("plannedMinutes")),
        downtimeMinutes: Number(formData.get("downtimeMinutes")),
        idealCycleTimeSeconds: Number(formData.get("idealCycleTimeSeconds")),
        totalCount: Number(formData.get("totalCount")),
        goodCount: Number(formData.get("goodCount"))
      });
    }
  }
};

function getCurrentLocale() {
  return {
    ru: "ru-RU",
    uz: "uz-UZ",
    en: "en-US"
  }[currentLanguage] || "ru-RU";
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString(getCurrentLocale());
}

function formatCurrency(value) {
  const amount = Number(value || 0);
  if (!amount) return "-";
  return `${formatNumber(amount)} UZS`;
}

function updateRealTimeClock() {
  const clockElement = document.getElementById("real-time-clock");
  if (clockElement) {
    const now = new Date();
    const dateText = now.toLocaleDateString(getCurrentLocale(), {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    const timeText = now.toLocaleTimeString(getCurrentLocale(), {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    clockElement.innerHTML = `
      <span class="clock-date">${dateText}</span>
      <strong class="clock-time">${timeText}</strong>
    `;
  }
}

setInterval(updateRealTimeClock, 1000);

document.getElementById("close-modal-btn").addEventListener("click", () => modal.close());
document.getElementById("close-asset-detail-modal-btn").addEventListener("click", () => assetDetailModal.close());
document.getElementById("close-stock-move-modal-btn")?.addEventListener("click", () => stockMoveModal?.close());
stockMoveForm?.addEventListener("submit", submitStockMoveForm);
openModalBtn?.addEventListener("click", handlePrimaryAction);
addDailyFaultBtn?.addEventListener("click", () => openEntityModal("workorders"));
addAssetBtn?.addEventListener("click", () => openEntityModal("assets"));
addPressFormBtn?.addEventListener("click", () => openEntityModal("pressForms"));
addInventoryBtn?.addEventListener("click", () => openEntityModal("inventory"));
addCriticalPartBtn?.addEventListener("click", () => openCriticalPartModal());
addPmBtn?.addEventListener("click", () => openEntityModal("pm"));
addUserBtn?.addEventListener("click", () => openEntityModal("users"));
if (addFailureBtn) {
  addFailureBtn.addEventListener("click", () => openEntityModal("failure"));
}
if (addProductionBtn) {
  addProductionBtn.addEventListener("click", () => openEntityModal("production"));
}
backupBtn.addEventListener("click", createManualBackup);
settingsBackupBtn?.addEventListener("click", createManualBackup);
settingsCompanySaveBtn?.addEventListener("click", saveCompanySettings);
settingsTelegramSaveBtn?.addEventListener("click", saveTelegramSettings);
settingsTelegramTestBtn?.addEventListener("click", sendTelegramTestMessage);
settingsAddUserBtn?.addEventListener("click", () => openEntityModal("users"));
exportCsvBtn?.addEventListener("click", exportManagementCsv);
exportReportBtn?.addEventListener("click", exportPrintableReport);
printAssetQrBtn?.addEventListener("click", printAssetQrLabels);
notificationBtn?.addEventListener("click", () => {
  const isOpen = !notificationPopover?.hidden;
  if (notificationPopover) notificationPopover.hidden = isOpen;
  notificationBtn.setAttribute("aria-expanded", String(!isOpen));
});
document.addEventListener("click", (event) => {
  if (!notificationPopover || notificationPopover.hidden) return;
  if (event.target.closest(".notification-center")) return;
  notificationPopover.hidden = true;
  notificationBtn?.setAttribute("aria-expanded", "false");
});
logoutBtn.addEventListener("click", () => {
  currentUserId = "";
  localStorage.removeItem(sessionKey);
  updateSessionUI();
});

navLinks.forEach((button) => {
  button.addEventListener("click", () => {
    const groupKey = getNavButtonGroup(button);
    if (groupKey) activeNavGroup = groupKey;
    if (button.classList.contains("nav-parent-link") && groupKey) {
      if (expandedNavGroups.has(groupKey)) {
        expandedNavGroups.delete(groupKey);
      } else {
        expandedNavGroups.add(groupKey);
      }
    }
    if (button.classList.contains("nav-link-sub") && groupKey) {
      expandedNavGroups.add(groupKey);
    }
    setView(button.dataset.view);
  });
});

dashboardTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dashboardObjectType = button.dataset.dashboardType || "asset";
    dashboardTypeButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderAll();
    updateViewContextChip();
  });
});

searchInput.addEventListener("input", renderAll);
assetHealthFilter.addEventListener("change", renderAssets);
assetCriticalityFilter.addEventListener("change", renderAssets);
assetLocationFilter.addEventListener("change", renderAssets);
assetSort.addEventListener("change", renderAssets);
statusFilter.addEventListener("change", renderWorkorders);
priorityFilter.addEventListener("change", renderWorkorders);
dailyFaultQuickFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-fault-filter]");
  if (!button) return;
  dailyFaultQuickFilter = button.dataset.faultFilter || "all";
  renderWorkorders();
});
dashboardKpiAssetFilter?.addEventListener("change", renderDashboardKpiAnalytics);
analyticsAssetFilter?.addEventListener("change", renderAnalytics);
languageSwitcher.addEventListener("change", () => {
  currentLanguage = languageSwitcher.value;
  localStorage.setItem(languageKey, currentLanguage);
  applyTranslations();
  renderAll();
  updateRealTimeClock();
});

settingsLanguageSwitcher?.addEventListener("change", () => {
  currentLanguage = settingsLanguageSwitcher.value;
  localStorage.setItem(languageKey, currentLanguage);
  applyTranslations();
  renderAll();
  updateRealTimeClock();
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const normalizedUsername = loginUsername.value.trim().toLowerCase();
  const user = await authenticateUser(normalizedUsername, loginPassword.value);

  if (!user) {
    loginError.hidden = false;
    loginError.textContent = t("invalidLogin");
    return;
  }

  loginError.hidden = true;
  currentUserId = user.id;
  localStorage.setItem(sessionKey, currentUserId);
  loginForm.reset();
  updateSessionUI();
  applyTranslations();
  renderAll();
  if (!handleDeepLinkOpen()) {
    setView(canAccessView(currentView) ? currentView : "dashboard");
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const savedView = currentModalView;
  const returnView = currentView;
  const savedEditId = currentEditId;
  const wasEdit = Boolean(currentEditId);
  const formData = await buildProcessedFormData(form, currentModalView, currentEditId);
  const usesInventoryParts = currentModalView === "workorders" || currentModalView === "pm";
  const previousPartsEntity = usesInventoryParts && currentEditId
    ? getCollection(currentModalView).find((item) => String(item.id) === String(currentEditId))
    : null;
  const previousUsedParts = normalizeUsedParts(previousPartsEntity?.usedParts);
  const nextUsedParts = usesInventoryParts ? parseUsedPartsField(formData.get("usedParts")) : [];
  if (currentModalView === "users" && !validateUserForm(formData, currentEditId)) return;
  if (currentEditId) {
    updateEntity(currentModalView, currentEditId, formData);
  } else {
    formConfigs[currentModalView].onSubmit(formData);
  }
  if (usesInventoryParts) {
    applyUsedPartsInventoryDelta(previousUsedParts, nextUsedParts, currentModalView);
    if (currentModalView === "pm") syncPmUsedPartMarkers();
  }
  const savedEntity = wasEdit
    ? getCollection(savedView).find((item) => String(item.id) === String(savedEditId))
    : getCollection(savedView)[0];
  addAuditEvent(wasEdit ? "updated" : "created", savedView, savedEntity);
  persistState();
  clearFiltersAfterSave(savedView);
  modal.close();
  currentEditId = null;
  renderAll();
  setView(
    returnView === "criticalParts" && savedView === "inventory"
      ? "criticalParts"
      : savedView === "failure" || savedView === "production"
      ? "analytics"
      : savedView === "report"
        ? "reports"
        : savedView
  );
  renderDashboardAfterLayout();
});

function clearFiltersAfterSave(viewName) {
  if (searchInput) searchInput.value = "";
  if (viewName === "workorders") {
    if (statusFilter) statusFilter.value = "all";
    if (priorityFilter) priorityFilter.value = "all";
  }
  if (viewName === "assets") {
    if (assetHealthFilter) assetHealthFilter.value = "all";
    if (assetCriticalityFilter) assetCriticalityFilter.value = "all";
    if (assetLocationFilter) assetLocationFilter.value = "all";
    if (assetSort) assetSort.value = "name-asc";
  }
}

function renderDashboardAfterLayout() {
  window.requestAnimationFrame(() => {
    renderStats();
    renderNavBadges();
    renderDashboardKpiAnalytics();
    renderDashboardOperations();
  });
  window.setTimeout(() => {
    renderStats();
    renderDashboardKpiAnalytics();
    renderDashboardOperations();
  }, 120);
}

async function buildProcessedFormData(formElement, viewName, editId) {
  const formData = new FormData(formElement);
  if (viewName === "workorders" || viewName === "pm") {
    formData.set("usedParts", JSON.stringify(parseUsedPartsFromFormData(formData)));
  }
  if (viewName === "pm") return formData;
  if (viewName === "workorders") {
    const existing = editId ? getCollection(viewName).find((item) => String(item.id) === String(editId)) : null;
    const repairPhotoInput = formElement.querySelector('input[name="repairPhotos"]');
    const repairPhotoFiles = Array.from(repairPhotoInput?.files || []);
    if (repairPhotoFiles.length) {
      const photos = await Promise.all(repairPhotoFiles.map((file) => fileToOptimizedDataUrl(file)));
      formData.set("repairPhotos", JSON.stringify(photos));
    } else {
      formData.set("repairPhotos", JSON.stringify(normalizeWorkorderPhotos(existing)));
    }
    return formData;
  }
  if (viewName !== "assets" && viewName !== "inventory" && viewName !== "pressForms") return formData;

  const existing = editId ? getCollection(viewName).find((item) => String(item.id) === String(editId)) : null;

  if (viewName === "inventory") {
    const imageInput = formElement.querySelector('input[name="partImages"]');
    const imageFiles = Array.from(imageInput?.files || []);
    if (imageFiles.length) {
      const images = await Promise.all(imageFiles.map((file) => fileToOptimizedDataUrl(file)));
      formData.set("partImages", JSON.stringify(images));
    } else {
      formData.set("partImages", JSON.stringify(normalizeInventoryImages(existing)));
    }
    return formData;
  }

  if (viewName === "pressForms") {
    const imageInput = formElement.querySelector('input[name="pressFormImages"]');
    const imageFiles = Array.from(imageInput?.files || []);
    if (imageFiles.length) {
      const images = await Promise.all(imageFiles.map((file) => fileToOptimizedDataUrl(file)));
      formData.set("pressFormImages", JSON.stringify(images));
    } else {
      formData.set("pressFormImages", JSON.stringify(normalizePressFormImages(existing)));
    }
    return formData;
  }

  const imageInput = formElement.querySelector('input[name="images"]');
  const attachmentInput = formElement.querySelector('input[name="attachments"]');
  const imageFiles = Array.from(imageInput?.files || []);
  const attachmentFiles = Array.from(attachmentInput?.files || []);

  if (imageFiles.length) {
    const images = await Promise.all(imageFiles.map((file) => fileToOptimizedDataUrl(file)));
    formData.set("images", JSON.stringify(images));
  } else {
    formData.set("images", JSON.stringify(normalizeAssetImages(existing)));
  }

  if (attachmentFiles.length) {
    const attachments = await Promise.all(attachmentFiles.map((file) => fileToAttachment(file)));
    formData.set("attachments", JSON.stringify(attachments));
  } else {
    formData.set("attachments", JSON.stringify(normalizeAssetAttachments(existing)));
  }

  return formData;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function fileToOptimizedDataUrl(file) {
  const dataUrl = await fileToDataUrl(file);
  if (!String(file.type || "").startsWith("image/")) return dataUrl;

  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const maxSize = 1280;
      const scale = Math.min(1, maxSize / Math.max(image.width || maxSize, image.height || maxSize));
      if (scale >= 1 && dataUrl.length < 650000) {
        resolve(dataUrl);
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        resolve(dataUrl);
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.78));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

function normalizeAssetImages(asset) {
  if (!asset) return [];
  if (Array.isArray(asset.images)) {
    return asset.images.filter(Boolean);
  }
  if (asset.imageData) {
    return [asset.imageData];
  }
  return [];
}

function normalizeAssetAttachments(asset) {
  if (!asset) return [];
  if (Array.isArray(asset.attachments)) {
    return asset.attachments.filter((item) => item?.name && item?.data);
  }
  return [];
}

function isImageAttachment(file) {
  return String(file?.type || "").startsWith("image/") || String(file?.data || "").startsWith("data:image/");
}

function getAssetDisplayImages(asset) {
  const seen = new Set();
  return [
    ...normalizeAssetImages(asset),
    ...normalizeAssetAttachments(asset).filter(isImageAttachment).map((file) => file.data)
  ].filter((src) => {
    if (!src || seen.has(src)) return false;
    seen.add(src);
    return true;
  });
}

function normalizePressFormImages(pressForm) {
  if (!pressForm) return [];
  if (Array.isArray(pressForm.pressFormImages)) {
    return pressForm.pressFormImages.filter(Boolean);
  }
  if (Array.isArray(pressForm.images)) {
    return pressForm.images.filter(Boolean);
  }
  if (pressForm.imageData) {
    return [pressForm.imageData];
  }
  return [];
}

function getPressFormDisplayImages(pressForm) {
  const seen = new Set();
  return normalizePressFormImages(pressForm).filter((src) => {
    if (!src || seen.has(src)) return false;
    seen.add(src);
    return true;
  });
}

function normalizeInventoryImages(item) {
  if (!item) return [];
  if (Array.isArray(item.partImages)) {
    return item.partImages.filter(Boolean);
  }
  if (item.imageData) {
    return [item.imageData];
  }
  return [];
}

function normalizeWorkorderPhotos(workorder) {
  if (!workorder) return [];
  if (Array.isArray(workorder.repairPhotos)) {
    return workorder.repairPhotos.filter(Boolean);
  }
  return parseImagesField(workorder.repairPhotos);
}

function parseCycleInterval(value) {
  const match = String(value || "").replace(/\s/g, "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function normalizeChecklistItems(value) {
  const rawItems = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
      : [];

  return rawItems.map((item, index) => {
    if (typeof item === "string") {
      return {
        id: `CHK-${index + 1}`,
        text: item.trim(),
        done: false,
        response: "",
        comment: ""
      };
    }

    const response = String(item.response || item.answer || item.result || "").trim();
    return {
      id: item.id || `CHK-${index + 1}`,
      text: String(item.text || item.title || item.name || "").trim(),
      done: Boolean(item.done || item.checked || item.completed),
      response: ["OK", "Issue", "NA"].includes(response) ? response : "",
      comment: String(item.comment || item.comments || item.note || "").trim()
    };
  }).filter((item) => item.text);
}

function getDefaultPmChecklistTexts(objectType = currentObjectType(), repairType = "Preventive") {
  const templates = t("defaultPmChecklist");
  if (!templates || typeof templates !== "object") return [];
  if (objectType === "pressForm") {
    return templates.pressForm?.[repairType] || templates.pressForm?.Preventive || [];
  }
  return templates.asset || [];
}

function checklistToTextarea(value) {
  const items = normalizeChecklistItems(value);
  return items.map((item) => item.text).join("\n");
}

function parseChecklistField(value, previousChecklist = []) {
  const previousByText = normalizeChecklistItems(previousChecklist).reduce((map, item) => {
    map.set(item.text.toLowerCase(), item);
    return map;
  }, new Map());

  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((text, index) => {
      const previous = previousByText.get(text.toLowerCase());
      return {
        id: previous?.id || `CHK-${Date.now().toString(36).toUpperCase()}-${index + 1}`,
        text,
        done: Boolean(previous?.done),
        response: previous?.response || "",
        comment: previous?.comment || ""
      };
    });
}

function normalizePmRecord(item) {
  const objectType = item.objectType || (item.pressFormId ? "pressForm" : "asset");
  const cycleInterval = objectType === "pressForm"
    ? Number(item.cycleInterval || parseCycleInterval(item.frequency) || 0)
    : 0;
  const repairType = objectType === "pressForm" ? item.repairType || "Preventive" : "";
  const checklist = normalizeChecklistItems(item.checklist);

  return {
    ...item,
    objectType,
    assetId: objectType === "pressForm" ? "" : item.assetId,
    pressFormId: objectType === "pressForm" ? item.pressFormId || "" : "",
    repairType,
    cycleInterval,
    frequency: objectType === "pressForm" && cycleInterval ? `${cycleInterval} cycles` : item.frequency,
    checklist: checklist.length ? checklist : normalizeChecklistItems(getDefaultPmChecklistTexts(objectType, repairType)),
    usedParts: normalizeUsedParts(item.usedParts)
  };
}

function parseImagesField(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function getInventoryPart(partId) {
  return state.inventory.find((part) => String(part.id) === String(partId)) || null;
}

function translateStockMoveType(type) {
  const key = `stockMoveTypes.${type || "Issue"}`;
  const translated = t(key);
  return translated === key ? type || "-" : translated;
}

function getPartStockMoves(part) {
  return Array.isArray(part?.stockMoves) ? part.stockMoves : [];
}

function addStockMoveRecord(part, type, qty, before, after, note = "", source = "manual") {
  if (!part) return;
  if (!Array.isArray(part.stockMoves)) part.stockMoves = [];
  const user = getCurrentUser();
  part.stockMoves.unshift({
    id: createRecordId("MOV"),
    type,
    qty: Math.abs(Number(qty || 0)),
    before: Number(before || 0),
    after: Number(after || 0),
    note: String(note || "").trim(),
    source,
    user: user?.name || t("sessionGuest"),
    createdAt: new Date().toISOString()
  });
  part.stockMoves = part.stockMoves.slice(0, 60);
}

function renderStockMoveAction(partId) {
  if (!canEditEntity("inventory")) return "";
  return `
    <button
      class="ghost-btn icon-btn stock-move-btn"
      type="button"
      title="${t("stockMoveOpen")}"
      aria-label="${t("stockMoveOpen")}"
      data-action="stock-move"
      data-id="${escapeHtml(partId)}"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 21 7v10l-9 5-9-5V7l9-5Zm0 2.3L6.1 7.5 12 10.7l5.9-3.2L12 4.3Zm-7 5v6.5l6 3.3v-6.6L5 9.3Zm8 9.8 6-3.3V9.3l-6 3.2v6.6Zm3-8.1h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2Z"/></svg>
    </button>
  `;
}

function setStockMoveError(message = "") {
  if (!stockMoveError) return;
  stockMoveError.textContent = message;
  stockMoveError.hidden = !message;
  stockMoveError.classList.toggle("is-error", Boolean(message));
}

function renderStockMoveModal(part) {
  if (!part || !stockMoveSummary || !stockMoveHistory) return;
  const moves = getPartStockMoves(part).slice(0, 8);
  if (stockMoveTitle) stockMoveTitle.textContent = `${t("stockMoveTitle")} - ${part.name}`;
  if (stockMoveSummary) {
    stockMoveSummary.innerHTML = `
      <span>
        <strong>${escapeHtml(part.name)}</strong>
        <small>${escapeHtml([part.sku, part.location].filter(Boolean).join(" - "))}</small>
      </span>
      <em>${t("stockMoveBalance")} <strong>${formatNumber(part.onHand)}</strong></em>
    `;
  }
  stockMoveHistory.innerHTML = moves.length ? moves.map((move) => `
    <article class="stock-move-item ${String(move.type || "").toLowerCase()}">
      <span>${escapeHtml(translateStockMoveType(move.type))}</span>
      <strong>${move.type === "Issue" ? "-" : "+"}${formatNumber(move.qty)}</strong>
      <small>${formatNumber(move.before)} -> ${formatNumber(move.after)}</small>
      <em>${escapeHtml([move.note || move.source, move.user, formatDateTime(move.createdAt)].filter(Boolean).join(" - "))}</em>
    </article>
  `).join("") : `<p>${t("stockMoveEmpty")}</p>`;
}

function openStockMoveModal(partId) {
  if (!requirePermission(() => canEditEntity("inventory"))) return;
  const part = getInventoryPart(partId);
  if (!part || !stockMoveModal || !stockMovePartId || !stockMoveType || !stockMoveQty) return;
  stockMovePartId.value = part.id;
  stockMoveType.innerHTML = ["Receipt", "Issue"].map((type) => `<option value="${type}">${translateStockMoveType(type)}</option>`).join("");
  stockMoveQty.value = "1";
  if (stockMoveNote) stockMoveNote.value = "";
  setStockMoveError();
  renderStockMoveModal(part);
  stockMoveModal.showModal();
}

function submitStockMoveForm(event) {
  event.preventDefault();
  if (!requirePermission(() => canEditEntity("inventory"))) return;
  const part = getInventoryPart(stockMovePartId?.value);
  const type = stockMoveType?.value === "Issue" ? "Issue" : "Receipt";
  const qty = Math.max(0, Number(stockMoveQty?.value || 0));
  if (!part || !qty) return;
  const before = Number(part.onHand || 0);
  if (type === "Issue" && qty > before) {
    setStockMoveError(t("stockNotEnough"));
    return;
  }
  const after = type === "Issue" ? before - qty : before + qty;
  part.onHand = after;
  addStockMoveRecord(part, type, qty, before, after, stockMoveNote?.value || "", "manual");
  addAuditEvent("stock", "inventory", part, `${translateStockMoveType(type)}: ${before} -> ${after}`);
  persistState();
  renderInventory();
  renderCriticalParts();
  renderDashboardOperations();
  bindCrudButtons();
  if (stockMoveQty) stockMoveQty.value = "1";
  if (stockMoveNote) stockMoveNote.value = "";
  setStockMoveError();
  renderStockMoveModal(part);
}

function parseUsedPartsField(value) {
  if (!value) return [];
  try {
    return normalizeUsedParts(JSON.parse(value));
  } catch {
    return [];
  }
}

function normalizeUsedParts(parts, inventory = []) {
  if (!Array.isArray(parts)) return [];
  return parts.map((item) => {
    const inventoryId = item?.inventoryId || item?.partId || item?.id;
    const part = inventory.find((candidate) => String(candidate.id) === String(inventoryId));
    const qty = Math.max(0, Number(item?.qty ?? item?.quantity ?? 0));
    return {
      inventoryId,
      qty,
      name: item?.name || part?.name || "",
      sku: item?.sku || part?.sku || "",
      image: item?.image || normalizeInventoryImages(part)[0] || ""
    };
  }).filter((item) => item.inventoryId && item.qty > 0);
}

function parseUsedPartsFromFormData(formData) {
  const checked = new Set(formData.getAll("usedPartIds").map(String));
  return state.inventory.map((part) => {
    const qty = Math.max(0, Number(formData.get(`usedPartQty__${part.id}`) || 0));
    if (!checked.has(String(part.id))) return null;
    return {
      inventoryId: part.id,
      qty: qty || 1,
      name: part.name,
      sku: part.sku,
      image: normalizeInventoryImages(part)[0] || ""
    };
  }).filter(Boolean);
}

function aggregateUsedParts(parts) {
  return normalizeUsedParts(parts).reduce((map, item) => {
    map.set(item.inventoryId, (map.get(item.inventoryId) || 0) + Number(item.qty || 0));
    return map;
  }, new Map());
}

function applyUsedPartsInventoryDelta(previousParts, nextParts, sourceView = "") {
  const previous = aggregateUsedParts(previousParts);
  const next = aggregateUsedParts(nextParts);
  const partIds = new Set([...previous.keys(), ...next.keys()]);
  partIds.forEach((partId) => {
    const part = getInventoryPart(partId);
    if (!part) return;
    const delta = (next.get(partId) || 0) - (previous.get(partId) || 0);
    const before = Number(part.onHand || 0);
    part.onHand = Math.max(0, Number(part.onHand || 0) - delta);
    if (sourceView === "pm" && delta > 0) {
      part.usedInPm = true;
      part.lastPmUsedAt = new Date().toISOString();
    }
    if (delta !== 0) {
      addStockMoveRecord(
        part,
        delta > 0 ? "Issue" : "Return",
        Math.abs(delta),
        before,
        part.onHand,
        sourceView,
        sourceView || "used-parts"
      );
      addAuditEvent("stock", "inventory", part, `${before} -> ${part.onHand}`);
    }
  });
}

function syncPmUsedPartMarkers() {
  const pmUsedPartIds = new Set();
  state.pm.forEach((item) => {
    normalizeUsedParts(item.usedParts).forEach((part) => {
      pmUsedPartIds.add(String(part.inventoryId));
    });
  });
  state.inventory.forEach((part) => {
    if (pmUsedPartIds.has(String(part.id))) {
      part.usedInPm = true;
      if (!part.lastPmUsedAt) part.lastPmUsedAt = new Date().toISOString();
      return;
    }
    delete part.usedInPm;
    delete part.lastPmUsedAt;
  });
}

function parseAttachmentsField(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item) => item?.name && item?.data) : [];
  } catch {
    return [];
  }
}

async function fileToAttachment(file) {
  return {
    name: file.name,
    type: file.type || "application/octet-stream",
    data: String(file.type || "").startsWith("image/")
      ? await fileToOptimizedDataUrl(file)
      : await fileToDataUrl(file)
  };
}

function inferLegacyUserAuth(user) {
  const normalizedName = String(user?.name || "").trim().toLowerCase();
  const legacyMap = {
    "gene simmons": { username: "planner", password: "planner123", userStatus: "Active" },
    "peter criss": { username: "tech1", password: "tech123", userStatus: "Active" },
    "andrew mills": { username: "tech2", password: "tech123", userStatus: "Inactive" },
    "david green": { username: "admin", password: "admin123", userStatus: "Active" }
  };
  return legacyMap[normalizedName] || null;
}

function normalizeUserRecord(user) {
  const legacyAuth = inferLegacyUserAuth(user);
  return {
    ...user,
    role: normalizeRoleKey(user.role || "Technician"),
    username: user.username || legacyAuth?.username || user.name?.toLowerCase().replace(/\s+/g, "") || "",
    password: user.password || legacyAuth?.password || "changeme123",
    userStatus: user.userStatus || legacyAuth?.userStatus || "Active"
  };
}

function inferAssetIdFromRecord(record, assets = []) {
  const text = [
    record?.title,
    record?.note,
    record?.description,
    record?.reason
  ].filter(Boolean).join(" ").toLowerCase();

  if (!text) return "";

  const match = assets.find((asset) => {
    const tokens = [asset.id, asset.name, asset.model, asset.serialNumber]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase())
      .filter((value) => value.length >= 3);
    return tokens.some((token) => text.includes(token));
  });

  return match?.id || "";
}

function normalizeRequestRecord(request, assets = []) {
  return {
    ...request,
    assetId: request.assetId || inferAssetIdFromRecord(request, assets)
  };
}

function normalizeWorkorderRecord(workorder, assets = [], inventory = []) {
  const objectType = workorder.objectType || (workorder.pressFormId ? "pressForm" : "asset");
  return {
    ...workorder,
    status: workorder.status || "Open",
    objectType,
    assetId: objectType === "pressForm" ? "" : workorder.assetId || inferAssetIdFromRecord(workorder, assets),
    pressFormId: objectType === "pressForm" ? workorder.pressFormId || "" : "",
    faultStart: workorder.faultStart || "",
    faultEnd: workorder.faultEnd || "",
    rootCause: workorder.rootCause || "",
    actionPlan: workorder.actionPlan || "",
    workPerformed: workorder.workPerformed || "",
    usedParts: normalizeUsedParts(workorder.usedParts, inventory),
    repairPhotos: normalizeWorkorderPhotos(workorder),
    completedBy: workorder.completedBy || "",
    comments: Array.isArray(workorder.comments) ? workorder.comments : []
  };
}

function mergeUsersWithDemoAccess(parsedUsers) {
  const sourceUsers = Array.isArray(parsedUsers) ? parsedUsers : seedData.users;
  return structuredClone(sourceUsers).map((user) => normalizeUserRecord(user));
}

async function apiRequest(path, options = {}) {
  const bases = activeApiBase
    ? [activeApiBase, ...apiBaseCandidates.filter((base) => base !== activeApiBase)]
    : apiBaseCandidates;

  for (const base of bases) {
    try {
      const response = await fetch(`${base}${path}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {})
        }
      });
      if (!response.ok) continue;
      activeApiBase = base;
      return await response.json();
    } catch {
      // Keep the local-only prototype usable when the backend is not running.
    }
  }
  return null;
}

async function refreshMobileOrigin() {
  const browserOrigin = window.location.origin || "";
  const hasPublicBrowserOrigin = browserOrigin
    && browserOrigin !== "null"
    && /^https?:$/i.test(window.location.protocol)
    && !isLocalAppHost;
  if (hasPublicBrowserOrigin) {
    qrPreferredOrigin = browserOrigin;
    return;
  }

  const health = await apiRequest("/api/health");
  const preferredUrl = health?.lanUrl || health?.serverUrl || health?.localUrl || "";
  if (!preferredUrl) return;

  try {
    qrPreferredOrigin = new URL(preferredUrl).origin;
  } catch {
    qrPreferredOrigin = preferredUrl.replace(/\/$/, "");
  }
}

async function authenticateUser(username, password) {
  const serverResult = await apiRequest("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password })
  });

  if (serverResult?.user) {
    const localUser = state.users.find((item) => String(item.id) === String(serverResult.user.id));
    if (localUser) return localUser;
    const syncedUser = { ...serverResult.user, password: "" };
    state.users.push(syncedUser);
    return syncedUser;
  }

  return state.users.find((item) =>
    String(item.username || "").trim().toLowerCase() === username &&
    item.password === password &&
    item.userStatus === "Active"
  );
}

async function loadBackendState() {
  const result = await apiRequest("/api/state");
  return result?.state && Object.keys(result.state).length ? result.state : null;
}

async function loadState() {
  const base = structuredClone(seedData);
  const backendState = await loadBackendState();
  if (backendState) return normalizeState(backendState, base);

  const raw = localStorage.getItem(storageKey);
  if (!raw) return base;
  return normalizeState(JSON.parse(raw), base);
}

function normalizeState(parsed, base = structuredClone(seedData)) {
  return {
    ...base,
    ...parsed,
    settings: {
      ...base.settings,
      ...(parsed.settings || {})
    },
    assets: Array.isArray(parsed.assets)
      ? parsed.assets.map((asset) => ({
          ...asset,
          manufacturer: asset.manufacturer || "",
          model: asset.model || "",
          serialNumber: asset.serialNumber || "",
          installDate: asset.installDate || "",
          criticality: asset.criticality || "",
          notes: asset.notes || "",
          images: normalizeAssetImages(asset),
          attachments: normalizeAssetAttachments(asset)
        }))
      : base.assets,
    pressForms: Array.isArray(parsed.pressForms)
      ? parsed.pressForms.map((pressForm) => ({
          ...pressForm,
          model: pressForm.model || "",
          serialNumber: pressForm.serialNumber || "",
          cavityCount: Number(pressForm.cavityCount || 0),
          currentCycles: Number(pressForm.currentCycles || 0),
          cycleLimit: Number(pressForm.cycleLimit || 0),
          location: pressForm.location || "",
          health: pressForm.health || "Stable",
          installDate: pressForm.installDate || "",
          notes: pressForm.notes || "",
          pressFormImages: normalizePressFormImages(pressForm)
        }))
      : base.pressForms,
    inventory: Array.isArray(parsed.inventory)
      ? parsed.inventory.map((item) => ({
          ...item,
          objectType: item.objectType || "asset",
          criticalPart: item.criticalPart || (Number(item.onHand || 0) <= Number(item.minQty || 0) ? "Critical" : "Standard"),
          supplier: item.supplier || "",
          unitCost: Number(item.unitCost || 0),
          reorderUrl: item.reorderUrl || "",
          stockMoves: Array.isArray(item.stockMoves) ? item.stockMoves : [],
          partImages: normalizeInventoryImages(item)
        }))
      : base.inventory,
    requests: Array.isArray(parsed.requests)
      ? parsed.requests.map((request) => normalizeRequestRecord(request, Array.isArray(parsed.assets) ? parsed.assets : base.assets))
      : base.requests,
    workorders: Array.isArray(parsed.workorders)
      ? parsed.workorders.map((workorder) => normalizeWorkorderRecord(
          workorder,
          Array.isArray(parsed.assets) ? parsed.assets : base.assets,
          Array.isArray(parsed.inventory) ? parsed.inventory : base.inventory
        ))
      : base.workorders.map((workorder) => normalizeWorkorderRecord(workorder, base.assets, base.inventory)),
    pm: Array.isArray(parsed.pm) ? parsed.pm.map(normalizePmRecord) : base.pm.map(normalizePmRecord),
    users: mergeUsersWithDemoAccess(parsed.users),
    failureEvents: Array.isArray(parsed.failureEvents) ? parsed.failureEvents : base.failureEvents,
    productionRuns: Array.isArray(parsed.productionRuns) ? parsed.productionRuns : base.productionRuns,
    kpiTargets: normalizeKpiTargets(parsed.kpiTargets || base.kpiTargets),
    generatedReports: Array.isArray(parsed.generatedReports) ? parsed.generatedReports : [],
    auditLog: Array.isArray(parsed.auditLog) ? parsed.auditLog.slice(0, 100) : []
  };
}

function persistState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.warn("CMMS local storage save failed:", error);
    if (!storageWarningShown) {
      storageWarningShown = true;
      alert(t("localStorageFullWarning"));
    }
  }
  void saveStateToBackend();
}

function getCompanySettings() {
  const settings = state.settings && typeof state.settings === "object" ? state.settings : {};
  const companyName = String(settings.companyName || seedData.settings.companyName).trim() || seedData.settings.companyName;
  const siteName = String(settings.siteName || "").trim();
  return { companyName, siteName };
}

function getTelegramSettings() {
  const settings = state.settings && typeof state.settings === "object" ? state.settings : {};
  const telegram = settings.telegram && typeof settings.telegram === "object" ? settings.telegram : {};
  return {
    enabled: Boolean(telegram.enabled),
    botToken: String(telegram.botToken || "").trim(),
    chatId: String(telegram.chatId || "").trim()
  };
}

function applyCompanySettings() {
  const { companyName, siteName } = getCompanySettings();
  const brandName = document.getElementById("brand-company-name");
  const siteLabel = document.getElementById("site-name-label");

  if (brandName) brandName.textContent = companyName;
  if (siteLabel) siteLabel.textContent = siteName || t("plantLabel");
}

function saveCompanySettings() {
  if (!state.settings || typeof state.settings !== "object") {
    state.settings = { ...seedData.settings };
  }

  state.settings.companyName = settingsCompanyNameInput?.value.trim() || seedData.settings.companyName;
  state.settings.siteName = settingsCompanySiteInput?.value.trim() || "";
  applyCompanySettings();
  addAuditEvent("updated", "settings", { id: "company", name: state.settings.companyName }, state.settings.siteName || t("plantLabel"));
  persistState();
  renderSettings();
  renderDashboardOperations();
  alert(t("settingsSaved"));
}

async function saveTelegramSettings(options = {}) {
  const silent = Boolean(options?.silent);
  if (!requirePermission(() => canEditEntity("users"))) return;
  if (!state.settings || typeof state.settings !== "object") {
    state.settings = { ...seedData.settings };
  }

  state.settings.telegram = {
    enabled: Boolean(settingsTelegramEnabled?.checked),
    botToken: settingsTelegramToken?.value.trim() || "",
    chatId: settingsTelegramChatId?.value.trim() || ""
  };
  if (!silent) {
    addAuditEvent("updated", "settings", { id: "telegram", name: "Telegram" }, state.settings.telegram.enabled ? "enabled" : "disabled");
  }
  persistState();
  await saveStateToBackend().catch(() => null);
  renderSettings();
  if (!silent) setTelegramStatus(t("settingsTelegramSaved"), true);
}

function setTelegramStatus(message, ok = true) {
  if (!settingsTelegramStatus) return;
  settingsTelegramStatus.textContent = message || t("settingsTelegramHelp");
  settingsTelegramStatus.classList.toggle("is-ok", Boolean(ok));
  settingsTelegramStatus.classList.toggle("is-error", !ok);
}

async function sendTelegramTestMessage() {
  if (!requirePermission(() => canEditEntity("users"))) return;
  await saveTelegramSettings({ silent: true });

  if (settingsTelegramTestBtn) settingsTelegramTestBtn.disabled = true;
  const result = await apiRequest("/api/telegram/test", {
    method: "POST",
    body: JSON.stringify({ message: buildTelegramMessage("test", "settings", { title: "Telegram test" }) })
  });
  if (settingsTelegramTestBtn) settingsTelegramTestBtn.disabled = false;

  if (!result) {
    setTelegramStatus(t("settingsTelegramNeedBackend"), false);
    return;
  }

  if (result?.ok) {
    setTelegramStatus(t("settingsTelegramTestOk"), true);
    return;
  }
  setTelegramStatus(result?.message || t("settingsTelegramTestFailed"), false);
}

function telegramActionLabel(action, viewName) {
  const labels = {
    ru: {
      created: "Создана запись",
      updated: "Обновлена запись",
      status: "Изменен статус",
      stock: "Критический остаток",
      test: "Тестовое уведомление"
    },
    uz: {
      created: "Yangi yozuv yaratildi",
      updated: "Yozuv yangilandi",
      status: "Status o'zgardi",
      stock: "Kritik zaxira",
      test: "Test bildirishnomasi"
    },
    en: {
      created: "Record created",
      updated: "Record updated",
      status: "Status changed",
      stock: "Critical stock",
      test: "Test notification"
    }
  };
  const section = t(`nav.${viewName}`);
  return `${labels[currentLanguage]?.[action] || labels.en[action] || action}: ${section === `nav.${viewName}` ? viewName : section}`;
}

function telegramLine(label, value) {
  const text = String(value ?? "").trim();
  return text ? `${label}: ${text}` : "";
}

function buildTelegramMessage(action, viewName, entity, details = "") {
  const company = getCompanySettings().companyName || "O'zMinda CMMS";
  const lines = [
    company,
    telegramActionLabel(action, viewName),
    telegramLine(t("thTitle"), getEntityTitle(viewName, entity))
  ];

  if (entity?.id) lines.push(telegramLine("ID", entity.id));

  if (viewName === "workorders" || viewName === "requests") {
    lines.push(
      telegramLine(t("thPriority"), translatePriority(entity.priority)),
      telegramLine(t("thStatus"), translateStatus(entity.status)),
      telegramLine(t("thAsset"), recordTargetName(entity)),
      telegramLine(t("thAssigned"), entity.assignedTo || entity.requester),
      telegramLine(t("thDueDate"), entity.dueDate)
    );
  }

  if (viewName === "pm") {
    lines.push(
      telegramLine(t("thAsset"), recordTargetName(entity)),
      telegramLine(t("field.repairType"), translateRepairType(entity.repairType)),
      telegramLine(t("field.frequency"), formatPmFrequency(entity)),
      telegramLine(t("nextDue"), entity.nextDue),
      telegramLine(t("owner"), entity.owner)
    );
  }

  if (viewName === "inventory") {
    lines.push(
      telegramLine(t("thSku"), entity.sku),
      telegramLine(t("thOnHand"), formatNumber(entity.onHand || 0)),
      telegramLine(t("thMinQty"), formatNumber(entity.minQty || 0)),
      telegramLine(t("thLocation"), entity.location)
    );
  }

  if (viewName === "settings") {
    lines.push(telegramLine(t("createdWhen"), new Date().toLocaleString(getCurrentLocale())));
  }

  if (details) lines.push(telegramLine(t("settingsAccessLabel"), details));

  return lines.filter(Boolean).join("\n").slice(0, 3900);
}

async function notifyTelegramEntity(action, viewName, entity, details = "") {
  const settings = getTelegramSettings();
  if (!settings.enabled || !settings.botToken || !settings.chatId || !entity) return null;

  const result = await apiRequest("/api/telegram/notify", {
    method: "POST",
    body: JSON.stringify({
      message: buildTelegramMessage(action, viewName, entity, details),
      telegram: settings
    })
  });

  if (result && !result.ok && !result.skipped) {
    console.warn("Telegram notification failed:", result.message || result);
  }
  return result;
}

async function saveStateToBackend() {
  await apiRequest("/api/state", {
    method: "PUT",
    body: JSON.stringify({ state })
  });
}

async function createManualBackup() {
  if (!requirePermission(() => canEditEntity("users"))) return;

  backupBtn.disabled = true;
  if (settingsBackupBtn) settingsBackupBtn.disabled = true;
  setButtonLabel(backupBtn, t("backupWorking"));
  setButtonLabel(settingsBackupBtn, t("backupWorking"));

  try {
    const result = await apiRequest("/api/backup", {
      method: "POST",
      body: JSON.stringify({ reason: "manual" })
    });

    if (!result?.backup?.file) {
      throw new Error("Backup was not created");
    }

    const base = activeApiBase || apiBaseCandidates[0] || window.location.origin;
    const file = result.backup.file;
    const link = document.createElement("a");
    link.href = `${base}/api/backup/download?file=${encodeURIComponent(file)}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    link.remove();
    addAuditEvent("backup", "report", { id: file, title: file });
    persistState();
    alert(`${t("backupSaved")}: ${file}`);
  } catch {
    alert(t("backupFailed"));
  } finally {
    backupBtn.disabled = false;
    if (settingsBackupBtn) settingsBackupBtn.disabled = !canEditEntity("users");
    setButtonLabel(backupBtn, t("backupButton"));
    setButtonLabel(settingsBackupBtn, t("backupButton"));
  }
}

function setButtonLabel(button, label) {
  const labelElement = button?.querySelector(".btn-label");
  if (labelElement) {
    labelElement.textContent = label;
    return;
  }
  if (button) button.textContent = label;
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function downloadTextFile(fileName, text, type = "text/plain;charset=utf-8") {
  const blob = new Blob(["\ufeff", text], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}

function recordTargetName(record) {
  if (recordObjectType(record) === "pressForm") {
    const pressForm = getPressForm(record.pressFormId);
    return pressForm ? `${pressForm.name} (${pressForm.id})` : record.pressFormId || "";
  }
  const asset = getAsset(record.assetId);
  return asset ? `${asset.name} (${asset.id})` : record.assetId || "";
}

function exportManagementCsv() {
  const rows = [
    ["section", "id", "title", "status", "priority", "object", "owner", "date", "quantity", "location", "notes"],
    ...state.assets.map((asset) => ["equipment", asset.id, asset.name, asset.health, asset.criticality, asset.category, "", asset.installDate, "", asset.location, asset.notes]),
    ...state.pressForms.map((item) => ["press_forms", item.id, item.name, item.health, "", item.model, "", item.installDate, `${item.currentCycles}/${item.cycleLimit}`, item.location, item.notes]),
    ...state.workorders.map((item) => ["daily_faults", item.id, item.title, item.status, item.priority, recordTargetName(item), item.assignedTo, item.dueDate, "", "", [item.description, item.rootCause, item.actionPlan, item.workPerformed].filter(Boolean).join(" / ")]),
    ...state.inventory.map((item) => ["inventory", item.id, item.name, item.onHand <= item.minQty ? "low_stock" : "ok", "", item.sku, "", "", item.onHand, item.location, `min: ${item.minQty}`]),
    ...state.inventory.flatMap((item) => getPartStockMoves(item).map((move) => ["stock_move", move.id, item.name, move.type, "", item.sku, move.user, move.createdAt, move.qty, item.location, `${move.before} -> ${move.after}${move.note ? ` / ${move.note}` : ""}`])),
    ...state.pm.map((item) => ["pm", item.id, item.title, "", "", recordTargetName(item), item.owner, item.nextDue, item.cycleInterval || "", "", [formatPmFrequency(item), recordObjectType(item) === "pressForm" ? translateRepairType(item.repairType) : "", checklistToTextarea(item.checklist)].filter(Boolean).join(" / ")]),
    ...(Array.isArray(state.auditLog) ? state.auditLog.map((item) => ["audit", item.id, item.title, item.action, item.viewName, item.entityId, item.user, item.createdAt, "", "", item.details]) : [])
  ];
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const fileName = `ozminda-cmms-${todayISO()}.csv`;
  downloadTextFile(fileName, csv, "text/csv;charset=utf-8");
  addAuditEvent("export", "reports", { id: fileName, title: fileName });
  persistState();
  alert(t("csvExported"));
}

function exportPrintableReport() {
  const alerts = getDashboardAlerts();
  const metrics = calculateOperationalMetrics();
  const rows = [
    [t("dailyFaultsTotal"), getDailyFaultItems().length],
    ["MTBF", `${metrics.mtbf.toFixed(1)} ${t("hours")}`],
    ["MTTR", `${metrics.mttr.toFixed(1)} ${t("hours")}`],
    ["OEE", `${(metrics.oee * 100).toFixed(1)}%`],
    [t("alertLowStock"), state.inventory.filter((item) => Number(item.onHand || 0) <= Number(item.minQty || 0)).length],
    [t("pmTitle"), state.pm.length]
  ];
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(t("reportsOverviewTitle"))}</title>
        <style>
          body{font-family:Arial,sans-serif;margin:28px;color:#142033}
          h1{margin:0 0 8px;font-size:24px}
          table{width:100%;border-collapse:collapse;margin-top:18px}
          th,td{border:1px solid #dfe6ed;padding:8px;text-align:left}
          th{background:#f4f7fa}
          .alert{margin:8px 0;padding:8px;border-left:4px solid #0db5a3;background:#f8fbfc}
        </style>
      </head>
      <body>
        <h1>${escapeHtml(t("reportsOverviewTitle"))}</h1>
        <p>${escapeHtml(new Date().toLocaleString(getCurrentLocale()))}</p>
        <table>
          <tbody>${rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</tbody>
        </table>
        <h2>${escapeHtml(t("dashboardAlertsTitle"))}</h2>
        ${alerts.map((alert) => `<div class="alert"><strong>${escapeHtml(alert.title)}</strong><br>${escapeHtml(alert.text)}<br><small>${escapeHtml(alert.meta || "")}</small></div>`).join("") || `<p>${escapeHtml(t("noAlerts"))}</p>`}
      </body>
    </html>
  `;
  const report = window.open("", "_blank");
  if (!report) return;
  report.document.write(html);
  report.document.close();
  report.focus();
  report.print();
  addAuditEvent("export", "reports", { id: "print-report", title: t("reportsOverviewTitle") });
  persistState();
}

function printAssetQrLabels() {
  if (!state.assets.length) {
    alert(t("assetQrPrintEmpty"));
    return;
  }

  const companyName = state.settings?.companyName || "O'zMinda";
  const labels = [...state.assets]
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")))
    .map((asset) => {
      const href = getEntityDeepLink("asset", asset.id);
      const subtitle = [asset.model, asset.serialNumber].filter(Boolean).join(" / ");
      return `
        <article class="qr-label">
          <div class="qr-box">${renderQrSvg(href)}</div>
          <div class="qr-copy">
            <p>${escapeHtml(companyName)}</p>
            <h2>${escapeHtml(asset.name)}</h2>
            <strong>${escapeHtml(asset.id)}</strong>
            <span>${escapeHtml(subtitle || asset.category || "-")}</span>
            <span>${escapeHtml(asset.location || "-")}</span>
            <small>${escapeHtml(t("assetQrScanHint"))}</small>
          </div>
        </article>
      `;
    }).join("");
  const html = `
    <!doctype html>
    <html lang="${escapeHtml(currentLanguage)}">
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(t("assetQrSheetTitle"))}</title>
        <style>
          @page{size:A4;margin:8mm}
          *{box-sizing:border-box}
          body{margin:0;color:#102033;background:#fff;font-family:Arial,sans-serif}
          .sheet-head{display:flex;justify-content:space-between;gap:12px;align-items:end;margin:0 0 5mm}
          .sheet-head h1{margin:0 0 1mm;font-size:18px}
          .sheet-head p{margin:0;color:#53657a;font-size:11px}
          .sheet-head strong{color:#0a5560;font-size:12px}
          .qr-labels{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4mm}
          .qr-label{display:grid;grid-template-columns:35mm minmax(0,1fr);gap:3mm;align-items:center;min-height:43mm;padding:3mm;border:0.35mm solid #bfcfda;border-radius:2mm;break-inside:avoid;overflow:hidden}
          .qr-box{display:grid;place-items:center;width:35mm;height:35mm;border:0.3mm solid #dbe6ed;border-radius:1.5mm;background:#fff}
          .qr-code,.qr-code-fallback{display:block;width:33mm;height:33mm;border:0;box-shadow:none}
          .qr-code-fallback{display:grid;place-items:center;color:#fff;background:#102542;font-size:11px;font-weight:700}
          .qr-copy{min-width:0;display:grid;gap:1.1mm;align-content:center}
          .qr-copy p,.qr-copy h2{margin:0}
          .qr-copy p{color:#087464;font-size:8px;font-weight:700;text-transform:uppercase}
          .qr-copy h2{overflow:hidden;color:#102033;font-size:12px;line-height:1.15}
          .qr-copy strong{width:fit-content;padding:1mm 1.5mm;border-radius:1mm;color:#08384c;background:#e5f7f4;font-size:10px}
          .qr-copy span{overflow:hidden;color:#31465b;font-size:9px;line-height:1.2}
          .qr-copy small{margin-top:0.5mm;color:#607086;font-size:8px;font-weight:700}
          @media print{.sheet-head{margin-bottom:4mm}}
        </style>
      </head>
      <body>
        <header class="sheet-head">
          <div>
            <h1>${escapeHtml(t("assetQrSheetTitle"))}</h1>
            <p>${escapeHtml(t("assetQrSheetSubtitle"))}</p>
          </div>
          <strong>${escapeHtml(companyName)}</strong>
        </header>
        <main class="qr-labels">${labels}</main>
      </body>
    </html>
  `;
  const sheet = window.open("", "_blank");
  if (!sheet) return;
  sheet.document.write(html);
  sheet.document.close();
  sheet.focus();
  sheet.print();
  addAuditEvent("export", "assets", { id: "print-asset-qr", title: t("assetQrSheetTitle") });
  persistState();
}

function t(key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[currentLanguage]) || key;
}

function translateStatus(status) {
  return t(`statuses.${status}`);
}

function translatePriority(priority) {
  return t(`priorities.${priority}`);
}

function translateRepairType(repairType) {
  const value = repairType || "Preventive";
  const translated = t(`repairTypes.${value}`);
  return translated === `repairTypes.${value}` ? value : translated;
}

function formatPmFrequency(item) {
  if (recordObjectType(item) === "pressForm") {
    const cycles = Number(item.cycleInterval || parseCycleInterval(item.frequency) || 0);
    return cycles ? `${formatNumber(cycles)} ${t("cyclesUnit")}` : item.frequency || "-";
  }
  return item.frequency || "-";
}

function getPmChecklistProgress(itemOrChecklist) {
  const checklist = Array.isArray(itemOrChecklist)
    ? normalizeChecklistItems(itemOrChecklist)
    : normalizeChecklistItems(itemOrChecklist?.checklist);
  const doneCount = checklist.filter((step) => step.done).length;
  const percent = checklist.length ? Math.round((doneCount / checklist.length) * 100) : 0;
  return { checklist, doneCount, total: checklist.length, percent };
}

function renderChecklistResponseOptions(value) {
  const options = [
    ["", t("checklistResponseNone")],
    ["OK", t("checklistResponseOK")],
    ["Issue", t("checklistResponseIssue")],
    ["NA", t("checklistResponseNA")]
  ];
  return options.map(([optionValue, label]) => `
    <option value="${optionValue}" ${String(value || "") === optionValue ? "selected" : ""}>${label}</option>
  `).join("");
}

function renderPmChecklist(item) {
  const { checklist, doneCount, total, percent } = getPmChecklistProgress(item);
  const canToggle = canEditEntity("pm");
  const usedPartsMarkup = renderPmUsedPartsSheet(item);
  if (!checklist.length) {
    return `
      <div class="pm-checklist-cell pm-checklist-empty" data-label="${t("field.checklist")}">
        ${t("checklistEmpty")}
        ${usedPartsMarkup}
      </div>
    `;
  }

  return `
    <div class="pm-checklist-cell" data-label="${t("field.checklist")}">
      <div class="pm-checklist-head">
        <span>${t("field.checklist")}</span>
        <strong>${doneCount}/${total} ${t("checklistDone")} · ${percent}%</strong>
      </div>
      <div class="pm-checklist-progress"><span style="width:${percent}%"></span></div>
      <div class="pm-checklist-sheet-wrap">
        <table class="pm-checklist-sheet">
          <thead>
            <tr>
              <th>${t("checklistColumnNo")}</th>
              <th>${t("checklistColumnDone")}</th>
              <th>${t("checklistColumnTask")}</th>
              <th>${t("checklistColumnResponse")}</th>
              <th>${t("checklistColumnComment")}</th>
              <th>${t("checklistColumnStatus")}</th>
            </tr>
          </thead>
          <tbody>
            ${checklist.map((step, index) => `
              <tr class="${step.done ? "done" : ""} ${step.response === "Issue" ? "attention" : ""}">
                <td class="pm-checklist-row-number">${index + 1}</td>
                <td class="pm-checklist-checkbox-cell">
                  <input type="checkbox" data-action="toggle-pm-checklist" data-pm-id="${escapeHtml(item.id)}" data-check-id="${escapeHtml(step.id)}" ${step.done ? "checked" : ""} ${canToggle ? "" : "disabled"}>
                </td>
                <td class="pm-checklist-task-cell">${escapeHtml(step.text)}</td>
                <td>
                  <select class="pm-checklist-response" data-action="update-pm-checklist-response" data-pm-id="${escapeHtml(item.id)}" data-check-id="${escapeHtml(step.id)}" ${canToggle ? "" : "disabled"}>
                    ${renderChecklistResponseOptions(step.response)}
                  </select>
                </td>
                <td>
                  <input class="pm-checklist-comment" type="text" value="${escapeHtml(step.comment)}" placeholder="${t("checklistCommentPlaceholder")}" data-action="update-pm-checklist-comment" data-pm-id="${escapeHtml(item.id)}" data-check-id="${escapeHtml(step.id)}" ${canToggle ? "" : "disabled"}>
                </td>
                <td><span class="pm-checklist-status ${step.done ? "done" : "open"}">${step.done ? t("checklistStatusDone") : t("checklistStatusOpen")}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${usedPartsMarkup}
    </div>
  `;
}

function renderPmUsedPartsSheet(item) {
  const usedParts = normalizeUsedParts(item.usedParts);
  if (!usedParts.length) return "";
  const totalQty = usedParts.reduce((sum, part) => sum + Number(part.qty || 0), 0);
  return `
    <div class="pm-used-parts-block">
      <div class="pm-checklist-head">
        <span>${t("field.usedParts")}</span>
        <strong>${formatNumber(totalQty)} ${t("pcs")}</strong>
      </div>
      <div class="pm-checklist-sheet-wrap pm-used-parts-sheet-wrap">
        <table class="pm-checklist-sheet pm-used-parts-sheet">
          <thead>
            <tr>
              <th>${t("checklistColumnNo")}</th>
              <th>${t("thPart")}</th>
              <th>${t("thSku")}</th>
              <th>${t("pcs")}</th>
            </tr>
          </thead>
          <tbody>
            ${usedParts.map((usedPart, index) => {
              const part = getInventoryPart(usedPart.inventoryId);
              const name = part?.name || usedPart.name || usedPart.inventoryId;
              const sku = part?.sku || usedPart.sku || "-";
              return `
                <tr>
                  <td class="pm-checklist-row-number">${index + 1}</td>
                  <td class="pm-used-part-name">${escapeHtml(name)}</td>
                  <td>${escapeHtml(sku)}</td>
                  <td><strong>${formatNumber(usedPart.qty)}</strong></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function togglePmChecklistStep(pmId, checkId, done) {
  if (!requirePermission(() => canEditEntity("pm"))) return;
  updatePmChecklistStep(pmId, checkId, { done: Boolean(done) });
}

function updatePmChecklistStep(pmId, checkId, patch = {}) {
  if (!requirePermission(() => canEditEntity("pm"))) return;
  const item = state.pm.find((pmItem) => String(pmItem.id) === String(pmId));
  if (!item) return;
  const checklist = normalizeChecklistItems(item.checklist);
  const step = checklist.find((checkItem) => String(checkItem.id) === String(checkId));
  if (!step) return;

  if (Object.prototype.hasOwnProperty.call(patch, "done")) {
    step.done = Boolean(patch.done);
    if (step.done && !step.response) step.response = "OK";
  }
  if (Object.prototype.hasOwnProperty.call(patch, "response")) {
    step.response = ["OK", "Issue", "NA"].includes(patch.response) ? patch.response : "";
    if (step.response === "OK" || step.response === "NA") step.done = true;
    if (step.response === "Issue") step.done = false;
  }
  if (Object.prototype.hasOwnProperty.call(patch, "comment")) {
    step.comment = String(patch.comment || "").trim();
  }

  item.checklist = checklist;
  addAuditEvent("checklist", "pm", item, `${step.done ? "done" : "open"}: ${step.text}`);
  persistState();
  renderAll();
}

function translateRole(role) {
  const normalizedRole = normalizeRoleKey(role);
  return t(`roles.${normalizedRole}`) === `roles.${normalizedRole}` ? normalizedRole : t(`roles.${normalizedRole}`);
}

function renderEmptyState(title, text = "") {
  return `
    <div class="empty-state">
      <span class="empty-state-mark">i</span>
      <strong>${title}</strong>
      ${text ? `<p>${text}</p>` : ""}
    </div>
  `;
}

function renderTableEmptyState(colspan, title, text = "") {
  return `<tr class="empty-row"><td colspan="${colspan}">${renderEmptyState(title, text)}</td></tr>`;
}

function setPanelCount(elementId, visibleCount, totalCount = visibleCount) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.textContent = Number(visibleCount) === Number(totalCount)
    ? formatNumber(visibleCount)
    : `${formatNumber(visibleCount)} / ${formatNumber(totalCount)}`;
}

function getEntityTitle(viewName, entity) {
  if (!entity) return "-";
  return entity.title || entity.name || entity.sku || entity.reason || entity.id || "-";
}

function addAuditEvent(action, viewName, entity, details = "") {
  if (!entity) return;
  if (!Array.isArray(state.auditLog)) state.auditLog = [];
  const user = getCurrentUser();
  state.auditLog.unshift({
    id: createRecordId("AUD"),
    action,
    viewName,
    entityId: entity.id || "",
    title: getEntityTitle(viewName, entity),
    details,
    user: user?.name || t("sessionGuest"),
    role: user?.role || "",
    createdAt: new Date().toISOString()
  });
  state.auditLog = state.auditLog.slice(0, 100);
}

function getActiveAdminUsers() {
  return state.users.filter((user) =>
    normalizeRoleKey(user.role) === "Supervisor" &&
    (user.userStatus || "Active") === "Active"
  );
}

function validateUserForm(formData, editId = "") {
  const username = String(formData.get("username") || "").trim().toLowerCase();
  const role = normalizeRoleKey(formData.get("role"));
  const status = formData.get("userStatus") || "Active";
  const duplicateUser = state.users.find((user) =>
    String(user.id) !== String(editId || "") &&
    String(user.username || "").trim().toLowerCase() === username
  );

  if (duplicateUser) {
    alert(t("userDuplicateWarning"));
    return false;
  }

  const existingUser = editId
    ? state.users.find((user) => String(user.id) === String(editId))
    : null;
  if (
    existingUser &&
    normalizeRoleKey(existingUser.role) === "Supervisor" &&
    (existingUser.userStatus || "Active") === "Active" &&
    (role !== "Supervisor" || status !== "Active") &&
    getActiveAdminUsers().length <= 1
  ) {
    alert(t("userLastAdminWarning"));
    return false;
  }

  return true;
}

function formatAuditAction(action) {
  const labels = {
    created: { ru: "Создано", uz: "Yaratildi", en: "Created" },
    updated: { ru: "Изменено", uz: "O'zgartirildi", en: "Updated" },
    deleted: { ru: "Удалено", uz: "O'chirildi", en: "Deleted" },
    status: { ru: "Статус", uz: "Holat", en: "Status" },
    stock: { ru: "Склад", uz: "Ombor", en: "Stock" },
    export: { ru: "Экспорт", uz: "Eksport", en: "Export" },
    backup: { ru: "Backup", uz: "Backup", en: "Backup" },
    assigned: { ru: "Назначено", uz: "Biriktirildi", en: "Assigned" },
    comment: { ru: "Комментарий", uz: "Izoh", en: "Comment" }
  };
  return labels[action]?.[currentLanguage] || action;
}

function formatAuditViewName(viewName) {
  const map = {
    report: "reports",
    failure: "analytics",
    production: "analytics"
  };
  const key = map[viewName] || viewName;
  const label = t(`nav.${key}`);
  return label === `nav.${key}` ? key : label;
}

function updateViewContextChip() {
  const chip = document.getElementById("view-context-chip");
  if (!chip) return;

  if (currentView === "dashboard") {
    chip.textContent = dashboardObjectType === "pressForm" ? t("contextPressForms") : t("contextDashboard");
    return;
  }

  const activeGroup = navGroups[activeNavGroup];
  if (activeGroup?.views.includes(currentView)) {
    const parentView = activeNavGroup === "pressForms" ? "pressForms" : "assets";
    const parentLabel = t(`nav.${parentView}`);
    const viewLabel = t(`nav.${currentView}`);
    chip.textContent = parentView === currentView ? parentLabel : `${parentLabel} / ${viewLabel}`;
    return;
  }

  chip.textContent = t(`nav.${currentView}`);
}

function getCollection(viewName) {
  const map = {
    workorders: state.workorders,
    requests: state.requests,
    assets: state.assets,
    pressForms: state.pressForms,
    inventory: state.inventory,
    pm: state.pm,
    users: state.users,
    report: state.generatedReports,
    failure: state.failureEvents,
    production: state.productionRuns
  };
  return map[viewName] || [];
}

function buildPmEntityFromForm(formData, id) {
  const existingItem = state.pm.find((item) => String(item.id) === String(id));
  const objectType = formData.get("objectType") || currentObjectType();
  const cycleInterval = Math.max(0, Number(formData.get("cycleInterval")) || 0);
  const repairType = objectType === "pressForm" ? formData.get("repairType") || "Preventive" : "";
  const frequency = objectType === "pressForm" && cycleInterval
    ? `${cycleInterval} cycles`
    : formData.get("frequency");
  const checklist = parseChecklistField(formData.get("checklist"), existingItem?.checklist);

  return {
    id,
    title: formData.get("title"),
    objectType,
    assetId: objectType === "pressForm" ? "" : formData.get("assetId"),
    pressFormId: objectType === "pressForm" ? formData.get("pressFormId") || "" : "",
    frequency,
    repairType,
    cycleInterval: objectType === "pressForm" ? cycleInterval : 0,
    nextDue: formData.get("nextDue"),
    owner: formData.get("owner"),
    checklist: checklist.length ? checklist : normalizeChecklistItems(getDefaultPmChecklistTexts(objectType, repairType)),
    usedParts: parseUsedPartsField(formData.get("usedParts"))
  };
}

function buildEntityFromForm(viewName, formData, existingId) {
  if (viewName === "workorders") {
    const objectType = formData.get("objectType") || currentObjectType();
    return {
      id: existingId,
      title: formData.get("title"),
      priority: formData.get("priority"),
      status: formData.get("status"),
      objectType,
      assetId: objectType === "pressForm" ? "" : formData.get("assetId"),
      pressFormId: objectType === "pressForm" ? formData.get("pressFormId") : "",
      assignedTo: formData.get("assignedTo"),
      dueDate: formData.get("dueDate"),
      faultStart: formData.get("faultStart"),
      faultEnd: formData.get("faultEnd"),
      rootCause: formData.get("rootCause"),
      actionPlan: formData.get("actionPlan"),
      workPerformed: formData.get("workPerformed"),
      usedParts: parseUsedPartsField(formData.get("usedParts")),
      repairPhotos: parseImagesField(formData.get("repairPhotos")),
      description: formData.get("description"),
      completedBy: formData.get("completedBy"),
      comments: state.workorders.find((item) => String(item.id) === String(existingId))?.comments || []
    };
  }
  if (viewName === "requests") {
    return {
      id: existingId,
      title: formData.get("title"),
      requester: formData.get("requester"),
      assetId: formData.get("assetId"),
      priority: formData.get("priority"),
      status: formData.get("status"),
      createdAt: formData.get("createdAt"),
      note: formData.get("note")
    };
  }
  if (viewName === "assets") {
    return {
      id: existingId,
      name: formData.get("name"),
      category: formData.get("category"),
      manufacturer: formData.get("manufacturer"),
      model: formData.get("model"),
      serialNumber: formData.get("serialNumber"),
      location: formData.get("location"),
      installDate: formData.get("installDate"),
      health: formData.get("health"),
      criticality: formData.get("criticality"),
      notes: formData.get("notes"),
      images: parseImagesField(formData.get("images")),
      attachments: parseAttachmentsField(formData.get("attachments"))
    };
  }
  if (viewName === "pressForms") {
    return {
      id: existingId,
      name: formData.get("name"),
      model: formData.get("model"),
      serialNumber: formData.get("serialNumber"),
      cavityCount: Number(formData.get("cavityCount")),
      currentCycles: Number(formData.get("currentCycles")),
      cycleLimit: Number(formData.get("cycleLimit")),
      location: formData.get("location"),
      health: formData.get("health"),
      installDate: formData.get("installDate"),
      notes: formData.get("notes"),
      pressFormImages: parseImagesField(formData.get("pressFormImages"))
    };
  }
  if (viewName === "inventory") {
    return {
      id: existingId,
      name: formData.get("name"),
      sku: formData.get("sku"),
      onHand: Number(formData.get("onHand")),
      minQty: Number(formData.get("minQty")),
      location: formData.get("location"),
      supplier: formData.get("supplier"),
      unitCost: Number(formData.get("unitCost") || 0),
      reorderUrl: formData.get("reorderUrl"),
      criticalPart: formData.get("criticalPart") || "Standard",
      objectType: formData.get("objectType") || currentObjectType(),
      stockMoves: state.inventory.find((item) => String(item.id) === String(existingId))?.stockMoves || [],
      partImages: parseImagesField(formData.get("partImages"))
    };
  }
  if (viewName === "pm") {
    return buildPmEntityFromForm(formData, existingId);
  }
  if (viewName === "users") {
    return {
      id: existingId,
      name: String(formData.get("name") || "").trim(),
      role: normalizeRoleKey(formData.get("role")),
      username: String(formData.get("username") || "").trim().toLowerCase(),
      password: formData.get("password"),
      userStatus: formData.get("userStatus"),
      team: String(formData.get("team") || "").trim(),
      workload: Number(formData.get("workload")),
      shift: formData.get("shift")
    };
  }
  if (viewName === "report") {
    const existing = state.generatedReports.find((item) => String(item.id) === String(existingId));
    return {
      id: existingId,
      title: formData.get("title"),
      text: formData.get("description"),
      createdAt: existing?.createdAt || new Date().toISOString().slice(0, 10)
    };
  }
  if (viewName === "failure") {
    return {
      id: existingId,
      assetId: formData.get("assetId"),
      failureStart: formData.get("failureStart"),
      repairEnd: formData.get("repairEnd"),
      reason: formData.get("reason")
    };
  }
  if (viewName === "production") {
    return {
      id: existingId,
      assetId: formData.get("assetId"),
      plannedMinutes: Number(formData.get("plannedMinutes")),
      downtimeMinutes: Number(formData.get("downtimeMinutes")),
      idealCycleTimeSeconds: Number(formData.get("idealCycleTimeSeconds")),
      totalCount: Number(formData.get("totalCount")),
      goodCount: Number(formData.get("goodCount"))
    };
  }
  return null;
}

function updateEntity(viewName, id, formData) {
  const collection = getCollection(viewName);
  const index = collection.findIndex((item) => String(item.id) === String(id));
  if (index === -1) return;
  const updated = buildEntityFromForm(viewName, formData, collection[index].id);
  if (!updated) return;
  collection[index] = updated;
}

function deleteEntity(viewName, id) {
  if (!requirePermission(() => canEditEntity(viewName))) return;
  if (viewName === "users" && !canDeleteUser(id)) return;
  const collection = getCollection(viewName);
  const index = collection.findIndex((item) => String(item.id) === String(id));
  if (index === -1) return;
  if (viewName === "workorders" || viewName === "pm") {
    applyUsedPartsInventoryDelta(normalizeUsedParts(collection[index].usedParts), [], viewName);
  }
  addAuditEvent("deleted", viewName, collection[index]);
  collection.splice(index, 1);
  if (viewName === "pm") syncPmUsedPartMarkers();
  persistState();
  renderAll();
}

function canDeleteUser(id, showAlert = true) {
  const user = state.users.find((item) => String(item.id) === String(id));
  if (!user) return false;
  if (String(id) === String(currentUserId)) {
    if (showAlert) alert(t("userDeleteSelfWarning"));
    return false;
  }
  if (
    normalizeRoleKey(user.role) === "Supervisor" &&
    (user.userStatus || "Active") === "Active" &&
    getActiveAdminUsers().length <= 1
  ) {
    if (showAlert) alert(t("userLastAdminWarning"));
    return false;
  }
  return true;
}

function renderCrudActions(viewName, id) {
  if (!canEditEntity(viewName)) return "";
  return `
    <div class="row-actions">
      <button
        class="ghost-btn icon-btn"
        type="button"
        title="${t("editBtn")}"
        aria-label="${t("editBtn")}"
        data-action="edit-entity"
        data-entity="${viewName}"
        data-id="${id}"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20h4l10-10-4-4L4 16v4zm12.7-11.3 1.6-1.6a1 1 0 0 0 0-1.4l-1.3-1.3a1 1 0 0 0-1.4 0L14 6l2.7 2.7z"/>
        </svg>
      </button>
      <button
        class="ghost-btn icon-btn danger-btn"
        type="button"
        title="${t("deleteBtn")}"
        aria-label="${t("deleteBtn")}"
        data-action="delete-entity"
        data-entity="${viewName}"
        data-id="${id}"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM7 9h2v8H7V9zm1 11h8a2 2 0 0 0 2-2V8H6v10a2 2 0 0 0 2 2z"/>
        </svg>
      </button>
    </div>
  `;
}

function bindCrudButtons(root = document) {
  root.querySelectorAll('[data-action="edit-entity"]').forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => openEditModal(button.dataset.entity, button.dataset.id));
  });
  root.querySelectorAll('[data-action="delete-entity"]').forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => deleteEntity(button.dataset.entity, button.dataset.id));
  });
  root.querySelectorAll('[data-action="stock-move"]').forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => openStockMoveModal(button.dataset.id));
  });
  root.querySelectorAll('[data-action="open-asset-detail"]').forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      selectedAssetId = button.dataset.id;
      syncSelectedAssetRow();
      openAssetDetailModal(button.dataset.id);
    });
  });
  root.querySelectorAll('[data-action="open-press-form-detail"]').forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";
    button.addEventListener("click", () => openPressFormDetailModal(button.dataset.id));
  });
  root.querySelectorAll('[data-action="select-asset-row"]').forEach((row) => {
    if (row.dataset.bound === "true") return;
    row.dataset.bound = "true";
    row.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      selectedAssetId = row.dataset.id;
      syncSelectedAssetRow();
      renderAssetDetail();
    });
  });
}

function syncSelectedAssetRow() {
  document.querySelectorAll(".equipment-table-row").forEach((row) => {
    row.classList.toggle("equipment-table-row-active", row.dataset.id === selectedAssetId);
  });
}

function actionSupported(viewName) {
  return ["workorders", "requests", "assets", "pressForms", "inventory", "criticalParts", "pm", "users", "reports", "analytics"].includes(viewName);
}

function handlePrimaryAction() {
  if (!getCurrentUser()) return;
  if (currentView === "reports") {
    if (!requirePermission(() => canCreateEntity("report"))) return;
    openEntityModal("report");
    return;
  }

  if (currentView === "analytics") {
    if (!requirePermission(() => canCreateEntity("failure"))) return;
    openEntityModal("failure");
    return;
  }

  if (!actionSupported(currentView) || currentView === "dashboard") {
    if (!requirePermission(() => canCreateEntity("workorders"))) return;
    openEntityModal("workorders");
    return;
  }

  if (currentView === "criticalParts") {
    if (!requirePermission(() => canCreateEntity("inventory"))) return;
    openCriticalPartModal();
    return;
  }

  if (!requirePermission(() => canCreateEntity(currentView))) return;
  openEntityModal(currentView);
}

function openCriticalPartModal() {
  openEntityModal("inventory");
  modalTitle.textContent = t("actions.criticalParts");
}

function openEntityModal(viewName) {
  if (!requirePermission(() => canCreateEntity(viewName))) return;
  currentModalView = viewName;
  currentEditId = null;
  renderModalForm(viewName);
  modal.showModal();
}

function openEditModal(viewName, id) {
  if (!requirePermission(() => canEditEntity(viewName))) return;
  currentModalView = viewName;
  currentEditId = id;
  renderModalForm(viewName);
  modal.showModal();
}

function renderModalForm(viewName) {
  const config = formConfigs[viewName];
  const existingItem = currentEditId ? getCollection(viewName).find((item) => String(item.id) === String(currentEditId)) : null;
  modalTitle.textContent = t(`modal.${viewName}`);
  modalSubmit.textContent = currentEditId ? t("editBtn") : t(`save.${viewName}`);
  modalFields.innerHTML = getModalFields(viewName, existingItem, config)
    .map((field) => renderField(field, existingItem))
    .join("");
}

function getModalFields(viewName, existingItem, config) {
  if (viewName !== "pm") return config.fields;
  const objectType = existingItem ? recordObjectType(existingItem) : currentObjectType();
  if (objectType !== "pressForm") return config.fields;

  return [
    { name: "objectType", type: "hidden", value: "pressForm" },
    { name: "pressFormId", type: "hidden", value: existingItem?.pressFormId || "" },
    { name: "title", type: "text", required: true },
    { name: "repairType", type: "select", options: ["Inspection", "Preventive", "CurrentRepair", "MajorRepair", "Cleaning"], required: true, value: "Preventive" },
    { name: "cycleInterval", type: "number", min: 1, step: 1, required: true },
    { name: "nextDue", type: "date", required: true },
    { name: "owner", type: "text", required: true },
    { name: "checklist", type: "textarea", rows: 5 },
    { name: "usedParts", type: "parts-usage" }
  ];
}

function renderField(field, existingItem) {
  const label = t(`field.${field.name === "assetId" ? "asset" : field.name}`);
  const placeholder = t(`placeholder.${field.name}`);
  const required = field.required ? "required" : "";
  const existingValue = existingItem?.[field.name];
  const defaultValue = field.name === "criticalPart" && !existingItem && currentView === "criticalParts"
    ? "Critical"
    : field.defaultNow
      ? nowLocalDateTime()
      : field.value;
  const value = field.name === "checklist"
    ? checklistToTextarea(
        normalizeChecklistItems(existingValue).length
          ? existingValue
          : getDefaultPmChecklistTexts(recordObjectType(existingItem || { objectType: currentObjectType() }), existingItem?.repairType || "Preventive")
      )
    : existingValue ?? defaultValue ?? "";

  if (field.type === "hidden") {
    return `<input type="hidden" name="${field.name}" value="${value}">`;
  }

  if (field.type === "textarea") {
    const labelClass = field.name === "checklist" ? ' class="checklist-field"' : "";
    return `
      <label${labelClass}>
        <span>${label}</span>
        <textarea name="${field.name}" rows="${field.rows || 4}" placeholder="${placeholder || ""}" ${required}>${value || ""}</textarea>
      </label>
    `;
  }

  if (field.type === "select") {
    const options = field.options.map((option) => `
      <option value="${option}" ${(field.name === "role" ? normalizeRoleKey(value) : String(value)) === String(option) ? "selected" : ""}>
        ${field.name === "priority"
          ? translatePriority(option)
          : field.name === "criticalPart"
            ? t(`criticalPartOptions.${option}`)
            : field.name === "role"
              ? translateRole(option)
              : field.name === "repairType"
                ? translateRepairType(option)
                : translateStatus(option)}
      </option>
    `).join("");

    return `
      <label>
        <span>${label}</span>
        <select name="${field.name}" ${required}>${options}</select>
      </label>
    `;
  }

  if (field.type === "asset-select") {
    const options = state.assets.map((asset) => `<option value="${asset.id}" ${String(value) === String(asset.id) ? "selected" : ""}>${formatAssetOption(asset)}</option>`).join("");
    return `
      <label>
        <span>${label}</span>
        <select name="${field.name}" ${required}>${options}</select>
      </label>
    `;
  }

  if (field.type === "maintenance-target") {
    const objectType = recordObjectType(existingItem || { objectType: currentObjectType() });
    const targetName = objectType === "pressForm" ? "pressFormId" : "assetId";
    const targetValue = existingItem ? getRecordTargetId(existingItem) : "";
    const options = objectType === "pressForm"
      ? state.pressForms.map((item) => `<option value="${item.id}" ${String(targetValue) === String(item.id) ? "selected" : ""}>${formatPressFormOption(item)}</option>`).join("")
      : state.assets.map((asset) => `<option value="${asset.id}" ${String(targetValue) === String(asset.id) ? "selected" : ""}>${formatAssetOption(asset)}</option>`).join("");

    return `
      <label>
        <span>${t("field.targetObject")}</span>
        <input type="hidden" name="objectType" value="${objectType}">
        <select name="${targetName}" ${required}>${options}</select>
      </label>
    `;
  }

  if (field.type === "parts-usage") {
    const usedParts = aggregateUsedParts(existingItem?.usedParts || []);
    const objectType = recordObjectType(existingItem || { objectType: currentObjectType() });
    const parts = state.inventory.filter((part) => recordObjectType(part) === objectType).map((part) => {
      const qty = usedParts.get(part.id) || 0;
      const image = normalizeInventoryImages(part)[0];
      return `
        <label class="part-usage-row">
          <input type="checkbox" name="usedPartIds" value="${part.id}" ${qty > 0 ? "checked" : ""}>
          <span class="part-usage-photo">
            ${image ? `<img src="${image}" alt="${part.name}">` : part.name.slice(0, 1)}
          </span>
          <span class="part-usage-copy">
            <strong>${part.name}</strong>
            <small>${part.sku} · ${t("thOnHand")}: ${part.onHand}</small>
          </span>
          <input class="part-usage-qty" type="number" name="usedPartQty__${part.id}" min="0" step="1" value="${qty || ""}" placeholder="0">
        </label>
      `;
    }).join("");

    return `
      <div class="parts-usage-field">
        <span>${label}</span>
        <div class="parts-usage-list">
          ${parts || `<div class="file-help">${t("inventoryNotFound")}</div>`}
        </div>
        <small class="file-help">${t("usedPartsHelp")}</small>
      </div>
    `;
  }

  if (field.type === "file") {
    const isImageField = (field.accept || "image/*").startsWith("image/");
    const capture = isImageField ? 'capture="environment"' : "";
    const imageItems = field.name === "images"
      ? normalizeAssetImages(existingItem)
      : field.name === "partImages"
        ? normalizeInventoryImages(existingItem)
        : field.name === "repairPhotos"
          ? normalizeWorkorderPhotos(existingItem)
          : field.name === "pressFormImages"
            ? normalizePressFormImages(existingItem)
        : [];
    const attachmentItems = field.name === "attachments" ? normalizeAssetAttachments(existingItem) : [];
    const preview = imageItems.length
      ? `<div class="file-preview-grid">${imageItems.map((src, index) => `<div class="file-preview"><img src="${src}" alt="${label} ${index + 1}"></div>`).join("")}</div>`
      : attachmentItems.length
        ? `<div class="attachment-list compact">${attachmentItems.map((item) => `<span class="attachment-chip">${item.name}</span>`).join("")}</div>`
        : "";
    return `
      <label>
        <span>${label}</span>
        ${preview}
        <input type="file" name="${field.name}" accept="${field.accept || "image/*"}" ${field.multiple ? "multiple" : ""} ${capture}>
        <small class="file-help">${t(field.helpKey || "fileFieldHelp")}</small>
      </label>
    `;
  }

  const min = field.min !== undefined ? `min="${field.min}"` : "";
  const step = field.step !== undefined ? `step="${field.step}"` : "";
  return `
    <label>
      <span>${label}</span>
      <input type="${field.type}" name="${field.name}" placeholder="${placeholder || ""}" value="${value}" ${min} ${step} ${required}>
    </label>
  `;
}

function createReportSnapshot() {
  const activeOrders = state.workorders.filter((item) => !isWorkorderComplete(item.status)).length;
  const lowStockCount = state.inventory.filter((item) => item.onHand <= item.minQty).length;
  const { mtbf, mttr, oee } = calculateOperationalMetrics();
  const targets = getKpiTargets();
  state.generatedReports.unshift({
    id: `RPT-${Date.now()}`,
    title: `${t("brandedReportPrefix")} - ${t("snapshot")} ${new Date().toLocaleDateString(getCurrentLocale())}`,
    text: `${t("generatedReportText")} ${t("generatedReportActiveWo")}: ${activeOrders}, ${t("generatedReportLowStock")}: ${lowStockCount}, MTBF: ${mtbf.toFixed(1)} / ${targets.mtbfHours} ${t("hours")}, MTTR: ${mttr.toFixed(1)} / ${targets.mttrHours} ${t("hours")}, OEE: ${(oee * 100).toFixed(1)} / ${targets.oeePercent}%.`,
    createdAt: new Date().toISOString().slice(0, 10)
  });
  addAuditEvent("created", "report", state.generatedReports[0]);
  persistState();
  renderAll();
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");
  languageSwitcher.value = currentLanguage;
  if (settingsLanguageSwitcher) settingsLanguageSwitcher.value = currentLanguage;

  staticLabels.forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  navLinks.forEach((button) => {
    const label = button.querySelector(".nav-label") || button.querySelector("span:last-child") || button;
    const key = button.dataset.navLabel || `nav.${button.dataset.view}`;
    if (label) {
      label.textContent = t(key);
    }
  });

  const dashboardTypeSwitch = document.querySelector(".dashboard-type-switch");
  if (dashboardTypeSwitch) dashboardTypeSwitch.setAttribute("aria-label", t("dashboardType.label"));
  dashboardTypeButtons.forEach((button) => {
    const key = button.dataset.dashboardType === "pressForm" ? "dashboardType.pressForms" : "dashboardType.assets";
    button.textContent = t(key);
  });

  [
    ["status-flow-chart", "dashboardChartEyebrow", "statusFlowTitle"],
    ["priority-donut-chart", "dashboardPriorityEyebrow", "priorityFaultMixTitle"]
  ].forEach(([chartId, eyebrowKey, titleKey]) => {
    const panel = document.getElementById(chartId)?.closest(".panel");
    if (!panel) return;
    const eyebrow = panel.querySelector(".panel-head .eyebrow");
    const title = panel.querySelector(".panel-head h3");
    if (eyebrow) eyebrow.textContent = t(eyebrowKey);
    if (title) title.textContent = t(titleKey);
  });

  searchInput.placeholder = t("searchPlaceholder");
  [...statusFilter.options].forEach((option) => {
    option.textContent = option.value === "all" ? t("allStatuses") : translateStatus(option.value);
  });
  [...priorityFilter.options].forEach((option) => {
    option.textContent = option.value === "all" ? t("allPriorities") : translatePriority(option.value);
  });
  const heroBadgeLabel = document.querySelector(".hero-badge span");
  if (heroBadgeLabel) heroBadgeLabel.textContent = t("live");
  const analyticsTitle = document.getElementById("analytics-title");
  if (analyticsTitle) analyticsTitle.textContent = t("analyticsTitle");
  const kpiByAssetTitle = document.getElementById("kpi-by-asset-title");
  if (kpiByAssetTitle) kpiByAssetTitle.textContent = t("kpiByAsset");
  const kpiTrendTitle = document.getElementById("kpi-trend-title");
  if (kpiTrendTitle) kpiTrendTitle.textContent = t("kpiTrend");
  const failureLogTitle = document.getElementById("failure-log-title");
  if (failureLogTitle) failureLogTitle.textContent = t("failureLog");
  const productionLogTitle = document.getElementById("production-log-title");
  if (productionLogTitle) productionLogTitle.textContent = t("productionLog");
  if (addFailureBtn) addFailureBtn.textContent = t("addFailure");
  if (addProductionBtn) addProductionBtn.textContent = t("addProduction");
  if (addDailyFaultBtn) addDailyFaultBtn.disabled = !canCreateEntity("workorders");
  if (addAssetBtn) addAssetBtn.disabled = !canCreateEntity("assets");
  if (addPressFormBtn) addPressFormBtn.disabled = !canCreateEntity("pressForms");
  if (addInventoryBtn) addInventoryBtn.disabled = !canCreateEntity("inventory");
  if (addCriticalPartBtn) addCriticalPartBtn.disabled = !canCreateEntity("inventory");
  if (addPmBtn) addPmBtn.disabled = !canCreateEntity("pm");
  if (addUserBtn) addUserBtn.disabled = !canCreateEntity("users");
  document.getElementById("login-title").textContent = t("loginTitle");
  document.getElementById("login-subtitle").textContent = t("loginSubtitle");
  document.getElementById("login-username-label").textContent = t("loginUsername");
  document.getElementById("login-password-label").textContent = t("loginPassword");
  document.getElementById("login-submit").textContent = t("loginButton");
  setButtonLabel(backupBtn, t("backupButton"));
  setButtonLabel(logoutBtn, t("logout"));
  setButtonLabel(settingsBackupBtn, t("backupButton"));
  loginUsername.placeholder = t("placeholder.username");
  loginPassword.placeholder = t("placeholder.password");
  updatePrimaryButton();
  document.getElementById("view-title").textContent = t(`nav.${currentView}`);
  updateViewContextChip();
  renderNavBadges();
  updateSessionUI();
  applyCompanySettings();
}

function updatePrimaryButton() {
  const primaryButtonLabel = document.getElementById("primary-btn-label");
  if (!primaryButtonLabel || !openModalBtn) return;

  primaryButtonLabel.textContent = t(`actions.${currentView}`) || t("actions.workorders");
  const targetView = currentView === "reports"
    ? "report"
    : currentView === "analytics"
      ? "failure"
      : currentView === "dashboard"
        ? "workorders"
        : currentView === "criticalParts"
          ? "inventory"
          : currentView;
  openModalBtn.disabled = !canCreateEntity(targetView);
}

function renderActiveViewData(viewName) {
  let shouldBindCrud = false;

  switch (viewName) {
    case "workorders":
      renderWorkorders();
      shouldBindCrud = true;
      break;
    case "requests":
      renderRequests();
      shouldBindCrud = true;
      break;
    case "assets":
      renderAssets();
      shouldBindCrud = true;
      break;
    case "pressForms":
      renderPressForms();
      shouldBindCrud = true;
      break;
    case "inventory":
      renderInventory();
      shouldBindCrud = true;
      break;
    case "criticalParts":
      renderCriticalParts();
      shouldBindCrud = true;
      break;
    case "pm":
      renderPmList();
      shouldBindCrud = true;
      break;
    case "users":
      renderUsers();
      shouldBindCrud = true;
      break;
    case "settings":
      renderSettings();
      break;
    default:
      break;
  }

  if (shouldBindCrud && views[viewName]) {
    bindCrudButtons(views[viewName]);
  }
}

function setView(viewName) {
  if (!canAccessView(viewName)) {
    if (getCurrentUser()) {
      alert(t("accessDenied"));
    }
    viewName = "dashboard";
  }
  syncActiveNavGroupForView(viewName);
  currentView = viewName;

  Object.entries(views).forEach(([key, element]) => {
    element.classList.toggle("active", key === viewName);
  });
  renderActiveViewData(viewName);

  navLinks.forEach((button) => {
    const groupKey = getNavButtonGroup(button);
    const isParentLink = button.classList.contains("nav-parent-link");
    const isSubLink = button.classList.contains("nav-link-sub");
    const group = groupKey ? navGroups[groupKey] : null;
    const isActive = isParentLink
      ? groupKey === activeNavGroup && group?.views.includes(viewName)
      : isSubLink
        ? groupKey === activeNavGroup && button.dataset.view === viewName
        : button.dataset.view === viewName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
    if (isParentLink) {
      button.setAttribute("aria-expanded", String(expandedNavGroups.has(groupKey)));
    }
    button.hidden = !canAccessView(button.dataset.view);
  });
  Object.entries(navGroups).forEach(([key, group]) => {
    if (!group.submenu) return;
    const hasAccessibleChildren = group.views.some((view) => canAccessView(view));
    const isExpanded = expandedNavGroups.has(key) && hasAccessibleChildren;
    group.submenu.classList.toggle("active", isExpanded);
    group.submenu.hidden = !isExpanded;
  });

  document.getElementById("view-title").textContent = t(`nav.${viewName}`);
  updateViewContextChip();
  updatePrimaryButton();
  if (viewName === "dashboard") {
    renderDashboardAfterLayout();
  }
}

function currentObjectType() {
  if (currentView === "dashboard") return dashboardObjectType;
  return activeNavGroup === "pressForms" ? "pressForm" : "asset";
}

function recordObjectType(record) {
  return record?.objectType || (record?.pressFormId ? "pressForm" : "asset");
}

function getRecordTargetId(record) {
  return recordObjectType(record) === "pressForm" ? record?.pressFormId : record?.assetId;
}

function matchesCurrentObjectContext(record) {
  return recordObjectType(record) === currentObjectType();
}

function getAsset(assetId) {
  return state.assets.find((asset) => asset.id === assetId);
}

function getPressForm(pressFormId) {
  return state.pressForms.find((pressForm) => pressForm.id === pressFormId);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getEntityDeepLink(entityType, entityId) {
  const path = window.location.pathname && window.location.pathname !== "blank" ? window.location.pathname : "/";
  const url = new URL(path, qrPreferredOrigin || window.location.origin || "http://127.0.0.1:8001");
  url.hash = "";
  url.search = "";
  url.searchParams.set("o", `${entityType === "pressForm" ? "p" : "a"}:${entityId}`);
  return url.href;
}

function parseEntityDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const rawValue = params.get("o") || params.get("open");
  if (!rawValue || !rawValue.includes(":")) return null;

  const [rawType, ...idParts] = rawValue.split(":");
  const id = idParts.join(":");
  const type = rawType === "p" || rawType === "pressForm" || rawType === "pressForms"
    ? "pressForm"
    : rawType === "a" || rawType === "asset" || rawType === "assets"
      ? "asset"
      : "";

  return type && id ? { type, id } : null;
}

function clearEntityDeepLink() {
  const url = new URL(window.location.href);
  url.searchParams.delete("o");
  url.searchParams.delete("open");
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
}

function handleDeepLinkOpen() {
  const deepLink = parseEntityDeepLink();
  if (!deepLink) return false;

  if (deepLink.type === "pressForm") {
    const pressForm = getPressForm(deepLink.id);
    if (!pressForm) return false;
    activeNavGroup = "pressForms";
    dashboardObjectType = "pressForm";
    setView("pressForms");
    window.setTimeout(() => openPressFormDetailModal(pressForm.id), 0);
    clearEntityDeepLink();
    return true;
  }

  const asset = getAsset(deepLink.id);
  if (!asset) return false;
  activeNavGroup = "equipment";
  selectedAssetId = asset.id;
  setView("assets");
  syncSelectedAssetRow();
  window.setTimeout(() => openAssetDetailModal(asset.id), 0);
  clearEntityDeepLink();
  return true;
}

function qrGfMultiply(x, y) {
  let product = 0;
  while (y > 0) {
    if (y & 1) product ^= x;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
    y >>= 1;
  }
  return product;
}

function qrReedSolomonDivisor(degree) {
  let result = [1];
  let root = 1;
  for (let i = 0; i < degree; i += 1) {
    const next = new Array(result.length + 1).fill(0);
    result.forEach((coefficient, index) => {
      next[index] ^= coefficient;
      next[index + 1] ^= qrGfMultiply(coefficient, root);
    });
    result = next;
    root = qrGfMultiply(root, 0x02);
  }
  return result.slice(1);
}

function qrReedSolomonRemainder(data, divisor) {
  const result = new Array(divisor.length).fill(0);
  data.forEach((byte) => {
    const factor = byte ^ result.shift();
    result.push(0);
    divisor.forEach((coefficient, index) => {
      result[index] ^= qrGfMultiply(coefficient, factor);
    });
  });
  return result;
}

function qrAppendBits(target, value, length) {
  for (let index = length - 1; index >= 0; index -= 1) {
    target.push(((value >>> index) & 1) !== 0);
  }
}

function qrFormatBits(mask) {
  const errorCorrectionLevelLow = 1;
  const data = (errorCorrectionLevelLow << 3) | mask;
  let remainder = data;
  for (let i = 0; i < 10; i += 1) {
    remainder = (remainder << 1) ^ (((remainder >>> 9) & 1) ? 0x537 : 0);
  }
  return ((data << 10) | remainder) ^ 0x5412;
}

function createQrModules(text) {
  const version = 4;
  const size = version * 4 + 17;
  const dataCodewords = 80;
  const eccCodewords = 20;
  const bytes = Array.from(new TextEncoder().encode(text));
  if (bytes.length > 78) {
    throw new Error("QR payload is too long");
  }

  const dataBits = [];
  qrAppendBits(dataBits, 0x4, 4);
  qrAppendBits(dataBits, bytes.length, 8);
  bytes.forEach((byte) => qrAppendBits(dataBits, byte, 8));
  const capacityBits = dataCodewords * 8;
  qrAppendBits(dataBits, 0, Math.min(4, capacityBits - dataBits.length));
  while (dataBits.length % 8 !== 0) dataBits.push(false);

  const data = [];
  for (let i = 0; i < dataBits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j += 1) {
      byte = (byte << 1) | (dataBits[i + j] ? 1 : 0);
    }
    data.push(byte);
  }
  for (let padByte = 0xec; data.length < dataCodewords; padByte ^= 0xec ^ 0x11) {
    data.push(padByte);
  }

  const codewords = data.concat(qrReedSolomonRemainder(data, qrReedSolomonDivisor(eccCodewords)));
  const modules = Array.from({ length: size }, () => new Array(size).fill(false));
  const isFunction = Array.from({ length: size }, () => new Array(size).fill(false));
  const setModule = (x, y, black, isFunctionModule = true) => {
    modules[y][x] = black;
    if (isFunctionModule) isFunction[y][x] = true;
  };

  const drawFinder = (x, y) => {
    for (let dy = -1; dy <= 7; dy += 1) {
      for (let dx = -1; dx <= 7; dx += 1) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx < 0 || xx >= size || yy < 0 || yy >= size) continue;
        const inFinder = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6;
        const black = inFinder && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
        setModule(xx, yy, black);
      }
    }
  };

  const drawAlignment = (centerX, centerY) => {
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        const distance = Math.max(Math.abs(dx), Math.abs(dy));
        setModule(centerX + dx, centerY + dy, distance === 2 || distance === 0);
      }
    }
  };

  const drawFormat = (mask) => {
    const bits = qrFormatBits(mask);
    const bit = (index) => ((bits >>> index) & 1) !== 0;
    for (let i = 0; i <= 5; i += 1) setModule(8, i, bit(i));
    setModule(8, 7, bit(6));
    setModule(8, 8, bit(7));
    setModule(7, 8, bit(8));
    for (let i = 9; i < 15; i += 1) setModule(14 - i, 8, bit(i));
    for (let i = 0; i < 8; i += 1) setModule(size - 1 - i, 8, bit(i));
    for (let i = 8; i < 15; i += 1) setModule(8, size - 15 + i, bit(i));
    setModule(8, size - 8, true);
  };

  drawFinder(0, 0);
  drawFinder(size - 7, 0);
  drawFinder(0, size - 7);
  for (let i = 8; i < size - 8; i += 1) {
    setModule(6, i, i % 2 === 0);
    setModule(i, 6, i % 2 === 0);
  }
  drawAlignment(26, 26);
  drawFormat(0);

  const codewordBits = [];
  codewords.forEach((byte) => qrAppendBits(codewordBits, byte, 8));
  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;
    for (let vertical = 0; vertical < size; vertical += 1) {
      const y = upward ? size - 1 - vertical : vertical;
      for (let dx = 0; dx < 2; dx += 1) {
        const x = right - dx;
        if (isFunction[y][x]) continue;
        modules[y][x] = bitIndex < codewordBits.length ? codewordBits[bitIndex] : false;
        bitIndex += 1;
      }
    }
    upward = !upward;
  }

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (!isFunction[y][x] && (x + y) % 2 === 0) {
        modules[y][x] = !modules[y][x];
      }
    }
  }
  drawFormat(0);
  return modules;
}

function renderQrSvg(text) {
  try {
    const modules = createQrModules(text);
    const quietZone = 4;
    const size = modules.length;
    const viewBoxSize = size + quietZone * 2;
    const cells = [];
    modules.forEach((row, y) => {
      row.forEach((black, x) => {
        if (black) cells.push(`M${x + quietZone},${y + quietZone}h1v1h-1z`);
      });
    });
    return `
      <svg class="qr-code" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" role="img" aria-label="${escapeHtml(t("qrTitle"))}">
        <rect width="${viewBoxSize}" height="${viewBoxSize}" rx="3" fill="#fff"></rect>
        <path d="${cells.join("")}" fill="#102542"></path>
      </svg>
    `;
  } catch (error) {
    return `<div class="qr-code-fallback">${t("qrTitle")}</div>`;
  }
}

function renderEntityQrCard(entityType, entityId) {
  const href = getEntityDeepLink(entityType, entityId);
  return `
    <div class="qr-card">
      ${renderQrSvg(href)}
      <div class="qr-card-copy">
        <strong>${t("qrScanTitle")}</strong>
        <span>${t("qrScanText")}</span>
        <a href="${escapeHtml(href)}">${t("openDetails")}</a>
      </div>
    </div>
  `;
}

function formatAssetOption(asset) {
  return [asset.name, asset.model, asset.serialNumber].filter(Boolean).join(" - ");
}

function formatPressFormOption(pressForm) {
  return [pressForm.name, pressForm.model, pressForm.serialNumber].filter(Boolean).join(" - ");
}

function equipmentSearchText(assetId) {
  const asset = getAsset(assetId);
  return asset
    ? [asset.id, asset.name, asset.model, asset.serialNumber, asset.location, asset.category, asset.manufacturer].join(" ")
    : String(assetId || "");
}

function objectSearchText(record) {
  if (recordObjectType(record) === "pressForm") {
    const pressForm = getPressForm(record.pressFormId);
    return pressForm
      ? [pressForm.id, pressForm.name, pressForm.model, pressForm.serialNumber, pressForm.location].join(" ")
      : String(record.pressFormId || "");
  }
  return equipmentSearchText(record.assetId);
}

function getEquipmentTitle(assetId) {
  const asset = getAsset(assetId);
  if (asset) return asset.name;
  return assetId ? `${t("equipmentNotFound")} (${assetId})` : t("equipmentNotSelected");
}

function renderEquipmentReference(assetId) {
  const asset = getAsset(assetId);
  if (!asset) {
    return `<span class="equipment-ref equipment-ref-muted">${getEquipmentTitle(assetId)}</span>`;
  }

  const meta = [asset.model, asset.serialNumber].filter(Boolean).join(" / ");
  return `
    <button class="equipment-ref" type="button" data-action="open-asset-detail" data-id="${asset.id}">
      <strong>${asset.name}</strong>
      ${meta ? `<span>${meta}</span>` : ""}
    </button>
  `;
}

function renderObjectReference(record) {
  if (recordObjectType(record) === "pressForm") {
    const pressForm = getPressForm(record.pressFormId);
    if (!pressForm) {
      return `<span class="equipment-ref equipment-ref-muted">${t("pressFormNotSelected")}</span>`;
    }

    const meta = [pressForm.model, pressForm.serialNumber].filter(Boolean).join(" / ");
    return `
      <span class="equipment-ref">
        <strong>${pressForm.name}</strong>
        ${meta ? `<span>${meta}</span>` : ""}
      </span>
    `;
  }

  return renderEquipmentReference(record.assetId);
}

function getSelectedAsset() {
  return getAsset(selectedAssetId) || state.assets[0] || null;
}

function getCurrentUser() {
  return state.users.find((user) => String(user.id) === String(currentUserId)) || null;
}

function normalizeRoleKey(role) {
  const value = String(role || "").trim().toLowerCase();
  const aliases = {
    admin: "Supervisor",
    administrator: "Supervisor",
    supervisor: "Supervisor",
    "админ": "Supervisor",
    "администратор": "Supervisor",
    "супервайзер": "Supervisor",
    planner: "Planner",
    "планировщик": "Planner",
    "диспетчер": "Planner",
    technician: "Technician",
    tech: "Technician",
    "техник": "Technician",
    "механик": "Technician",
    texnik: "Technician",
    usta: "Technician"
  };
  return aliases[value] || role;
}

function rolePermissions(role) {
  const matrix = {
    Supervisor: {
      views: ["dashboard", "workorders", "assets", "pressForms", "inventory", "criticalParts", "pm", "users", "settings", "reports", "analytics"],
      create: ["workorders", "requests", "assets", "pressForms", "inventory", "pm", "users", "report", "failure", "production"],
      edit: ["workorders", "requests", "assets", "pressForms", "inventory", "pm", "users", "report", "failure", "production"]
    },
    Planner: {
      views: ["dashboard", "workorders", "assets", "pressForms", "inventory", "criticalParts", "pm", "settings", "reports", "analytics"],
      create: ["workorders", "requests", "pressForms", "pm", "report"],
      edit: ["workorders", "requests", "pressForms", "pm", "report"]
    },
    Technician: {
      views: ["dashboard", "workorders", "assets", "pressForms", "inventory", "criticalParts", "pm", "settings", "analytics"],
      create: ["workorders", "requests", "failure", "production"],
      edit: ["workorders", "requests", "pm", "failure", "production"]
    }
  };
  return matrix[normalizeRoleKey(role)] || { views: ["dashboard"], create: [], edit: [] };
}

function canAccessView(viewName) {
  const user = getCurrentUser();
  if (!user) return false;
  return rolePermissions(user.role).views.includes(viewName);
}

function canCreateEntity(viewName) {
  const user = getCurrentUser();
  if (!user) return false;
  return rolePermissions(user.role).create.includes(viewName);
}

function canEditEntity(viewName) {
  const user = getCurrentUser();
  if (!user) return false;
  return rolePermissions(user.role).edit.includes(viewName);
}

function requirePermission(check) {
  if (check()) return true;
  alert(t("accessDenied"));
  return false;
}

function updateSessionUI() {
  const user = getCurrentUser();
  document.getElementById("session-name").textContent = user?.name || t("sessionGuest");
  document.getElementById("session-role").textContent = `${t("sessionRoleLabel")}: ${user?.role || "-"}`;
  backupBtn.hidden = !canEditEntity("users");
  authScreen.classList.toggle("active", !user);
  document.body.classList.toggle("auth-locked", !user);
}

function syncCurrentUser() {
  if (!getCurrentUser()) {
    currentUserId = "";
    localStorage.removeItem(sessionKey);
  }
}

function matchesSearch(text) {
  return text.toLowerCase().includes(searchInput.value.trim().toLowerCase());
}

function currentUserHasRestrictedTaskScope() {
  const user = getCurrentUser();
  return normalizeRoleKey(user?.role) === "Technician";
}

function matchesCurrentUserTask(record) {
  if (!currentUserHasRestrictedTaskScope()) return true;
  const user = getCurrentUser();
  const userName = String(user?.name || "").trim().toLowerCase();
  const owner = String(record?.assignedTo || record?.owner || record?.requester || "").trim().toLowerCase();
  return owner === userName;
}

function getDailyFaultItems() {
  const workorders = state.workorders.filter(matchesCurrentObjectContext).filter(matchesCurrentUserTask).map((item) => ({
    ...item,
    source: "workorders",
    sourceLabel: t("dailyFaultWorkOrder"),
    owner: item.assignedTo,
    date: item.dueDate,
    text: item.description,
    sortDate: item.dueDate || ""
  }));

  const requests = state.requests.filter((item) => (item.objectType || "asset") === currentObjectType()).filter(matchesCurrentUserTask).map((item) => ({
    ...item,
    source: "requests",
    sourceLabel: t("dailyFaultRequest"),
    owner: item.requester,
    date: item.createdAt,
    text: item.note,
    sortDate: item.createdAt || ""
  }));

  return [...workorders, ...requests].sort((a, b) => {
    const priorityRank = { Critical: 0, High: 1, Medium: 2, Low: 3 };
    return (priorityRank[a.priority] ?? 9) - (priorityRank[b.priority] ?? 9)
      || String(b.sortDate).localeCompare(String(a.sortDate));
  });
}

function filteredDailyFaults() {
  return getDailyFaultItems().filter((item) => {
    const combined = [
      item.title,
      item.owner,
      item.status,
      item.priority,
      item.text,
      item.rootCause,
      item.workPerformed,
      item.sourceLabel,
      objectSearchText(item)
    ].join(" ");
    const searchPass = !searchInput.value || matchesSearch(combined);
    const statusPass = statusFilter.value === "all" || item.status === statusFilter.value;
    const priorityPass = priorityFilter.value === "all" || item.priority === priorityFilter.value;
    const quickPass = matchesDailyFaultQuickFilter(item);
    return searchPass && statusPass && priorityPass && quickPass;
  });
}

function isWorkorderComplete(status) {
  return status === "Done" || status === "Repaired";
}

const workorderRepairStages = ["Open", "In Progress", "Waiting Parts", "Waiting Technician", "Repaired"];

function normalizeRepairStageStatus(status) {
  if (status === "Done") return "Repaired";
  if (status === "On Hold") return "Waiting Parts";
  return workorderRepairStages.includes(status) ? status : "Open";
}

function getRepairStageIndex(status) {
  return Math.max(0, workorderRepairStages.indexOf(normalizeRepairStageStatus(status)));
}

function calculateFaultDowntimeMinutes(item) {
  if (!item?.faultStart) return null;
  const start = new Date(item.faultStart).getTime();
  const end = new Date(item.faultEnd || new Date()).getTime();
  if (Number.isNaN(start) || Number.isNaN(end) || end < start) return null;
  return Math.round((end - start) / (1000 * 60));
}

function formatFaultDowntime(item) {
  const minutes = calculateFaultDowntimeMinutes(item);
  if (minutes === null) return "-";
  const hours = Math.floor(minutes / 60);
  const tailMinutes = minutes % 60;
  const value = hours ? `${hours} ${t("hours")} ${tailMinutes} ${t("minutes")}` : `${tailMinutes} ${t("minutes")}`;
  return item.faultEnd ? value : `${value} - ${t("currentDowntime")}`;
}

function renderFaultStageRail(item) {
  if (!item || item.source !== "workorders") return "";
  const activeIndex = getRepairStageIndex(item.status);
  const canChangeStage = canEditEntity("workorders");
  return `
    <section class="fault-stage-card">
      <div class="fault-stage-head">
        <span>${t("repairStagesTitle")}</span>
        ${canChangeStage ? `<small>${t("repairStageHelp")}</small>` : ""}
      </div>
      <div class="fault-stage-rail">
        ${workorderRepairStages.map((stage, index) => {
          const stateClass = index < activeIndex ? "done" : index === activeIndex ? "active" : "";
          const label = translateStatus(stage);
          return canChangeStage ? `
            <button class="fault-stage-step ${stateClass}" type="button" data-action="set-daily-stage" data-id="${escapeHtml(item.id)}" data-stage="${escapeHtml(stage)}" title="${escapeHtml(label)}">
              <i aria-hidden="true"></i>
              <strong>${escapeHtml(label)}</strong>
            </button>
          ` : `
            <span class="fault-stage-step ${stateClass}">
              <i aria-hidden="true"></i>
              <strong>${escapeHtml(label)}</strong>
            </span>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderFaultCloseoutCard(item) {
  if (!item || item.source !== "workorders") return "";
  return `
    <section class="fault-closeout-card">
      <span>${t("faultCloseoutTitle")}</span>
      <div class="fault-closeout-grid">
        <div>
          <small>${t("field.faultStart")}</small>
          <strong>${item.faultStart ? formatDateTime(item.faultStart) : "-"}</strong>
        </div>
        <div>
          <small>${t("field.faultEnd")}</small>
          <strong>${item.faultEnd ? formatDateTime(item.faultEnd) : "-"}</strong>
        </div>
        <div>
          <small>${t("downtimeLabel")}</small>
          <strong>${escapeHtml(formatFaultDowntime(item))}</strong>
        </div>
        <div>
          <small>${t("field.completedBy")}</small>
          <strong>${escapeHtml(item.completedBy || "-")}</strong>
        </div>
      </div>
    </section>
  `;
}

function isDailyFaultActive(item) {
  return item.source === "workorders" ? !isWorkorderComplete(item.status) : item.status !== "Approved";
}

function isDailyFaultOverdue(item) {
  return item.source === "workorders"
    && item.dueDate
    && item.dueDate < todayISO()
    && !isWorkorderComplete(item.status);
}

function isDailyFaultToday(item) {
  const today = todayISO();
  return [item.dueDate, item.faultStart, item.createdAt, item.date]
    .filter(Boolean)
    .some((value) => String(value).slice(0, 10) === today);
}

function isDailyFaultPending(item) {
  if (item.source === "requests") return item.status === "New" || item.status === "Waiting";
  return item.status === "Open"
    || item.status === "On Hold"
    || item.status === "Waiting Parts"
    || item.status === "Waiting Technician";
}

function matchesDailyFaultQuickFilter(item) {
  if (dailyFaultQuickFilter === "active") return isDailyFaultActive(item);
  if (dailyFaultQuickFilter === "critical") return item.priority === "Critical";
  if (dailyFaultQuickFilter === "overdue") return isDailyFaultOverdue(item);
  if (dailyFaultQuickFilter === "today") return isDailyFaultToday(item);
  if (dailyFaultQuickFilter === "pending") return isDailyFaultPending(item);
  return true;
}

function renderDailyFaultQuickFilters(items) {
  if (!dailyFaultQuickFilters) return;
  const filters = [
    { key: "all", label: t("dailyQuickAll"), count: items.length },
    { key: "active", label: t("dailyQuickActive"), count: items.filter(isDailyFaultActive).length },
    { key: "critical", label: t("dailyQuickCritical"), count: items.filter((item) => item.priority === "Critical").length },
    { key: "overdue", label: t("dailyQuickOverdue"), count: items.filter(isDailyFaultOverdue).length },
    { key: "today", label: t("dailyQuickToday"), count: items.filter(isDailyFaultToday).length },
    { key: "pending", label: t("dailyQuickPending"), count: items.filter(isDailyFaultPending).length }
  ];

  dailyFaultQuickFilters.innerHTML = filters.map((item) => `
    <button class="quick-filter-btn ${dailyFaultQuickFilter === item.key ? "active" : ""}" type="button" data-fault-filter="${item.key}">
      <span>${item.label}</span>
      <strong>${formatNumber(item.count)}</strong>
    </button>
  `).join("");
}

function dailyFaultKey(item) {
  return item ? `${item.source}:${item.id}` : "";
}

function formatDailyFaultDate(value) {
  if (!value) return "-";
  return String(value).includes("T") ? formatDateTime(value) : value;
}

function renderDetailField(label, value) {
  return `
    <div class="fault-detail-field">
      <span>${label}</span>
      <strong>${escapeHtml(value || "-")}</strong>
    </div>
  `;
}

function getFaultSlaInfo(item) {
  if (!item || item.source !== "workorders" || !item.dueDate) return { label: "-", tone: "neutral", meta: "" };
  const due = new Date(`${item.dueDate}T23:59:59`);
  const now = new Date();
  const diffHours = Math.round((due - now) / (1000 * 60 * 60));
  if (Number.isNaN(diffHours)) return { label: "-", tone: "neutral", meta: "" };
  if (diffHours < 0 && !isWorkorderComplete(item.status)) {
    return { label: t("slaOverdue"), tone: "danger", meta: `${Math.abs(diffHours)} ${t("hours")}` };
  }
  return { label: t("slaOk"), tone: diffHours <= 24 ? "warning" : "ok", meta: `${Math.max(diffHours, 0)} ${t("hours")}` };
}

function renderAssigneeSelect(item) {
  if (!item || item.source !== "workorders" || !canEditEntity("workorders")) return escapeHtml(item?.owner || "-");
  const users = state.users.filter((user) => (user.userStatus || "Active") === "Active");
  const currentAssignee = item.assignedTo || item.owner || "";
  const hasCurrentAssignee = users.some((user) => String(user.name) === String(currentAssignee));
  const options = [
    `<option value="">-</option>`,
    !hasCurrentAssignee && currentAssignee ? `<option value="${escapeHtml(currentAssignee)}" selected>${escapeHtml(currentAssignee)}</option>` : "",
    ...users.map((user) => `
      <option value="${escapeHtml(user.name)}" ${String(user.name) === String(currentAssignee) ? "selected" : ""}>${escapeHtml(user.name)}</option>
    `)
  ].join("");
  return `
    <select class="fault-assignee-select" data-action="assign-daily-fault" data-id="${escapeHtml(item.id)}">
      ${options}
    </select>
  `;
}

function renderFaultTimeline(item) {
  if (!item) return "";
  const events = (Array.isArray(state.auditLog) ? state.auditLog : [])
    .filter((event) => String(event.entityId) === String(item.id))
    .slice(0, 6);
  return `
    <div class="fault-timeline">
      <span>${t("timelineTitle")}</span>
      ${events.map((event) => `
        <div class="fault-timeline-item">
          <strong>${escapeHtml(formatAuditAction(event.action))}</strong>
          <small>${escapeHtml(formatDateTime(event.createdAt))} · ${escapeHtml(event.user || "-")}</small>
          ${event.details ? `<em>${escapeHtml(event.details)}</em>` : ""}
        </div>
      `).join("") || `<p>${t("noAudit")}</p>`}
    </div>
  `;
}

function renderFaultComments(item) {
  if (!item || item.source !== "workorders") return "";
  const comments = Array.isArray(item.comments) ? item.comments : [];
  return `
    <div class="fault-comments">
      <span>${t("commentsTitle")}</span>
      <div class="fault-comment-list">
        ${comments.map((comment) => `
          <article class="fault-comment">
            <strong>${escapeHtml(comment.user || t("sessionGuest"))}</strong>
            <p>${escapeHtml(comment.text)}</p>
            <small>${escapeHtml(formatDateTime(comment.createdAt))}</small>
          </article>
        `).join("") || `<p>${t("commentsTitle")}: 0</p>`}
      </div>
      ${canEditEntity("workorders") ? `
        <form class="fault-comment-form" data-action="add-fault-comment" data-id="${escapeHtml(item.id)}">
          <input name="comment" type="text" placeholder="${escapeHtml(t("commentPlaceholder"))}">
          <button class="primary-btn" type="submit">${t("addCommentBtn")}</button>
        </form>
      ` : ""}
    </div>
  `;
}

function renderDailyFaultDetail(item) {
  if (!item) {
    return `
      <aside class="fault-detail-panel fault-detail-empty">
        <span class="empty-state-mark">i</span>
        <strong>${t("dailyFaultDetailEmpty")}</strong>
      </aside>
    `;
  }

  const statusClass = item.status.toLowerCase().replaceAll(" ", "-");
  const targetName = recordTargetName(item) || "-";
  const createdValue = item.source === "workorders" ? item.faultStart || item.date : item.createdAt || item.date;
  const neededByValue = item.source === "workorders" ? item.dueDate : item.dueDate || "-";
  const detailsText = item.text || item.description || item.note || t("previewNoDetails");
  const rootCause = item.rootCause || "";
  const actionPlan = item.actionPlan || "";
  const workPerformed = item.workPerformed || "";
  const usedParts = item.source === "workorders" ? renderUsedParts(item.usedParts) : "";
  const photos = item.source === "workorders" ? renderPhotoReport(item.repairPhotos) : "";
  const sla = getFaultSlaInfo(item);

  return `
    <aside class="fault-detail-panel">
      <div class="fault-detail-top">
        <p class="eyebrow">${t("dailyFaultDetailTitle")} · ${escapeHtml(item.sourceLabel)}</p>
        <h4>${escapeHtml(item.title || "-")}</h4>
        <div class="fault-detail-pills">
          <span class="priority-pill priority-${item.priority}">${translatePriority(item.priority)}</span>
          <span class="status-pill status-${statusClass}">${translateStatus(item.status)}</span>
        </div>
      </div>
      ${renderFaultStageRail(item)}
      <div class="fault-detail-grid">
        ${renderDetailField("ID", item.id)}
        ${renderDetailField(t("dailyFaultObject"), targetName)}
        <div class="fault-detail-field sla-${sla.tone}">
          <span>${t("slaLabel")}</span>
          <strong>${escapeHtml(`${sla.label}${sla.meta ? ` - ${sla.meta}` : ""}`)}</strong>
        </div>
        ${renderDetailField(t("createdWhen"), formatDailyFaultDate(createdValue))}
        ${renderDetailField(t("neededBy"), formatDailyFaultDate(neededByValue))}
        <div class="fault-detail-field">
          <span>${t("assignQuickLabel")}</span>
          ${renderAssigneeSelect(item)}
        </div>
      </div>
      ${renderFaultCloseoutCard(item)}
      <div class="fault-detail-block">
        <span>${t("field.description")}</span>
        <p>${escapeHtml(detailsText)}</p>
      </div>
      ${rootCause ? `
        <div class="fault-detail-block">
          <span>${t("field.rootCause")}</span>
          <p>${escapeHtml(rootCause)}</p>
        </div>
      ` : ""}
      ${actionPlan ? `
        <div class="fault-detail-block">
          <span>${t("dailyFaultPlan")}</span>
          <p>${escapeHtml(actionPlan)}</p>
        </div>
      ` : ""}
      ${workPerformed ? `
        <div class="fault-detail-block fault-work-done">
          <span>${t("field.workPerformed")}</span>
          <p>${escapeHtml(workPerformed)}</p>
        </div>
      ` : ""}
      ${usedParts ? `<div class="fault-detail-block"><span>${t("field.usedParts")}</span>${usedParts}</div>` : ""}
      ${photos ? `<div class="fault-detail-block"><span>${t("photoReportLabel")}</span>${photos}</div>` : ""}
      ${renderFaultComments(item)}
      ${renderFaultTimeline(item)}
      <div class="fault-detail-block">
        ${renderEntityQrCard(item.source, item.id)}
      </div>
      <div class="fault-detail-actions">
        ${renderCrudActions(item.source, item.id)}
      </div>
    </aside>
  `;
}

function updateDailyFaultAssignee(id, assignee) {
  if (!requirePermission(() => canEditEntity("workorders"))) return;
  const order = state.workorders.find((item) => String(item.id) === String(id));
  if (!order) return;
  const before = order.assignedTo || "-";
  order.assignedTo = assignee || "";
  addAuditEvent("assigned", "workorders", order, `${before} -> ${order.assignedTo || "-"}`);
  persistState();
  renderWorkorders();
}

function setDailyFaultStage(id, stage) {
  if (!requirePermission(() => canEditEntity("workorders"))) return;
  const order = state.workorders.find((item) => String(item.id) === String(id));
  if (!order || !workorderRepairStages.includes(stage) || normalizeRepairStageStatus(order.status) === stage) return;
  const previousStatus = order.status || "Open";
  order.status = stage;
  if (stage === "Repaired") {
    if (!order.faultEnd) order.faultEnd = nowLocalDateTime();
    if (!order.completedBy) order.completedBy = getCurrentUser()?.name || "";
  }
  addAuditEvent("status", "workorders", order, `${translateStatus(previousStatus)} -> ${translateStatus(stage)}`);
  persistState();
  renderAll();
}

function addDailyFaultComment(id, text) {
  if (!requirePermission(() => canEditEntity("workorders"))) return;
  const order = state.workorders.find((item) => String(item.id) === String(id));
  const value = String(text || "").trim();
  if (!order || !value) return;
  const user = getCurrentUser();
  if (!Array.isArray(order.comments)) order.comments = [];
  order.comments.unshift({
    id: createRecordId("COM"),
    text: value,
    user: user?.name || t("sessionGuest"),
    createdAt: new Date().toISOString()
  });
  addAuditEvent("comment", "workorders", order, value);
  persistState();
  renderWorkorders();
}

function renderUsedParts(parts) {
  const normalized = normalizeUsedParts(parts);
  if (!normalized.length) return "";
  return `
    <div class="used-parts-strip">
      ${normalized.map((usedPart) => {
        const part = getInventoryPart(usedPart.inventoryId);
        const image = normalizeInventoryImages(part)[0] || usedPart.image;
        const name = part?.name || usedPart.name || usedPart.inventoryId;
        const sku = part?.sku || usedPart.sku || "";
        return `
          <span class="used-part-chip">
            <span class="used-part-photo">${image ? `<img src="${image}" alt="${name}">` : name.slice(0, 1)}</span>
            <span><strong>${name}</strong><small>${sku} · ${usedPart.qty} ${t("pcs")}</small></span>
          </span>
        `;
      }).join("")}
    </div>
  `;
}

function renderPhotoReport(photos) {
  const items = Array.isArray(photos) ? photos.filter(Boolean) : [];
  if (!items.length) return "";
  return `
    <div class="photo-report-strip">
      ${items.slice(0, 6).map((src, index) => `
        <div class="photo-report-thumb">
          <img src="${src}" alt="${t("photoReportLabel")} ${index + 1}">
        </div>
      `).join("")}
    </div>
  `;
}

function renderRepairSummary(item) {
  if (item.source !== "workorders") return "";
  const hasFaultTime = item.faultStart || item.faultEnd;
  const mttrStart = item.faultStart;
  const mttrEnd = item.faultEnd;
  const usedParts = normalizeUsedParts(item.usedParts);
  const photos = normalizeWorkorderPhotos(item);
  if (!hasFaultTime && !item.actionPlan && !usedParts.length && !photos.length) return "";

  return `
    <div class="daily-repair-summary">
      <div class="daily-repair-times">
        <span>${t("field.faultStart")}: <strong>${item.faultStart ? formatDateTime(item.faultStart) : "-"}</strong></span>
        <span>${t("field.faultEnd")}: <strong>${item.faultEnd ? formatDateTime(item.faultEnd) : "-"}</strong></span>
      </div>
      ${mttrStart && mttrEnd ? `<div class="daily-repair-times"><span>MTTR: <strong>${calculateEventHours({ failureStart: mttrStart, repairEnd: mttrEnd }).toFixed(1)} ${t("hours")}</strong></span></div>` : ""}
      ${item.actionPlan ? `<div class="action-plan-box"><strong>${t("actionPlanLabel")}</strong><p>${item.actionPlan}</p></div>` : ""}
      ${renderUsedParts(usedParts)}
      ${photos.length ? `<div><strong class="photo-report-title">${t("photoReportLabel")}</strong>${renderPhotoReport(photos)}</div>` : ""}
    </div>
  `;
}

function renderStats() {
  const dailyFaults = getDailyFaultItems();
  const metrics = dashboardObjectType === "pressForm" ? null : calculateOperationalMetrics();
  const registryCount = dashboardObjectType === "pressForm" ? state.pressForms.length : state.assets.length;
  const criticalCount = dashboardObjectType === "pressForm"
    ? state.pressForms.filter((item) => item.health === "Critical").length
    : state.assets.filter((item) => item.health === "Critical").length;
  const cycleLimit = state.pressForms.reduce((sum, item) => sum + Number(item.cycleLimit || 0), 0);
  const currentCycles = state.pressForms.reduce((sum, item) => sum + Number(item.currentCycles || 0), 0);
  const pressFormUsage = cycleLimit ? (currentCycles / cycleLimit) * 100 : 0;

  const dashboardTotalFaults = document.getElementById("dashboard-total-faults");
  const dashboardCriticalFaults = document.getElementById("dashboard-critical-faults");
  const dashboardEquipmentCount = document.getElementById("dashboard-equipment-count");
  const dashboardOee = document.getElementById("dashboard-oee");
  if (dashboardTotalFaults?.previousElementSibling) dashboardTotalFaults.previousElementSibling.textContent = dashboardObjectType === "pressForm" ? t("dashboardStats.pressForms") : t("dashboardStats.equipment");
  if (dashboardTotalFaults?.nextElementSibling) dashboardTotalFaults.nextElementSibling.textContent = t("dashboardStats.faultRecords");
  if (dashboardCriticalFaults?.previousElementSibling) dashboardCriticalFaults.previousElementSibling.textContent = t("dashboardStats.critical");
  if (dashboardCriticalFaults?.nextElementSibling) dashboardCriticalFaults.nextElementSibling.textContent = t("dashboardStats.criticalCaption");
  if (dashboardEquipmentCount?.previousElementSibling) dashboardEquipmentCount.previousElementSibling.textContent = dashboardObjectType === "pressForm" ? t("dashboardStats.pressForms") : t("dashboardStats.registry");
  if (dashboardEquipmentCount?.nextElementSibling) dashboardEquipmentCount.nextElementSibling.textContent = t("dashboardStats.registryCaption");
  if (dashboardOee?.previousElementSibling) dashboardOee.previousElementSibling.textContent = dashboardObjectType === "pressForm" ? t("dashboardStats.resource") : "OEE";
  if (dashboardOee?.nextElementSibling) dashboardOee.nextElementSibling.textContent = dashboardObjectType === "pressForm" ? t("dashboardStats.resourceCaption") : t("dashboardStats.efficiencyCaption");
  if (dashboardTotalFaults) dashboardTotalFaults.textContent = dailyFaults.length;
  if (dashboardCriticalFaults) dashboardCriticalFaults.textContent = criticalCount;
  if (dashboardEquipmentCount) dashboardEquipmentCount.textContent = registryCount;
  if (dashboardOee) dashboardOee.textContent = dashboardObjectType === "pressForm" ? `${pressFormUsage.toFixed(1)}%` : `${(metrics.oee * 100).toFixed(1)}%`;

  if (document.getElementById("status-flow-chart")) renderDashboardCharts();
}

function renderDashboardKpiAnalytics() {
  const board = document.getElementById("dashboard-kpi-board");
  if (!board || !dashboardKpiAssetFilter) return;

  const subtitle = document.querySelector('[data-i18n="dashboardKpiSubtitle"]');
  if (subtitle) {
    subtitle.textContent = dashboardObjectType === "pressForm"
      ? t("dashboardKpiPressSubtitle")
      : t("dashboardKpiSubtitle");
  }

  if (dashboardObjectType === "pressForm") {
    renderPressFormDashboardKpi(board);
    return;
  }

  const previousValue = dashboardKpiAssetFilter.value || "all";
  const selectedAssetExists = state.assets.some((asset) => asset.id === previousValue);
  const selectedValue = previousValue === "all" || selectedAssetExists ? previousValue : "all";
  dashboardKpiAssetFilter.innerHTML = `
    <option value="all">${t("dashboardKpiOverall")}</option>
    ${state.assets.map((asset) => `<option value="${asset.id}">${asset.name}</option>`).join("")}
  `;
  dashboardKpiAssetFilter.value = selectedValue;

  const selectedAsset = selectedValue === "all" ? null : getAsset(selectedValue);
  const metrics = selectedAsset ? calculateMetricsForAsset(selectedAsset.id) : calculateOperationalMetrics();
  const targets = getKpiTargets();
  const scopeLabel = selectedAsset
    ? `${t("dashboardKpiSelected")}: ${selectedAsset.name}`
    : t("dashboardKpiOverall");
  const runtime = Number(metrics.runtimeHours || 0);
  const failureCount = Number(metrics.failureCount || 0);
  const kpiCards = [
    {
      label: "MTBF",
      value: `${metrics.mtbf.toFixed(1)} ${t("hours")}`,
      target: `${targets.mtbfHours} ${t("hours")}`,
      progress: progressToTarget(metrics.mtbf, targets.mtbfHours, true),
      status: getTargetStatus(metrics.mtbf, targets.mtbfHours, true),
      tone: "navy"
    },
    {
      label: "MTTR",
      value: `${metrics.mttr.toFixed(1)} ${t("hours")}`,
      target: `${targets.mttrHours} ${t("hours")}`,
      progress: progressToTarget(metrics.mttr, targets.mttrHours, false),
      status: getTargetStatus(metrics.mttr, targets.mttrHours, false),
      tone: "gold"
    },
    {
      label: "OEE",
      value: `${(metrics.oee * 100).toFixed(1)}%`,
      target: `${targets.oeePercent}%`,
      progress: progressToTarget(metrics.oee * 100, targets.oeePercent, true),
      status: getTargetStatus(metrics.oee * 100, targets.oeePercent, true),
      tone: "teal"
    }
  ];
  const healthRows = [
    { label: t("dashboardKpiAvailability"), value: metrics.availability * 100, target: targets.availabilityPercent },
    { label: t("dashboardKpiPerformance"), value: metrics.performance * 100, target: targets.performancePercent },
    { label: t("dashboardKpiQuality"), value: metrics.quality * 100, target: targets.qualityPercent }
  ];

  board.innerHTML = `
    <div class="dashboard-kpi-rings">
      ${kpiCards.map((item) => `
        <article class="dashboard-kpi-card ${item.tone} ${item.status.tone}">
          ${renderDashboardKpiRing(item)}
          <div>
            <p class="eyebrow">${item.status.label}</p>
            <h4>${item.label}</h4>
            <p>${t("targetWord")}: ${item.target}</p>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="dashboard-kpi-detail">
      <div class="dashboard-kpi-scope">
        <p class="eyebrow">${scopeLabel}</p>
        <h4>${selectedAsset ? [selectedAsset.model, selectedAsset.serialNumber].filter(Boolean).join(" / ") || selectedAsset.id : t("dashboardKpiTitle")}</h4>
      </div>
      <div class="dashboard-kpi-bars">
        ${healthRows.map((row) => {
          const progress = progressToTarget(row.value, row.target, true);
          return `
            <div class="dashboard-kpi-bar-row">
              <div class="metric-head">
                <strong>${row.label}</strong>
                <span>${row.value.toFixed(1)}% / ${row.target}%</span>
              </div>
              <div class="metric-bar teal"><span style="width:${clampPercent(progress)}%"></span></div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="dashboard-kpi-data">
        <span><strong>${runtime.toFixed(1)} ${t("hours")}</strong>${t("dashboardKpiRuntime")}</span>
        <span><strong>${failureCount}</strong>${t("dashboardKpiFailures")}</span>
      </div>
    </div>
  `;
}

function renderDashboardKpiRing(item) {
  const colors = {
    navy: "#1f74bf",
    gold: "#f1b44c",
    teal: "#0db5a3"
  };
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = clampPercent(item.progress);
  const offset = circumference * (1 - (progress / 100));
  return `
    <div class="dashboard-kpi-ring svg-ring" style="--score:${progress}%;">
      <svg class="dashboard-kpi-ring-svg" viewBox="0 0 132 132" aria-hidden="true">
        <circle class="dashboard-kpi-ring-track" cx="66" cy="66" r="${radius}"></circle>
        <circle
          class="dashboard-kpi-ring-value"
          cx="66"
          cy="66"
          r="${radius}"
          stroke="${colors[item.tone] || colors.teal}"
          stroke-dasharray="${circumference.toFixed(2)}"
          stroke-dashoffset="${offset.toFixed(2)}"
        ></circle>
      </svg>
      <div class="dashboard-kpi-ring-label">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </div>
    </div>
  `;
}

function getPressFormDashboardEvents(pressFormId = "") {
  const manualEvents = (Array.isArray(state.failureEvents) ? state.failureEvents : [])
    .filter((event) => event.pressFormId && (!pressFormId || event.pressFormId === pressFormId))
    .map((event) => ({
      ...event,
      sourceEntity: "failure",
      sourceId: event.id
    }));

  const workorderEvents = (Array.isArray(state.workorders) ? state.workorders : [])
    .map((order) => ({
      ...order,
      metricStart: order.faultStart,
      metricEnd: order.faultEnd
    }))
    .filter((order) => {
      return recordObjectType(order) === "pressForm"
        && order.pressFormId
        && (!pressFormId || order.pressFormId === pressFormId)
        && order.metricStart
        && order.metricEnd;
    })
    .map((order) => ({
      id: `WO-${order.id}`,
      sourceEntity: "workorders",
      sourceId: order.id,
      pressFormId: order.pressFormId,
      failureStart: order.metricStart,
      repairEnd: order.metricEnd,
      reason: `${order.title}${order.actionPlan ? ` - ${order.actionPlan}` : order.description ? ` - ${order.description}` : ""}`
    }));

  return [...manualEvents, ...workorderEvents].filter((event) => {
    const start = new Date(event.failureStart).getTime();
    const end = new Date(event.repairEnd).getTime();
    return event.pressFormId && !Number.isNaN(start) && !Number.isNaN(end) && end > start;
  });
}

function calculatePressFormDashboardMetrics(forms, selectedPressFormId = "") {
  const runs = (Array.isArray(state.productionRuns) ? state.productionRuns : [])
    .filter((run) => run.pressFormId && (!selectedPressFormId || run.pressFormId === selectedPressFormId));
  const completedEvents = getPressFormDashboardEvents(selectedPressFormId);
  const faultCount = state.workorders.filter((item) => {
    return recordObjectType(item) === "pressForm"
      && (!selectedPressFormId || item.pressFormId === selectedPressFormId);
  }).length;
  const totalCycles = forms.reduce((sum, item) => sum + Number(item.currentCycles || 0), 0);
  const totalLimit = forms.reduce((sum, item) => sum + Number(item.cycleLimit || 0), 0);
  const usageRatio = totalLimit ? totalCycles / totalLimit : 0;
  const healthScore = forms.length
    ? forms.reduce((sum, item) => {
        if (item.health === "Critical") return sum + 0.55;
        if (item.health === "Warning") return sum + 0.78;
        return sum + 1;
      }, 0) / forms.length
    : 0;
  const repairMinutes = completedEvents.reduce((sum, event) => {
    const start = new Date(event.failureStart).getTime();
    const end = new Date(event.repairEnd).getTime();
    return end > start ? sum + ((end - start) / (1000 * 60)) : sum;
  }, 0);
  const runPlannedMinutes = runs.reduce((sum, run) => sum + Number(run.plannedMinutes || 0), 0);
  const runDowntimeMinutes = runs.reduce((sum, run) => sum + Number(run.downtimeMinutes || 0), 0);
  const runRuntimeMinutes = Math.max(runPlannedMinutes - runDowntimeMinutes, 0);
  const estimatedRuntimeHours = totalCycles / 12000;
  const plannedMinutes = runPlannedMinutes || ((estimatedRuntimeHours * 60) + repairMinutes);
  const downtimeMinutes = runPlannedMinutes ? runDowntimeMinutes : repairMinutes;
  const runtimeMinutes = runPlannedMinutes ? runRuntimeMinutes : Math.max(estimatedRuntimeHours * 60, 0);
  const runtimeSeconds = runtimeMinutes * 60;
  const totalCount = runs.reduce((sum, run) => sum + Number(run.totalCount || 0), 0);
  const goodCount = runs.reduce((sum, run) => sum + Number(run.goodCount || 0), 0);
  const idealSecondsProduced = runs.reduce((sum, run) => {
    return sum + (Number(run.idealCycleTimeSeconds || 0) * Number(run.totalCount || 0));
  }, 0);
  const availability = plannedMinutes > 0
    ? Math.max(0, (plannedMinutes - downtimeMinutes) / plannedMinutes)
    : healthScore;
  const performance = runtimeSeconds > 0 && idealSecondsProduced > 0
    ? idealSecondsProduced / runtimeSeconds
    : Math.max(0, 1 - (usageRatio * 0.18));
  const quality = totalCount > 0 ? goodCount / totalCount : healthScore;
  const repairHours = repairMinutes / 60;
  const failureCountForAverage = Math.max(faultCount, 1);

  return {
    mtbf: (runtimeMinutes / 60) / failureCountForAverage,
    mttr: completedEvents.length ? repairHours / completedEvents.length : 0,
    oee: availability * performance * quality,
    availability,
    performance,
    quality,
    failureCount: faultCount,
    runtimeHours: runtimeMinutes / 60,
    totalCycles,
    totalLimit
  };
}

function renderPressFormDashboardKpi(board) {
  const previousValue = dashboardKpiAssetFilter.value || "all";
  const selectedExists = state.pressForms.some((item) => item.id === previousValue);
  const selectedValue = previousValue === "all" || selectedExists ? previousValue : "all";
  dashboardKpiAssetFilter.innerHTML = `
    <option value="all">${t("dashboardPressForms.all")}</option>
    ${state.pressForms.map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}
  `;
  dashboardKpiAssetFilter.value = selectedValue;

  const selected = selectedValue === "all" ? null : getPressForm(selectedValue);
  const forms = selected ? [selected] : state.pressForms;
  const metrics = calculatePressFormDashboardMetrics(forms, selected?.id || "");
  const targets = getKpiTargets();
  const kpiCards = [
    {
      label: "MTBF",
      value: `${metrics.mtbf.toFixed(1)} ${t("hours")}`,
      target: `${targets.mtbfHours} ${t("hours")}`,
      progress: progressToTarget(metrics.mtbf, targets.mtbfHours, true),
      status: getTargetStatus(metrics.mtbf, targets.mtbfHours, true),
      tone: "navy"
    },
    {
      label: "MTTR",
      value: `${metrics.mttr.toFixed(1)} ${t("hours")}`,
      target: `${targets.mttrHours} ${t("hours")}`,
      progress: progressToTarget(metrics.mttr, targets.mttrHours, false),
      status: getTargetStatus(metrics.mttr, targets.mttrHours, false),
      tone: "gold"
    },
    {
      label: "OEE",
      value: `${(metrics.oee * 100).toFixed(1)}%`,
      target: `${targets.oeePercent}%`,
      progress: progressToTarget(metrics.oee * 100, targets.oeePercent, true),
      status: getTargetStatus(metrics.oee * 100, targets.oeePercent, true),
      tone: "teal"
    }
  ];
  const healthRows = [
    { label: t("dashboardKpiAvailability"), value: metrics.availability * 100, target: targets.availabilityPercent },
    { label: t("dashboardKpiPerformance"), value: metrics.performance * 100, target: targets.performancePercent },
    { label: t("dashboardKpiQuality"), value: metrics.quality * 100, target: targets.qualityPercent }
  ];

  board.innerHTML = `
    <div class="dashboard-kpi-rings">
      ${kpiCards.map((item) => `
        <article class="dashboard-kpi-card ${item.tone} ${item.status.tone}">
          ${renderDashboardKpiRing(item)}
          <div>
            <p class="eyebrow">${item.status.label}</p>
            <h4>${item.label}</h4>
            <p>${t("targetWord")}: ${item.target}</p>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="dashboard-kpi-detail">
      <div class="dashboard-kpi-scope">
        <p class="eyebrow">${selected ? t("dashboardPressForms.selected") : t("dashboardPressForms.scopeAll")}</p>
        <h4>${selected ? [selected.model, selected.serialNumber].filter(Boolean).join(" / ") || selected.id : t("dashboardPressForms.resourceService")}</h4>
      </div>
      <div class="dashboard-kpi-bars">
        ${healthRows.map((row) => {
          const progress = progressToTarget(row.value, row.target, true);
          return `
            <div class="dashboard-kpi-bar-row">
              <div class="metric-head">
                <strong>${row.label}</strong>
                <span>${row.value.toFixed(1)}% / ${row.target}%</span>
              </div>
              <div class="metric-bar teal"><span style="width:${clampPercent(progress)}%"></span></div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="dashboard-kpi-data">
        <span><strong>${metrics.runtimeHours.toFixed(1)} ${t("hours")}</strong>${t("dashboardKpiRuntime")}</span>
        <span><strong>${metrics.failureCount}</strong>${t("dashboardKpiFailures")}</span>
      </div>
    </div>
  `;
}

function renderPriorityBreakdown() {
  const dailyFaults = getDailyFaultItems();
  const total = Math.max(dailyFaults.length, 1);
  const priorities = ["Critical", "High", "Medium", "Low"];

  document.getElementById("priority-breakdown").innerHTML = priorities.map((priority) => {
    const count = dailyFaults.filter((item) => item.priority === priority).length;
    const width = Math.round((count / total) * 100);
    return `
      <div class="stack-row">
        <strong>${translatePriority(priority)}</strong>
        <span>${count} ${t("ordersWord")}</span>
        <div class="stack-bar"><span style="width:${width}%"></span></div>
      </div>
    `;
  }).join("");
}

function renderDashboardCharts() {
  renderStatusFlowChart();
  renderPriorityDonutChart();
}

function renderStatusFlowChart() {
  const dailyFaults = getDailyFaultItems();
  const statuses = ["New", "Open", "In Progress", "Waiting", "Repaired"];
  const colors = {
    New: "#1f74bf",
    Open: "#1f74bf",
    "In Progress": "#0db5a3",
    "On Hold": "#f1b44c",
    Waiting: "#f1b44c",
    "Waiting Parts": "#f1b44c",
    "Waiting Technician": "#d48d2d",
    Done: "#7f8aa3",
    Repaired: "#0db5a3"
  };
  const countStatus = (status) => dailyFaults.filter((item) => {
    if (status === "Waiting") {
      return ["Waiting", "Waiting Parts", "Waiting Technician", "On Hold"].includes(item.status);
    }
    return item.status === status;
  }).length;
  const max = Math.max(...statuses.map(countStatus), 1);

  const bars = statuses.map((status, index) => {
    const count = countStatus(status);
    const height = 24 + ((count / max) * 150);
    const slot = 350 / statuses.length;
    const barWidth = Math.min(42, slot * 0.58);
    const x = 20 + (index * slot) + ((slot - barWidth) / 2);
    const y = 210 - height;
    return `
      <g>
        <rect x="${x}" y="${y}" width="${barWidth}" height="${height}" rx="18" fill="${colors[status]}" opacity="0.95"></rect>
        <text x="${x + (barWidth / 2)}" y="${y - 10}" text-anchor="middle" fill="#1a2233" font-size="14" font-weight="700">${count}</text>
        <text x="${x + (barWidth / 2)}" y="232" text-anchor="middle" fill="#6e7585" font-size="10">${translateStatus(status)}</text>
      </g>
    `;
  }).join("");

  document.getElementById("status-flow-chart").innerHTML = `
    <div class="svg-card">
      <svg class="status-flow-svg" viewBox="0 0 390 250" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="dashboardGridFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(16,37,66,0.08)"/>
            <stop offset="100%" stop-color="rgba(16,37,66,0.01)"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="390" height="250" rx="28" fill="rgba(255,255,255,0.58)"></rect>
        <g stroke="rgba(16,37,66,0.08)" stroke-dasharray="4 8">
          <line x1="20" y1="50" x2="370" y2="50"></line>
          <line x1="20" y1="105" x2="370" y2="105"></line>
          <line x1="20" y1="160" x2="370" y2="160"></line>
          <line x1="20" y1="215" x2="370" y2="215"></line>
        </g>
        ${bars}
      </svg>
    </div>
  `;
}

function polarToCartesian(cx, cy, radius, angle) {
  const radians = (angle - 90) * Math.PI / 180;
  return {
    x: cx + (radius * Math.cos(radians)),
    y: cy + (radius * Math.sin(radians))
  };
}

function describeArc(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function renderPriorityDonutChart() {
  const dailyFaults = getDailyFaultItems();
  const priorities = [
    { key: "Critical", color: "#ec6b62" },
    { key: "High", color: "#f1b44c" },
    { key: "Medium", color: "#0db5a3" },
    { key: "Low", color: "#1f74bf" }
  ];
  const total = Math.max(dailyFaults.length, 1);
  let startAngle = 0;

  const segments = priorities.map((priority) => {
    const count = dailyFaults.filter((item) => item.priority === priority.key).length;
    const angle = (count / total) * 360;
    const endAngle = startAngle + angle;
    const path = angle === 0 ? "" : `<path d="${describeArc(96, 96, 68, startAngle, endAngle)}" stroke="${priority.color}" stroke-width="24" fill="none" stroke-linecap="round"></path>`;
    startAngle = endAngle;
    return {
      path,
      count,
      label: translatePriority(priority.key),
      color: priority.color
    };
  });

  document.getElementById("priority-donut-chart").innerHTML = `
    <div class="donut-layout">
      <div class="donut-wrap">
        <svg viewBox="0 0 192 192" width="192" height="192" aria-hidden="true">
          <circle cx="96" cy="96" r="68" stroke="rgba(16,37,66,0.08)" stroke-width="24" fill="none"></circle>
          ${segments.map((segment) => segment.path).join("")}
        </svg>
      </div>
      <div class="chart-legend">
        <div class="donut-center">
          <strong>${dailyFaults.length}</strong>
          <span>${t("ordersWord")}</span>
        </div>
        ${segments.map((segment) => `
          <div class="legend-row">
            <div class="legend-left">
              <span class="legend-dot" style="background:${segment.color}"></span>
              <span>${segment.label}</span>
            </div>
            <span class="chart-value">${segment.count}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPmPreview() {
  const pmPreview = [...state.pm].sort((a, b) => a.nextDue.localeCompare(b.nextDue)).slice(0, 3);
  document.getElementById("pm-preview").innerHTML = pmPreview.map((item) => `
    <div class="mini-item">
      <strong>${item.title}</strong>
      <div>${renderEquipmentReference(item.assetId)}</div>
      <p>${item.nextDue}</p>
    </div>
  `).join("");
}

function renderWorkorders() {
  const allItems = getDailyFaultItems();
  const visibleItems = filteredDailyFaults();
  if (!visibleItems.some((item) => dailyFaultKey(item) === selectedDailyFaultKey)) {
    selectedDailyFaultKey = dailyFaultKey(visibleItems[0]);
  }
  const selectedItem = visibleItems.find((item) => dailyFaultKey(item) === selectedDailyFaultKey) || null;
  const activeCount = allItems.filter((item) => isDailyFaultActive(item)).length;
  const criticalCount = allItems.filter((item) => item.priority === "Critical").length;
  const overdueCount = state.workorders.filter((item) => item.dueDate < todayISO() && !isWorkorderComplete(item.status)).length;
  const pendingCount = state.requests.filter((item) => item.status === "New" || item.status === "Waiting").length;

  document.getElementById("daily-faults-kpis").innerHTML = [
    { label: t("dailyFaultsTotal"), value: allItems.length },
    { label: t("dailyFaultsActive"), value: activeCount },
    { label: t("dailyFaultsCritical"), value: criticalCount },
    { label: t("dailyFaultsOverdue"), value: overdueCount },
    { label: t("dailyFaultsPending"), value: pendingCount }
  ].map((item) => `
    <article class="daily-fault-kpi">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </article>
  `).join("");
  renderDailyFaultQuickFilters(allItems);
  setPanelCount("daily-faults-count", visibleItems.length, allItems.length);

  const labels = {
    title: t("thTitle"),
    priority: t("thPriority"),
    status: t("thStatus"),
    id: t("thId"),
    created: t("createdWhen"),
    description: t("field.description"),
    neededBy: t("neededBy"),
    createdBy: t("createdBy"),
    actions: t("actionsColumn")
  };
  const rows = visibleItems.map((item) => {
    const itemKey = dailyFaultKey(item);
    const statusClass = item.status.toLowerCase().replaceAll(" ", "-");
    const statusMarkup = canEditEntity(item.source)
      ? `<button class="status-pill status-${statusClass}" data-action="toggle-daily-status" data-entity="${item.source}" data-id="${item.id}">${translateStatus(item.status)}</button>`
      : `<span class="status-pill status-${statusClass}">${translateStatus(item.status)}</span>`;
    const createdValue = item.source === "workorders" ? item.faultStart || item.date : item.createdAt || item.date;
    const neededByValue = item.source === "workorders" ? item.dueDate : item.dueDate || "-";
    const targetName = recordTargetName(item) || "-";
    return `
      <tr class="request-table-row request-priority-${item.priority.toLowerCase()} ${itemKey === selectedDailyFaultKey ? "active" : ""}" data-action="select-daily-fault" data-fault-key="${escapeHtml(itemKey)}" tabindex="0">
        <td data-label="${labels.title}">
          <div class="request-title-cell">
            <span class="request-priority-mark"></span>
            <div>
              <strong>${item.title}</strong>
              <small>${item.sourceLabel} · ${targetName}</small>
            </div>
          </div>
        </td>
        <td data-label="${labels.priority}"><span class="priority-pill priority-${item.priority}">${translatePriority(item.priority)}</span></td>
        <td data-label="${labels.status}">${statusMarkup}</td>
        <td data-label="${labels.id}"><span class="request-id">${item.id}</span></td>
        <td data-label="${labels.created}">${formatDailyFaultDate(createdValue)}</td>
        <td class="request-description-cell" data-label="${labels.description}">${item.text || t("previewNoDetails")}</td>
        <td data-label="${labels.neededBy}">${formatDailyFaultDate(neededByValue)}</td>
        <td data-label="${labels.createdBy}">${item.owner || "-"}</td>
        <td class="request-actions-cell" data-label="${labels.actions}">
          ${renderCrudActions(item.source, item.id)}
        </td>
      </tr>
    `;
  }).join("");

  document.getElementById("daily-faults-list").innerHTML = `
    <div class="daily-faults-workspace">
      <div class="request-table-shell">
        <table class="request-table">
          <thead>
            <tr>
              <th>${labels.title}</th>
              <th>${labels.priority}</th>
              <th>${labels.status}</th>
              <th>${labels.id}</th>
              <th>${labels.created}</th>
              <th>${labels.description}</th>
              <th>${labels.neededBy}</th>
              <th>${labels.createdBy}</th>
              <th>${labels.actions}</th>
            </tr>
          </thead>
          <tbody>
            ${rows || renderTableEmptyState(9, t("noDailyFaults"), t("emptyFiltered"))}
          </tbody>
        </table>
      </div>
      ${renderDailyFaultDetail(selectedItem)}
    </div>
  `;

  document.querySelectorAll('[data-action="toggle-daily-status"]').forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.entity === "requests") {
        cycleRequestStatus(button.dataset.id);
        return;
      }
      cycleStatus(button.dataset.id);
    });
  });
  document.querySelectorAll('[data-action="select-daily-fault"]').forEach((row) => {
    const selectRow = () => {
      selectedDailyFaultKey = row.dataset.faultKey || "";
      renderWorkorders();
    };
    row.addEventListener("click", (event) => {
      if (event.target.closest("button, a, input, select, textarea, label")) return;
      selectRow();
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectRow();
    });
  });
  document.querySelectorAll('[data-action="assign-daily-fault"]').forEach((select) => {
    select.addEventListener("change", () => updateDailyFaultAssignee(select.dataset.id, select.value));
  });
  document.querySelectorAll('[data-action="set-daily-stage"]').forEach((button) => {
    button.addEventListener("click", () => setDailyFaultStage(button.dataset.id, button.dataset.stage));
  });
  document.querySelectorAll('[data-action="add-fault-comment"]').forEach((commentForm) => {
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      addDailyFaultComment(commentForm.dataset.id, new FormData(commentForm).get("comment"));
    });
  });
  bindCrudButtons(document.getElementById("daily-faults-list"));
}

function cycleStatus(id) {
  if (!requirePermission(() => canEditEntity("workorders"))) return;
  const statuses = [...workorderRepairStages];
  const order = state.workorders.find((item) => item.id === id);
  if (!order) return;
  const currentIndex = statuses.indexOf(normalizeRepairStageStatus(order.status));
  order.status = statuses[(currentIndex + 1) % statuses.length];
  if (order.status === "Repaired") {
    if (!order.faultEnd) order.faultEnd = nowLocalDateTime();
    if (!order.completedBy) order.completedBy = getCurrentUser()?.name || "";
  }
  addAuditEvent("status", "workorders", order, translateStatus(order.status));
  persistState();
  renderAll();
}

function cycleRequestStatus(id) {
  if (!requirePermission(() => canEditEntity("requests"))) return;
  const statuses = ["New", "Waiting", "Approved"];
  const request = state.requests.find((item) => String(item.id) === String(id));
  if (!request) return;
  const currentIndex = statuses.indexOf(request.status);
  request.status = statuses[(currentIndex + 1) % statuses.length];
  addAuditEvent("status", "requests", request, translateStatus(request.status));
  persistState();
  renderAll();
}

function renderAssets() {
  renderAssetToolbar();

  const visibleAssets = state.assets.filter((asset) => {
    const combined = [asset.name, asset.location, asset.category, asset.health, asset.model, asset.serialNumber].join(" ");
    const searchPass = !searchInput.value || matchesSearch(combined);
    const healthPass = assetHealthFilter.value === "all" || asset.health === assetHealthFilter.value;
    const criticalityPass = assetCriticalityFilter.value === "all" || String(asset.criticality || "") === assetCriticalityFilter.value;
    const locationPass = assetLocationFilter.value === "all" || asset.location === assetLocationFilter.value;
    return searchPass && healthPass && criticalityPass && locationPass;
  });
  visibleAssets.sort(compareAssetsBySelection);
  const labels = {
    id: t("thId"),
    photo: t("photoColumn"),
    title: t("thTitle"),
    model: t("field.model"),
    serial: t("field.serialNumber"),
    location: t("thLocation"),
    health: t("detailHealth"),
    criticality: t("detailCriticality"),
    actions: t("actionsColumn")
  };

  if (!visibleAssets.some((asset) => asset.id === selectedAssetId)) {
    selectedAssetId = visibleAssets[0]?.id || state.assets[0]?.id || null;
  }

  setPanelCount("assets-count", visibleAssets.length, state.assets.length);
  document.getElementById("assets-grid").innerHTML = visibleAssets.map((asset) => `
    <tr class="equipment-table-row ${asset.id === selectedAssetId ? "equipment-table-row-active" : ""}" data-action="select-asset-row" data-id="${asset.id}">
      <td class="equipment-id-cell" data-label="${labels.id}">
        <strong>${asset.id}</strong>
      </td>
      <td data-label="${labels.photo}">${renderAssetTableThumb(asset)}</td>
      <td data-label="${labels.title}">
        <div class="equipment-name-cell">
          <strong>${asset.name}</strong>
          <span>${asset.category}</span>
        </div>
      </td>
      <td data-label="${labels.model}">${asset.model || "-"}</td>
      <td data-label="${labels.serial}">${asset.serialNumber || "-"}</td>
      <td data-label="${labels.location}">${asset.location}</td>
      <td data-label="${labels.health}"><span class="priority-pill priority-${asset.health === "Critical" ? "Critical" : asset.health === "Warning" ? "High" : "Medium"}">${translateStatus(asset.health)}</span></td>
      <td data-label="${labels.criticality}"><span class="priority-pill priority-Low">${asset.criticality || "-"}</span></td>
      <td data-label="${labels.actions}">
        <div class="equipment-table-actions">
          <button class="ghost-btn small-btn equipment-open-btn" type="button" data-action="open-asset-detail" data-id="${asset.id}">${t("openDetails")}</button>
          ${renderCrudActions("assets", asset.id)}
        </div>
      </td>
    </tr>
  `).join("") || renderTableEmptyState(9, t("nothingFound"), t("emptyAssets"));

  syncSelectedAssetRow();
  renderAssetDetail();
  bindCrudButtons(document.getElementById("assets-view"));
}

function renderAssetToolbar() {
  const healthOptions = ["all", "Stable", "Warning", "Critical"];
  const criticalityOptions = ["all", ...new Set(state.assets.map((asset) => String(asset.criticality || "-")).filter(Boolean))];
  const locationOptions = ["all", ...new Set(state.assets.map((asset) => asset.location).filter(Boolean))];
  const sortOptions = [
    { value: "name-asc", label: t("sortAssetsNameAsc") },
    { value: "name-desc", label: t("sortAssetsNameDesc") },
    { value: "location", label: t("sortAssetsLocation") },
    { value: "health", label: t("sortAssetsHealth") },
    { value: "criticality", label: t("sortAssetsCriticality") }
  ];

  if (!assetSort.value) assetSort.value = "name-asc";
  assetHealthFilter.innerHTML = healthOptions.map((value) => `
    <option value="${value}" ${assetHealthFilter.value === value ? "selected" : ""}>
      ${value === "all" ? t("allHealthFilter") : translateStatus(value)}
    </option>
  `).join("");
  assetCriticalityFilter.innerHTML = criticalityOptions.map((value) => `
    <option value="${value}" ${assetCriticalityFilter.value === value ? "selected" : ""}>
      ${value === "all" ? t("allCriticalitiesFilter") : value}
    </option>
  `).join("");
  assetLocationFilter.innerHTML = locationOptions.map((value) => `
    <option value="${value}" ${assetLocationFilter.value === value ? "selected" : ""}>
      ${value === "all" ? t("allLocationsFilter") : value}
    </option>
  `).join("");
  assetSort.innerHTML = sortOptions.map((option) => `
    <option value="${option.value}" ${assetSort.value === option.value ? "selected" : ""}>${option.label}</option>
  `).join("");
}

function renderPressForms() {
  const grid = document.getElementById("press-forms-grid");
  if (!grid) return;

  const visiblePressForms = state.pressForms.filter((pressForm) => {
    const combined = [
      pressForm.id,
      pressForm.name,
      pressForm.model,
      pressForm.serialNumber,
      pressForm.location,
      pressForm.health,
      pressForm.notes
    ].join(" ");
    return !searchInput.value || matchesSearch(combined);
  }).sort((a, b) => a.name.localeCompare(b.name));

  const labels = {
    id: t("thId"),
    photo: t("photoColumn"),
    title: t("thTitle"),
    model: t("field.model"),
    serial: t("field.serialNumber"),
    cavities: t("field.cavityCount"),
    location: t("thLocation"),
    health: t("detailHealth"),
    actions: t("actionsColumn")
  };

  setPanelCount("press-forms-count", visiblePressForms.length, state.pressForms.length);
  grid.innerHTML = visiblePressForms.map((pressForm) => `
    <tr class="equipment-table-row">
      <td class="equipment-id-cell" data-label="${labels.id}"><strong>${pressForm.id}</strong></td>
      <td data-label="${labels.photo}">${renderPressFormTableThumb(pressForm)}</td>
      <td data-label="${labels.title}">
        <div class="equipment-name-cell">
          <strong>${pressForm.name}</strong>
          <span>${pressForm.notes || "-"}</span>
        </div>
      </td>
      <td data-label="${labels.model}">${pressForm.model || "-"}</td>
      <td data-label="${labels.serial}">${pressForm.serialNumber || "-"}</td>
      <td data-label="${labels.cavities}">${pressForm.cavityCount || "-"}</td>
      <td data-label="${labels.location}">${pressForm.location || "-"}</td>
      <td data-label="${labels.health}"><span class="priority-pill priority-${pressForm.health === "Critical" ? "Critical" : pressForm.health === "Warning" ? "High" : "Medium"}">${translateStatus(pressForm.health)}</span></td>
      <td data-label="${labels.actions}">
        <div class="equipment-table-actions">
          <button class="ghost-btn small-btn equipment-open-btn" type="button" data-action="open-press-form-detail" data-id="${pressForm.id}">${t("openDetails")}</button>
          ${renderCrudActions("pressForms", pressForm.id)}
        </div>
      </td>
    </tr>
  `).join("") || renderTableEmptyState(9, t("nothingFound"), t("emptyAssets"));
}

function buildPressFormDetailMarkup(pressForm) {
  const currentCycles = Number(pressForm.currentCycles || 0);
  const cycleLimit = Number(pressForm.cycleLimit || 0);
  const cyclePercent = cycleLimit ? Math.min((currentCycles / cycleLimit) * 100, 100) : 0;
  const images = getPressFormDisplayImages(pressForm);
  const linkedOrders = state.workorders
    .filter((item) => recordObjectType(item) === "pressForm" && item.pressFormId === pressForm.id)
    .slice(0, 5);
  const linkedPm = state.pm
    .filter((item) => recordObjectType(item) === "pressForm" && item.pressFormId === pressForm.id)
    .slice(0, 5);
  const relatedParts = state.inventory
    .filter((item) => recordObjectType(item) === "pressForm")
    .slice(0, 5);

  return `
    <div class="asset-detail">
      <div class="asset-detail-hero">
        ${renderPressFormGallery(pressForm)}
        <div class="asset-detail-copy">
          <p class="eyebrow">${pressForm.id}</p>
          <h3>${pressForm.name}</h3>
          <p>${pressForm.model || "-"} - ${pressForm.location || "-"}</p>
          <div class="detail-pills">
            <span class="priority-pill priority-Medium">${t("field.cavityCount")}: ${pressForm.cavityCount || "-"}</span>
            <span class="priority-pill priority-High">${t("detailHealth")}: ${translateStatus(pressForm.health)}</span>
            <span class="priority-pill priority-Low">${formatNumber(currentCycles)} / ${formatNumber(cycleLimit)}</span>
            <span class="priority-pill priority-Medium">${images.length} ${t("assetCountPhotos")}</span>
          </div>
        </div>
      </div>
      <div class="detail-grid">
        <section class="detail-card">
          <h4>${t("pressFormProfile")}</h4>
          <div class="detail-meta">
            <span><strong>${t("field.model")}:</strong> ${pressForm.model || "-"}</span>
            <span><strong>${t("field.serialNumber")}:</strong> ${pressForm.serialNumber || "-"}</span>
            <span><strong>${t("field.installDate")}:</strong> ${pressForm.installDate || "-"}</span>
            <span><strong>${t("thLocation")}:</strong> ${pressForm.location || "-"}</span>
          </div>
          <p>${pressForm.notes || "-"}</p>
          <div class="mini-kpis">
            <div class="mini-kpi"><strong>${t("field.currentCycles")}</strong><span>${formatNumber(currentCycles)}</span><small>${cyclePercent.toFixed(1)}%</small></div>
            <div class="mini-kpi"><strong>${t("field.cycleLimit")}</strong><span>${formatNumber(cycleLimit)}</span><small>${t("field.cavityCount")}: ${pressForm.cavityCount || "-"}</small></div>
            <div class="mini-kpi"><strong>${t("detailHealth")}</strong><span>${translateStatus(pressForm.health)}</span><small>${pressForm.id}</small></div>
          </div>
          <div class="chart-bar ${cyclePercent >= 85 ? "warning" : "success"}"><span style="width:${cyclePercent}%"></span></div>
          ${renderEntityQrCard("pressForm", pressForm.id)}
        </section>
        <section class="detail-card">
          <h4>${t("relatedParts")}</h4>
          <div class="stack-list compact">
            ${relatedParts.map((part) => `<div class="stack-row compact"><strong>${part.name}</strong><span>${part.onHand}/${part.minQty}</span></div>`).join("") || `<span>${t("noRelatedParts")}</span>`}
          </div>
        </section>
        <section class="detail-card">
          <h4>${t("linkedWorkOrders")}</h4>
          <div class="stack-list compact">
            ${linkedOrders.map((item) => `<div class="stack-row compact"><strong>${item.title}</strong><span>${translateStatus(item.status)}</span></div>`).join("") || `<span>${t("noLinkedWorkOrders")}</span>`}
          </div>
        </section>
        <section class="detail-card">
          <h4>${t("linkedPm")}</h4>
          <div class="stack-list compact">
            ${linkedPm.map((item) => `<div class="stack-row compact"><strong>${item.title}</strong><span>${item.nextDue}</span></div>`).join("") || `<span>${t("noLinkedPm")}</span>`}
          </div>
        </section>
        <section class="detail-card full">
          <h4>${t("auditTitle")}</h4>
          ${renderEntityAudit(pressForm.id)}
        </section>
      </div>
    </div>
  `;
}

function openPressFormDetailModal(pressFormId) {
  const pressForm = getPressForm(pressFormId);
  if (!pressForm) return;

  assetDetailModalTitle.textContent = `${t("pressFormCard")} - ${pressForm.name}`;
  assetDetailModalBody.innerHTML = buildPressFormDetailMarkup(pressForm);
  assetDetailModal.showModal();
}

function renderPressFormTableThumb(pressForm) {
  const images = getPressFormDisplayImages(pressForm);
  const thumb = images[0]
    ? `<div class="equipment-table-thumb"><img src="${images[0]}" alt="${pressForm.name}"></div>`
    : `<div class="equipment-table-thumb equipment-table-thumb-placeholder">${pressForm.name.slice(0, 1)}</div>`;
  return `
    <div class="equipment-thumb-cell">
      ${thumb}
      <span class="equipment-photo-count">${images.length} ${t("assetCountPhotos")}</span>
    </div>
  `;
}

function renderPressFormGallery(pressForm) {
  const images = getPressFormDisplayImages(pressForm);
  if (!images.length) {
    return `<div class="asset-photo asset-photo-placeholder">${pressForm.name.slice(0, 1)}</div>`;
  }

  const thumbs = images.length > 1
    ? `<div class="asset-thumbs">${images.slice(0, 4).map((src, index) => `<div class="asset-thumb"><img src="${src}" alt="${pressForm.name} ${index + 1}"></div>`).join("")}</div>`
    : "";

  return `
    <div class="asset-gallery">
      <div class="asset-photo"><img src="${images[0]}" alt="${pressForm.name}"></div>
      ${thumbs}
    </div>
  `;
}

function compareAssetsBySelection(a, b) {
  const healthRank = { Critical: 0, Warning: 1, Stable: 2 };
  const criticalityRank = { A: 0, B: 1, C: 2, D: 3, "-": 4, "": 4 };
  switch (assetSort.value || "name-asc") {
    case "name-desc":
      return b.name.localeCompare(a.name);
    case "location":
      return a.location.localeCompare(b.location) || a.name.localeCompare(b.name);
    case "health":
      return (healthRank[a.health] ?? 99) - (healthRank[b.health] ?? 99) || a.name.localeCompare(b.name);
    case "criticality":
      return (criticalityRank[String(a.criticality || "").toUpperCase()] ?? 99) - (criticalityRank[String(b.criticality || "").toUpperCase()] ?? 99) || a.name.localeCompare(b.name);
    case "name-asc":
    default:
      return a.name.localeCompare(b.name);
  }
}

function renderAssetTableThumb(asset) {
  const images = getAssetDisplayImages(asset);
  const thumb = images[0]
    ? `<div class="equipment-table-thumb"><img src="${images[0]}" alt="${asset.name}"></div>`
    : `<div class="equipment-table-thumb equipment-table-thumb-placeholder">${asset.name.slice(0, 1)}</div>`;
  return `
    <div class="equipment-thumb-cell">
      ${thumb}
      <span class="equipment-photo-count">${images.length} ${t("assetCountPhotos")}</span>
    </div>
  `;
}

function renderAssetGallery(asset) {
  const images = getAssetDisplayImages(asset);
  if (!images.length) {
    return `<div class="asset-photo asset-photo-placeholder">${asset.name.slice(0, 1)}</div>`;
  }

  const thumbs = images.length > 1
    ? `<div class="asset-thumbs">${images.slice(0, 4).map((src, index) => `<div class="asset-thumb"><img src="${src}" alt="${asset.name} ${index + 1}"></div>`).join("")}</div>`
    : "";

  return `
    <div class="asset-gallery">
      <div class="asset-photo"><img src="${images[0]}" alt="${asset.name}"></div>
      ${thumbs}
    </div>
  `;
}

function getAssetFaultOverview(assetId) {
  const workorders = state.workorders
    .filter((item) => recordObjectType(item) === "asset" && item.assetId === assetId)
    .map((item) => ({
      ...item,
      dateKey: item.faultStart || item.dueDate || "",
      active: !isWorkorderComplete(item.status)
    }));
  const requests = state.requests
    .filter((item) => recordObjectType(item) === "asset" && item.assetId === assetId)
    .map((item) => ({
      ...item,
      dateKey: item.createdAt || "",
      active: item.status !== "Approved"
    }));

  return [...workorders, ...requests].sort((a, b) => String(b.dateKey).localeCompare(String(a.dateKey)));
}

function getAssetNextPm(assetId) {
  return state.pm
    .filter((item) => recordObjectType(item) === "asset" && item.assetId === assetId)
    .sort((a, b) => String(a.nextDue || "").localeCompare(String(b.nextDue || "")))[0] || null;
}

function getAssetUsedPartsOverview(assetId) {
  const entries = [...state.workorders, ...state.pm]
    .filter((item) => recordObjectType(item) === "asset" && item.assetId === assetId)
    .flatMap((item) => normalizeUsedParts(item.usedParts));
  const partsById = new Map();

  entries.forEach((usedPart) => {
    const previous = partsById.get(usedPart.inventoryId);
    if (previous) {
      previous.qty += Number(usedPart.qty || 0);
      return;
    }
    partsById.set(usedPart.inventoryId, { ...usedPart, qty: Number(usedPart.qty || 0) });
  });

  return [...partsById.values()].sort((a, b) => b.qty - a.qty);
}

function renderAssetFaultOverview(faults) {
  if (!faults.length) return `<p class="asset-snapshot-empty">${t("assetNoFaults")}</p>`;

  return `
    <div class="asset-snapshot-list">
      ${faults.slice(0, 3).map((item) => {
        const statusClass = String(item.status || "Open").toLowerCase().replaceAll(" ", "-");
        return `
          <div class="asset-snapshot-row">
            <strong>${item.title}</strong>
            <span>${formatDailyFaultDate(item.dateKey)} <em class="status-pill status-${statusClass}">${translateStatus(item.status)}</em></span>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderAssetMaintenanceSnapshot(asset, compact = false) {
  const faults = getAssetFaultOverview(asset.id);
  const activeFaults = faults.filter((item) => item.active).length;
  const nextPm = getAssetNextPm(asset.id);
  const usedParts = getAssetUsedPartsOverview(asset.id).slice(0, compact ? 3 : 5);
  const healthTone = asset.health === "Critical" ? "Critical" : asset.health === "Warning" ? "High" : "Medium";

  return `
    <section class="asset-maintenance-snapshot ${compact ? "compact" : ""}">
      <article class="asset-snapshot-card asset-snapshot-health">
        <span>${t("assetSnapshot")}</span>
        <strong>${translateStatus(asset.health)}</strong>
        <div>
          <em class="priority-pill priority-${healthTone}">${t("detailCriticality")}: ${asset.criticality || "-"}</em>
          <em>${t("assetOpenFaults")}: ${activeFaults}</em>
        </div>
      </article>
      <article class="asset-snapshot-card">
        <span>${t("assetRecentFaults")}</span>
        ${renderAssetFaultOverview(faults)}
      </article>
      <article class="asset-snapshot-card">
        <span>${t("assetNextPm")}</span>
        ${nextPm
          ? `<strong>${nextPm.title}</strong><p>${nextPm.nextDue} - ${formatPmFrequency(nextPm)}</p>`
          : `<p class="asset-snapshot-empty">${t("assetNoPm")}</p>`}
      </article>
      <article class="asset-snapshot-card asset-snapshot-parts">
        <span>${t("field.usedParts")}</span>
        ${usedParts.length ? renderUsedParts(usedParts) : `<p class="asset-snapshot-empty">${t("assetNoUsedParts")}</p>`}
      </article>
    </section>
  `;
}

function buildAssetDetailMarkup(asset) {
  const metrics = calculateMetricsForAsset(asset.id);
  const targets = getKpiTargets();
  const attachments = normalizeAssetAttachments(asset);
  const linkedOrders = state.workorders.filter((item) => item.assetId === asset.id).slice(0, 5);
  const linkedPm = state.pm.filter((item) => item.assetId === asset.id).slice(0, 5);
  const history = getRepairEvents()
    .filter((item) => item.assetId === asset.id)
    .sort((a, b) => new Date(b.failureStart) - new Date(a.failureStart))
    .slice(0, 5);
  const relatedParts = state.inventory.filter((item) => {
    const text = `${item.name} ${item.location} ${item.sku}`.toLowerCase();
    return text.includes(asset.category.toLowerCase().slice(0, 4)) || text.includes(asset.name.toLowerCase().split(" ")[0]);
  }).slice(0, 4);
  const images = getAssetDisplayImages(asset);

  return `
    <div class="asset-detail">
      <div class="asset-detail-hero">
        ${renderAssetGallery(asset)}
        <div class="asset-detail-copy">
          <p class="eyebrow">${asset.id}</p>
          <h3>${asset.name}</h3>
          <p>${asset.category} - ${asset.location}</p>
          <div class="detail-pills">
            <span class="priority-pill priority-Medium">${t("detailHealth")}: ${translateStatus(asset.health)}</span>
            <span class="priority-pill priority-High">${t("detailCriticality")}: ${asset.criticality || "-"}</span>
            <span class="priority-pill priority-Low">${images.length} ${t("assetCountPhotos")}</span>
          </div>
        </div>
      </div>
      ${images.length > 1 ? `<div class="asset-thumbs detail">${images.map((src, index) => `<div class="asset-thumb"><img src="${src}" alt="${asset.name} ${index + 1}"></div>`).join("")}</div>` : ""}
      ${renderAssetMaintenanceSnapshot(asset)}
      <div class="detail-grid">
        <section class="detail-card">
          <h4>${t("equipmentProfile")}</h4>
          <div class="detail-meta">
            <span><strong>${t("field.manufacturer")}:</strong> ${asset.manufacturer || "-"}</span>
            <span><strong>${t("field.model")}:</strong> ${asset.model || "-"}</span>
            <span><strong>${t("field.serialNumber")}:</strong> ${asset.serialNumber || "-"}</span>
            <span><strong>${t("field.installDate")}:</strong> ${asset.installDate || "-"}</span>
          </div>
          <p>${asset.notes || "-"}</p>
          <div class="mini-kpis">
            <div class="mini-kpi"><strong>MTBF</strong><span>${metrics.mtbf.toFixed(1)} ${t("hours")}</span><small>${t("targetWord")}: ${targets.mtbfHours} ${t("hours")}</small></div>
            <div class="mini-kpi"><strong>MTTR</strong><span>${metrics.mttr.toFixed(1)} ${t("hours")}</span><small>${t("targetWord")}: ${targets.mttrHours} ${t("hours")}</small></div>
            <div class="mini-kpi"><strong>OEE</strong><span>${(metrics.oee * 100).toFixed(1)}%</span><small>${t("targetWord")}: ${targets.oeePercent}%</small></div>
          </div>
          ${renderEntityQrCard("asset", asset.id)}
        </section>
        <section class="detail-card">
          <h4>${t("documentsTitle")}</h4>
          <div class="attachment-list">
            ${attachments.map((file) => `<a class="attachment-chip" href="${file.data}" download="${file.name}" target="_blank" rel="noreferrer">${file.name}</a>`).join("") || `<span>${t("noDocuments")}</span>`}
          </div>
          <h4>${t("relatedParts")}</h4>
          <div class="stack-list compact">
            ${relatedParts.map((part) => `<div class="stack-row compact"><strong>${part.name}</strong><span>${part.onHand}/${part.minQty}</span></div>`).join("") || `<span>${t("noRelatedParts")}</span>`}
          </div>
        </section>
        <section class="detail-card">
          <h4>${t("linkedWorkOrders")}</h4>
          <div class="stack-list compact">
            ${linkedOrders.map((item) => `<div class="stack-row compact"><strong>${item.title}</strong><span>${translateStatus(item.status)}</span></div>`).join("") || `<span>${t("noLinkedWorkOrders")}</span>`}
          </div>
        </section>
        <section class="detail-card">
          <h4>${t("linkedPm")}</h4>
          <div class="stack-list compact">
            ${linkedPm.map((item) => `<div class="stack-row compact"><strong>${item.title}</strong><span>${item.nextDue}</span></div>`).join("") || `<span>${t("noLinkedPm")}</span>`}
          </div>
        </section>
        <section class="detail-card full">
          <h4>${t("maintenanceHistory")}</h4>
          <div class="pm-list compact">
            ${history.map((event) => {
              const hours = calculateEventHours(event);
              return `<div class="pm-item"><strong>${event.reason}</strong><p>${formatDateTime(event.failureStart)} - ${hours.toFixed(1)} ${t("hours")}</p>${renderUsedParts(event.usedParts)}${renderPhotoReport(event.repairPhotos)}</div>`;
            }).join("") || `<span>${t("noMaintenanceHistory")}</span>`}
          </div>
        </section>
        <section class="detail-card full">
          <h4>${t("auditTitle")}</h4>
          ${renderEntityAudit(asset.id)}
        </section>
      </div>
    </div>
  `;
}

function buildAssetQuickDetailMarkup(asset) {
  const images = getAssetDisplayImages(asset);
  return `
    <div class="asset-quick-detail">
      <div class="asset-quick-hero">
        ${images[0]
          ? `<div class="asset-quick-photo"><img src="${images[0]}" alt="${asset.name}"></div>`
          : `<div class="asset-quick-photo asset-photo-placeholder">${asset.name.slice(0, 1)}</div>`}
        <div>
          <p class="eyebrow">${asset.id}</p>
          <h3>${asset.name}</h3>
          <p>${asset.category} - ${asset.location}</p>
        </div>
      </div>
      ${renderAssetMaintenanceSnapshot(asset, true)}
      <button class="ghost-btn asset-quick-open-btn" type="button" data-action="open-asset-detail" data-id="${asset.id}">${t("openDetails")}</button>
    </div>
  `;
}

function renderAssetDetail() {
  const panel = document.getElementById("asset-detail-panel");
  if (!panel) return;
  const asset = getSelectedAsset();
  if (!asset) {
    panel.innerHTML = `<div class="asset-detail-empty">${t("selectEquipmentHint")}</div>`;
    return;
  }

  panel.innerHTML = buildAssetQuickDetailMarkup(asset);
  bindCrudButtons(panel);
}

function openAssetDetailModal(assetId) {
  const asset = getAsset(assetId);
  if (!asset) return;

  assetDetailModalTitle.textContent = `${t("equipmentDetailsTitle")} - ${asset.name}`;
  assetDetailModalBody.innerHTML = buildAssetDetailMarkup(asset);
  assetDetailModal.showModal();
}

function renderRequests() {
  const visibleRequests = state.requests.filter((item) => {
    const combined = [item.title, item.requester, item.priority, item.status, item.note, equipmentSearchText(item.assetId)].join(" ");
    return !searchInput.value || matchesSearch(combined);
  });

  document.getElementById("requests-list").innerHTML = visibleRequests.map((item) => `
    <div class="pm-item">
      <strong>${item.title}</strong>
      <p>${item.requester} - ${item.createdAt}</p>
      <div>${renderEquipmentReference(item.assetId)}</div>
      <p><span class="priority-pill priority-${item.priority}">${translatePriority(item.priority)}</span> <span class="status-pill status-open">${translateStatus(item.status)}</span></p>
      <p>${item.note}</p>
      ${renderCrudActions("requests", item.id)}
    </div>
  `).join("") || renderEmptyState(t("requestsNotFound"), t("emptyAssets"));

  const statuses = ["New", "Approved", "Waiting"];
  const total = Math.max(state.requests.length, 1);
  document.getElementById("request-summary").innerHTML = statuses.map((status) => {
    const count = state.requests.filter((item) => item.status === status).length;
    const width = Math.round((count / total) * 100);
    return `
      <div class="stack-row">
        <strong>${translateStatus(status)}</strong>
        <span>${count} ${t("requestsWord")}</span>
        <div class="stack-bar"><span style="width:${width}%"></span></div>
      </div>
    `;
  }).join("");
}

function renderInventory() {
  const contextItems = state.inventory.filter(matchesCurrentObjectContext);
  const visibleItems = contextItems.filter((item) => {
    const combined = [item.name, item.sku, item.location].join(" ");
    return !searchInput.value || matchesSearch(combined);
  });
  setPanelCount("inventory-count", visibleItems.length, contextItems.length);

  const rows = visibleItems.map((item) => {
    const lowStock = item.onHand <= item.minQty;
    const images = normalizeInventoryImages(item);
    return `
      <tr>
        <td data-label="${t("thPart")}">
          <div class="inventory-part-cell">
            ${images[0]
              ? `<div class="inventory-thumb"><img src="${images[0]}" alt="${item.name}"></div>`
              : `<div class="inventory-thumb inventory-thumb-placeholder">${item.name.slice(0, 1)}</div>`}
            <div>
              <strong>${item.name}</strong>
              <div class="eyebrow">${images.length ? `${images.length} ${t("partCountPhotos")}` : t("noEquipmentPhoto")}</div>
            </div>
          </div>
        </td>
        <td data-label="${t("thSku")}">${item.sku}</td>
        <td data-label="${t("thOnHand")}">${item.onHand}</td>
        <td data-label="${t("thMinQty")}">${item.minQty}</td>
        <td data-label="${t("thLocation")}">${item.location}</td>
        <td data-label="${t("inventorySupplier")}">${item.supplier || "-"}</td>
        <td data-label="${t("inventoryPrice")}">${formatCurrency(item.unitCost || 0)}</td>
        <td data-label="${t("health")}"><span class="priority-pill ${lowStock ? "priority-Critical" : "priority-Medium"}">${lowStock ? t("reorder") : t("ok")}</span></td>
        <td data-label="${t("actionsColumn")}">
          <div class="inventory-actions-inline">
            ${renderStockMoveAction(item.id)}
            ${item.reorderUrl ? `
              <a class="ghost-btn icon-btn" href="${escapeHtml(item.reorderUrl)}" target="_blank" rel="noreferrer" title="${t("reorderAction")}" aria-label="${t("reorderAction")}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
              </a>
            ` : ""}
            ${renderCrudActions("inventory", item.id)}
          </div>
        </td>
      </tr>
    `;
  }).join("");

  document.getElementById("inventory-body").innerHTML = rows || renderTableEmptyState(9, t("inventoryNotFound"), t("emptyAssets"));
}

function isCriticalSparePart(item) {
  return item?.criticalPart === "Critical" || item?.usedInPm || Number(item?.onHand || 0) <= Number(item?.minQty || 0);
}

function renderCriticalParts() {
  const body = document.getElementById("critical-parts-body");
  if (!body) return;

  const contextItems = state.inventory.filter(matchesCurrentObjectContext).filter(isCriticalSparePart);
  const visibleItems = contextItems.filter((item) => {
    const combined = [item.name, item.sku, item.location, item.criticalPart, item.usedInPm ? t("field.usedParts") : ""].join(" ");
    return !searchInput.value || matchesSearch(combined);
  });
  setPanelCount("critical-parts-count", visibleItems.length, contextItems.length);

  const rows = visibleItems.map((item) => {
    const lowStock = Number(item.onHand || 0) <= Number(item.minQty || 0);
    const riskLabel = lowStock
      ? t("reorder")
      : item.criticalPart === "Critical"
        ? t("criticalPartOptions.Critical")
        : t("field.usedParts");
    const riskTone = lowStock ? "priority-Critical" : item.criticalPart === "Critical" ? "priority-High" : "priority-Medium";
    return `
      <tr>
        <td data-label="${t("thPart")}"><strong>${item.name}</strong></td>
        <td data-label="${t("thSku")}">${item.sku}</td>
        <td data-label="${t("thOnHand")}">${item.onHand}</td>
        <td data-label="${t("thMinQty")}">${item.minQty}</td>
        <td data-label="${t("thLocation")}">${item.location}</td>
        <td data-label="${t("inventorySupplier")}">${item.supplier || "-"}</td>
        <td data-label="${t("inventoryPrice")}">${formatCurrency(item.unitCost || 0)}</td>
        <td data-label="${t("criticalPartRisk")}"><span class="priority-pill ${riskTone}">${riskLabel}</span></td>
        <td data-label="${t("actionsColumn")}">
          <div class="inventory-actions-inline">
            ${renderStockMoveAction(item.id)}
            ${item.reorderUrl ? `
              <a class="ghost-btn icon-btn" href="${escapeHtml(item.reorderUrl)}" target="_blank" rel="noreferrer" title="${t("reorderAction")}" aria-label="${t("reorderAction")}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/></svg>
              </a>
            ` : ""}
            ${renderCrudActions("inventory", item.id)}
          </div>
        </td>
      </tr>
    `;
  }).join("");

  body.innerHTML = rows || renderTableEmptyState(9, t("criticalPartsNotFound"), t("emptyAssets"));
}

function renderPmList() {
  const upcoming = state.pm.filter(matchesCurrentObjectContext).filter(matchesCurrentUserTask).sort((a, b) => a.nextDue.localeCompare(b.nextDue));
  setPanelCount("pm-count", upcoming.length);
  const today = new Date(`${todayISO()}T00:00:00`);
  const isPressFormPm = currentObjectType() === "pressForm";
  const labels = isPressFormPm
    ? {
        task: t("thTitle"),
        repairType: t("field.repairType"),
        frequency: t("field.cycleInterval"),
        due: t("nextDue"),
        owner: t("owner"),
        actions: t("actionsColumn")
      }
    : {
        task: t("thTitle"),
        equipment: t("thAsset"),
        frequency: t("field.frequency"),
        due: t("nextDue"),
        owner: t("owner"),
        actions: t("actionsColumn")
      };

  document.getElementById("pm-list").innerHTML = `
    <div class="pm-list-header ${isPressFormPm ? "press-form-pm" : ""}">
      <span>${labels.task}</span>
      <span>${isPressFormPm ? labels.repairType : labels.equipment}</span>
      <span>${labels.frequency}</span>
      <span>${labels.due}</span>
      <span>${labels.owner}</span>
      <span>${labels.actions}</span>
    </div>
    ${upcoming.map((item) => {
      const dueDate = new Date(`${item.nextDue}T00:00:00`);
      const diffDays = Number.isNaN(dueDate.getTime())
        ? null
        : Math.round((dueDate - today) / (1000 * 60 * 60 * 24));
      const progress = diffDays === null ? 8 : Math.max(8, Math.min(((30 - Math.max(0, diffDays)) / 30) * 100, 100));
      const status = getPmDueStatus(diffDays);
      return `
        <article class="pm-list-row ${isPressFormPm ? "press-form-pm" : ""} ${status.tone}" data-pm-id="${escapeHtml(item.id)}">
          <div class="pm-title-cell" data-label="${labels.task}">
            <strong>${item.title}</strong>
            <span>${item.id}</span>
          </div>
          ${isPressFormPm
            ? `<div class="pm-repair-type-cell" data-label="${labels.repairType}"><span>${translateRepairType(item.repairType)}</span></div>`
            : `<div data-label="${labels.equipment}">${renderObjectReference(item)}</div>`}
          <div data-label="${labels.frequency}"><span class="pm-cycle-pill">${formatPmFrequency(item)}</span></div>
          <div class="pm-due-cell" data-label="${labels.due}">
            <strong>${item.nextDue}</strong>
            <span>${status.label}</span>
          </div>
          <div data-label="${labels.owner}">${item.owner}</div>
          <div class="pm-actions-cell" data-label="${labels.actions}">${renderCrudActions("pm", item.id)}</div>
          ${renderPmChecklist(item)}
          <div class="pm-list-progress"><span style="width:${progress}%"></span></div>
        </article>
      `;
    }).join("") || renderEmptyState(t("pmCalendarEmpty"))}
  `;
  document.querySelectorAll('[data-action="toggle-pm-checklist"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      togglePmChecklistStep(checkbox.dataset.pmId, checkbox.dataset.checkId, checkbox.checked);
    });
  });
  document.querySelectorAll('[data-action="update-pm-checklist-response"]').forEach((select) => {
    select.addEventListener("change", () => {
      updatePmChecklistStep(select.dataset.pmId, select.dataset.checkId, { response: select.value });
    });
  });
  document.querySelectorAll('[data-action="update-pm-checklist-comment"]').forEach((input) => {
    input.addEventListener("change", () => {
      updatePmChecklistStep(input.dataset.pmId, input.dataset.checkId, { comment: input.value });
    });
  });
  renderPmCalendar();
}

function getPmDueStatus(diffDays) {
  if (diffDays === null) return { tone: "planned", label: "-" };
  if (diffDays < 0) return { tone: "overdue", label: t("pmOverdue") };
  if (diffDays === 0) return { tone: "today", label: t("pmDueToday") };
  if (diffDays <= 7) return { tone: "soon", label: `${diffDays} ${t("daysLeft")}` };
  return { tone: "planned", label: `${diffDays} ${t("daysLeft")}` };
}

function renderPmCalendar() {
  const host = document.getElementById("pm-calendar");
  if (!host) return;
  if (!["month", "week"].includes(pmCalendarMode)) pmCalendarMode = "month";
  const today = new Date(`${todayISO()}T00:00:00`);
  const locale = currentLanguage === "ru" ? "ru-RU" : currentLanguage === "uz" ? "uz-Latn-UZ" : "en-US";
  const dayMs = 1000 * 60 * 60 * 24;
  const toDateKey = (date) => [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
  const dueItems = state.pm
    .filter(matchesCurrentObjectContext)
    .filter(matchesCurrentUserTask)
    .map((item) => ({
      ...item,
      dueDateObj: new Date(`${item.nextDue}T00:00:00`)
    }))
    .filter((item) => !Number.isNaN(item.dueDateObj.getTime()))
    .sort((a, b) => a.dueDateObj - b.dueDateObj);
  const hasCurrentMonthItems = dueItems.some((item) =>
    item.dueDateObj.getFullYear() === today.getFullYear() &&
    item.dueDateObj.getMonth() === today.getMonth()
  );
  const nextVisibleItem = dueItems.find((item) => item.dueDateObj >= today) || dueItems[0];
  const calendarBaseDate = hasCurrentMonthItems || !nextVisibleItem ? today : nextVisibleItem.dueDateObj;
  const monthStart = new Date(calendarBaseDate.getFullYear(), calendarBaseDate.getMonth(), 1);
  const monthEnd = new Date(calendarBaseDate.getFullYear(), calendarBaseDate.getMonth() + 1, 0);
  const leadingEmptyCells = (monthStart.getDay() + 6) % 7;
  const totalCells = Math.ceil((leadingEmptyCells + monthEnd.getDate()) / 7) * 7;
  const weekdayLabels = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(2026, 0, 5 + index);
    return new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date);
  });
  const itemsByDay = dueItems.reduce((map, item) => {
    if (item.dueDateObj.getFullYear() !== monthStart.getFullYear() || item.dueDateObj.getMonth() !== monthStart.getMonth()) return map;
    const day = item.dueDateObj.getDate();
    if (!map.has(day)) map.set(day, []);
    map.get(day).push(item);
    return map;
  }, new Map());
  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(monthStart);
  const renderCalendarToolbar = (label) => `
    <div class="pm-calendar-toolbar">
      <strong>${escapeHtml(label)}</strong>
      <div class="pm-calendar-mode" role="group" aria-label="${escapeHtml(t("pmCalendarTitle"))}">
        <button class="${pmCalendarMode === "month" ? "active" : ""}" type="button" data-pm-calendar-mode="month">${t("pmMonthView")}</button>
        <button class="${pmCalendarMode === "week" ? "active" : ""}" type="button" data-pm-calendar-mode="week">${t("pmWeekView")}</button>
      </div>
    </div>
  `;
  const renderCalendarEvent = (item, visibleLimitText = true) => {
    const diffDays = Math.round((item.dueDateObj - today) / dayMs);
    const status = getPmDueStatus(diffDays);
    const progress = getPmChecklistProgress(item);
    return `
      <button class="pm-calendar-event ${status.tone}" type="button" data-action="focus-pm" data-pm-id="${escapeHtml(item.id)}">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(formatPmFrequency(item))}${visibleLimitText ? ` - ${progress.percent}%` : ""}</span>
      </button>
    `;
  };
  const bindCalendarModeButtons = () => {
    host.querySelectorAll("[data-pm-calendar-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        pmCalendarMode = button.dataset.pmCalendarMode || "month";
        renderPmCalendar();
      });
    });
  };
  const bindCalendarFocusButtons = () => {
    host.querySelectorAll('[data-action="focus-pm"]').forEach((button) => {
      button.addEventListener("click", () => {
        const row = [...document.querySelectorAll(".pm-list-row")].find((item) => item.dataset.pmId === button.dataset.pmId);
        row?.scrollIntoView({ behavior: "smooth", block: "center" });
        row?.classList.add("pm-row-flash");
        window.setTimeout(() => row?.classList.remove("pm-row-flash"), 1200);
      });
    });
  };

  if (pmCalendarMode === "week") {
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    const weekDays = Array.from({ length: 7 }, (_, index) => new Date(weekStart.getTime() + index * dayMs));
    const weekEnd = weekDays[6];
    const itemsByDate = dueItems.reduce((map, item) => {
      const key = toDateKey(item.dueDateObj);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
      return map;
    }, new Map());
    const rangeLabel = `${new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short" }).format(weekStart)} - ${new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" }).format(weekEnd)}`;
    const weekCells = weekDays.map((date) => {
      const items = itemsByDate.get(toDateKey(date)) || [];
      const isToday = toDateKey(date) === toDateKey(today);
      return `
        <div class="pm-calendar-cell ${isToday ? "today" : ""} ${items.length ? "has-events" : ""}">
          <div class="pm-calendar-date">${date.getDate()}</div>
          <div class="pm-calendar-events">
            ${items.slice(0, 6).map((item) => renderCalendarEvent(item)).join("")}
            ${items.length > 6 ? `<span class="pm-calendar-more">+${items.length - 6}</span>` : ""}
          </div>
        </div>
      `;
    }).join("");
    host.innerHTML = `
      ${renderCalendarToolbar(rangeLabel)}
      <div class="pm-calendar-grid week-mode">
        ${weekdayLabels.map((day) => `<div class="pm-calendar-weekday">${day}</div>`).join("")}
        ${weekCells}
      </div>
    `;
    bindCalendarFocusButtons();
    bindCalendarModeButtons();
    return;
  }

  const cells = Array.from({ length: totalCells }, (_, index) => {
    const day = index - leadingEmptyCells + 1;
    if (day < 1 || day > monthEnd.getDate()) {
      return `<div class="pm-calendar-cell empty"></div>`;
    }
    const isToday = monthStart.getFullYear() === today.getFullYear() && monthStart.getMonth() === today.getMonth() && day === today.getDate();
    const items = itemsByDay.get(day) || [];
    return `
      <div class="pm-calendar-cell ${isToday ? "today" : ""} ${items.length ? "has-events" : ""}">
        <div class="pm-calendar-date">${day}</div>
        <div class="pm-calendar-events">
          ${items.slice(0, 4).map((item) => {
            const diffDays = Math.round((item.dueDateObj - today) / (1000 * 60 * 60 * 24));
            const status = getPmDueStatus(diffDays);
            const progress = getPmChecklistProgress(item);
            return `
              <button class="pm-calendar-event ${status.tone}" type="button" data-action="focus-pm" data-pm-id="${escapeHtml(item.id)}">
                <strong>${escapeHtml(item.title)}</strong>
                <span>${formatPmFrequency(item)} · ${progress.percent}%</span>
              </button>
            `;
          }).join("")}
          ${items.length > 4 ? `<span class="pm-calendar-more">+${items.length - 4}</span>` : ""}
        </div>
      </div>
    `;
  }).join("");

  host.innerHTML = `
    ${renderCalendarToolbar(monthLabel)}
    <div class="pm-calendar-grid">
      ${weekdayLabels.map((day) => `<div class="pm-calendar-weekday">${day}</div>`).join("")}
      ${cells}
    </div>
  `;
  bindCalendarFocusButtons();
  bindCalendarModeButtons();
}

function renderUsers() {
  const visibleUsers = state.users.filter((user) => {
    const combined = [user.name, user.role, user.team, user.shift].join(" ");
    return !searchInput.value || matchesSearch(combined);
  });
  setPanelCount("users-count", visibleUsers.length, state.users.length);

  document.getElementById("users-grid").innerHTML = visibleUsers.map((user) => `
    <article class="asset-card">
      <p class="eyebrow">${user.id}</p>
      <h3>${user.name}</h3>
      <p>${translateRole(user.role)} - ${user.team}</p>
      <p>${t("field.username")}: <strong>${user.username || "-"}</strong></p>
      <p>${t("field.userStatus")}: <strong>${translateStatus(user.userStatus || "Active")}</strong></p>
      <p>${t("shift")}: ${user.shift}</p>
      <p>${t("workload")}: <strong>${user.workload}</strong> ${t("activeTasks")}</p>
      ${renderSettingsUserActions(user)}
    </article>
  `).join("") || `<article class="asset-card empty-card">${renderEmptyState(t("usersNotFound"), t("emptyAssets"))}</article>`;
}

function userInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return (parts.map((part) => part[0]).join("") || "?").toUpperCase();
}

function roleAccessSummary(role) {
  const normalizedRole = normalizeRoleKey(role);
  const translated = t(`roleAccess.${normalizedRole}`);
  return translated === `roleAccess.${normalizedRole}` ? "" : translated;
}

function renderSettingsUserActions(user) {
  if (!canEditEntity("users")) return "";
  const deleteDisabled = !canDeleteUser(user.id, false);
  return `
    <div class="row-actions settings-user-actions">
      <button
        class="ghost-btn icon-btn"
        type="button"
        title="${t("editBtn")}"
        aria-label="${t("editBtn")}"
        data-action="edit-entity"
        data-entity="users"
        data-id="${escapeHtml(user.id)}"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20h4l10-10-4-4L4 16v4zm12.7-11.3 1.6-1.6a1 1 0 0 0 0-1.4l-1.3-1.3a1 1 0 0 0-1.4 0L14 6l2.7 2.7z"/>
        </svg>
      </button>
      <button
        class="ghost-btn icon-btn danger-btn"
        type="button"
        title="${t("deleteBtn")}"
        aria-label="${t("deleteBtn")}"
        data-action="delete-entity"
        data-entity="users"
        data-id="${escapeHtml(user.id)}"
        ${deleteDisabled ? "disabled" : ""}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM7 9h2v8H7V9zm1 11h8a2 2 0 0 0 2-2V8H6v10a2 2 0 0 0 2 2z"/>
        </svg>
      </button>
    </div>
  `;
}

function renderSettingsUsers() {
  const list = document.getElementById("settings-users-list");
  const count = document.getElementById("settings-users-count");
  const canManageUsers = canEditEntity("users");
  if (count) count.textContent = formatNumber(state.users.length);
  if (settingsAddUserBtn) settingsAddUserBtn.disabled = !canManageUsers;
  if (!list) return;

  list.innerHTML = state.users.map((user) => {
    const isActive = (user.userStatus || "Active") === "Active";
    return `
      <article class="settings-user-card">
        <span class="settings-user-avatar">${escapeHtml(userInitials(user.name))}</span>
        <div class="settings-user-main">
          <strong>${escapeHtml(user.name || "-")}</strong>
          <span>@${escapeHtml(user.username || "-")} · ${escapeHtml(user.team || "-")} · ${translateStatus(user.shift || "Day")}</span>
        </div>
        <span class="settings-role-pill">${escapeHtml(translateRole(user.role))}</span>
        <span class="status-pill ${isActive ? "status-approved" : "status-on-hold"}">${translateStatus(user.userStatus || "Active")}</span>
        <span class="settings-access-copy">${escapeHtml(roleAccessSummary(user.role))}</span>
        ${renderSettingsUserActions(user)}
      </article>
    `;
  }).join("") || renderEmptyState(t("usersNotFound"));
}

function renderSettings() {
  if (settingsLanguageSwitcher) settingsLanguageSwitcher.value = currentLanguage;
  const companySettings = getCompanySettings();
  const user = getCurrentUser();
  const userName = document.getElementById("settings-user-name");
  const userRole = document.getElementById("settings-user-role");
  const backupStatus = document.getElementById("settings-backup-status");
  const storageMode = document.getElementById("settings-storage-mode");
  const canBackup = canEditEntity("users");
  const telegramSettings = getTelegramSettings();

  if (settingsCompanyNameInput) settingsCompanyNameInput.value = companySettings.companyName;
  if (settingsCompanySiteInput) {
    settingsCompanySiteInput.value = companySettings.siteName;
    settingsCompanySiteInput.placeholder = t("plantLabel");
  }
  if (userName) userName.textContent = user?.name || t("sessionGuest");
  if (userRole) userRole.textContent = `${t("sessionRoleLabel")}: ${user?.role || "-"}`;
  if (backupStatus) backupStatus.textContent = canBackup ? t("settingsBackupReady") : t("settingsBackupRestricted");
  if (settingsBackupBtn) {
    settingsBackupBtn.disabled = !canBackup;
    setButtonLabel(settingsBackupBtn, t("backupButton"));
  }
  if (storageMode) {
    storageMode.textContent = activeApiBase ? `${t("settingsStorageBackend")} - ${activeApiBase}` : t("settingsStorageLocal");
  }
  if (settingsTelegramEnabled) settingsTelegramEnabled.checked = telegramSettings.enabled;
  if (settingsTelegramToken) settingsTelegramToken.value = telegramSettings.botToken;
  if (settingsTelegramChatId) settingsTelegramChatId.value = telegramSettings.chatId;
  if (settingsTelegramSaveBtn) settingsTelegramSaveBtn.disabled = !canBackup;
  if (settingsTelegramTestBtn) settingsTelegramTestBtn.disabled = !canBackup;
  if (settingsTelegramStatus) {
    settingsTelegramStatus.textContent = t("settingsTelegramHelp");
    settingsTelegramStatus.classList.remove("is-ok", "is-error");
  }
  renderSettingsUsers();
}

function calculateOperationalMetrics() {
  const productionRuns = Array.isArray(state.productionRuns) ? state.productionRuns : [];
  const failureEvents = getRepairEvents();

  const plannedMinutes = productionRuns.reduce((sum, run) => sum + Number(run.plannedMinutes || 0), 0);
  const downtimeMinutes = productionRuns.reduce((sum, run) => sum + Number(run.downtimeMinutes || 0), 0);
  const runtimeMinutes = Math.max(plannedMinutes - downtimeMinutes, 0);
  const runtimeSeconds = runtimeMinutes * 60;

  const totalCount = productionRuns.reduce((sum, run) => sum + Number(run.totalCount || 0), 0);
  const goodCount = productionRuns.reduce((sum, run) => sum + Number(run.goodCount || 0), 0);
  const idealSecondsProduced = productionRuns.reduce((sum, run) => {
    return sum + (Number(run.idealCycleTimeSeconds || 0) * Number(run.totalCount || 0));
  }, 0);

  const failureDurationsMinutes = failureEvents.reduce((sum, event) => {
    const start = new Date(event.failureStart).getTime();
    const end = new Date(event.repairEnd).getTime();
    if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return sum;
    return sum + ((end - start) / (1000 * 60));
  }, 0);

  const failureCount = failureEvents.length;
  const failureCountForAverage = Math.max(failureCount, 1);
  const uptimeHours = runtimeMinutes / 60;
  const repairHours = failureDurationsMinutes / 60;

  const mtbf = uptimeHours / failureCountForAverage;
  const mttr = failureCount ? repairHours / failureCount : 0;

  const availability = plannedMinutes > 0 ? runtimeMinutes / plannedMinutes : 0;
  const performance = runtimeSeconds > 0 ? idealSecondsProduced / runtimeSeconds : 0;
  const quality = totalCount > 0 ? goodCount / totalCount : 0;
  const oee = availability * performance * quality;

  return {
    mtbf,
    mttr,
    oee,
    availability,
    performance,
    quality,
    failureCount,
    runtimeHours: uptimeHours
  };
}

function calculateMetricsForAsset(assetId) {
  const runs = state.productionRuns.filter((run) => run.assetId === assetId);
  const events = getRepairEvents().filter((event) => event.assetId === assetId);

  const plannedMinutes = runs.reduce((sum, run) => sum + Number(run.plannedMinutes || 0), 0);
  const downtimeMinutes = runs.reduce((sum, run) => sum + Number(run.downtimeMinutes || 0), 0);
  const runtimeMinutes = Math.max(plannedMinutes - downtimeMinutes, 0);
  const runtimeSeconds = runtimeMinutes * 60;
  const totalCount = runs.reduce((sum, run) => sum + Number(run.totalCount || 0), 0);
  const goodCount = runs.reduce((sum, run) => sum + Number(run.goodCount || 0), 0);
  const idealSecondsProduced = runs.reduce((sum, run) => sum + (Number(run.idealCycleTimeSeconds || 0) * Number(run.totalCount || 0)), 0);
  const repairMinutes = events.reduce((sum, event) => {
    const start = new Date(event.failureStart).getTime();
    const end = new Date(event.repairEnd).getTime();
    if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return sum;
    return sum + ((end - start) / (1000 * 60));
  }, 0);
  const failureCount = events.length;
  const failureCountForAverage = Math.max(failureCount, 1);
  const runtimeHours = runtimeMinutes / 60;
  const repairHours = repairMinutes / 60;
  const availability = plannedMinutes > 0 ? runtimeMinutes / plannedMinutes : 0;
  const performance = runtimeSeconds > 0 ? idealSecondsProduced / runtimeSeconds : 0;
  const quality = totalCount > 0 ? goodCount / totalCount : 0;
  const oee = plannedMinutes > 0 && runtimeSeconds > 0 && totalCount > 0
    ? availability * performance * quality
    : 0;

  return {
    mtbf: runtimeHours / failureCountForAverage,
    mttr: failureCount ? repairHours / failureCount : 0,
    oee,
    availability,
    performance,
    quality,
    failureCount,
    runtimeHours
  };
}

function getRepairEvents() {
  const manualEvents = (Array.isArray(state.failureEvents) ? state.failureEvents : [])
    .map((event) => ({
      ...event,
      sourceEntity: "failure",
      sourceId: event.id
    }));

  const workorderEvents = (Array.isArray(state.workorders) ? state.workorders : [])
    .map((order) => ({
      ...order,
      metricStart: order.faultStart,
      metricEnd: order.faultEnd
    }))
    .filter((order) => order.assetId && order.metricStart && order.metricEnd)
    .map((order) => ({
      id: `WO-${order.id}`,
      sourceEntity: "workorders",
      sourceId: order.id,
      assetId: order.assetId,
      failureStart: order.metricStart,
      repairEnd: order.metricEnd,
      reason: `${order.title}${order.actionPlan ? ` - ${order.actionPlan}` : order.description ? ` - ${order.description}` : ""}`,
      usedParts: normalizeUsedParts(order.usedParts),
      repairPhotos: normalizeWorkorderPhotos(order)
    }));

  return [...manualEvents, ...workorderEvents].filter((event) => {
    const start = new Date(event.failureStart).getTime();
    const end = new Date(event.repairEnd).getTime();
    return event.assetId && !Number.isNaN(start) && !Number.isNaN(end) && end > start;
  });
}

function calculateEventHours(event) {
  const start = new Date(event.failureStart).getTime();
  const end = new Date(event.repairEnd).getTime();
  return end > start ? (end - start) / (1000 * 60 * 60) : 0;
}

function normalizeKpiTargets(targets = {}) {
  const defaults = {
    mtbfHours: 48,
    mttrHours: 4,
    oeePercent: 85,
    availabilityPercent: 90,
    performancePercent: 95,
    qualityPercent: 98,
    completionPercent: 80,
    approvalPercent: 70
  };

  return Object.fromEntries(
    Object.entries(defaults).map(([key, value]) => {
      const nextValue = Number(targets[key]);
      return [key, Number.isFinite(nextValue) && nextValue >= 0 ? nextValue : value];
    })
  );
}

function getKpiTargets() {
  state.kpiTargets = normalizeKpiTargets(state.kpiTargets);
  return state.kpiTargets;
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));
}

function progressToTarget(actual, target, higherIsBetter = true) {
  if (!Number.isFinite(actual) || !Number.isFinite(target) || target <= 0) return 0;
  if (!higherIsBetter) {
    if (actual <= 0) return 100;
    return clampPercent((target / actual) * 100);
  }
  return clampPercent((actual / target) * 100);
}

function getTargetStatus(actual, target, higherIsBetter = true) {
  if (!Number.isFinite(actual) || !Number.isFinite(target) || target <= 0) {
    return { tone: "miss", label: t("targetMiss") };
  }

  if (higherIsBetter) {
    if (actual >= target) return { tone: "met", label: t("targetMet") };
    if (actual >= target * 0.85) return { tone: "watch", label: t("targetWatch") };
    return { tone: "miss", label: t("targetMiss") };
  }

  if (actual <= target) return { tone: "met", label: t("targetMet") };
  if (actual <= target * 1.25) return { tone: "watch", label: t("targetWatch") };
  return { tone: "miss", label: t("targetMiss") };
}

function formatKpiValue(value, unit = "") {
  if (unit === "%") return `${Number(value || 0).toFixed(1)}%`;
  const suffix = unit ? ` ${unit}` : "";
  return `${Number(value || 0).toFixed(1)}${suffix}`;
}

function getTargetDefinitions(metrics = calculateOperationalMetrics()) {
  const targets = getKpiTargets();
  return [
    {
      key: "mtbfHours",
      label: "MTBF",
      inputLabel: t("kpiTargetMtbf"),
      actual: metrics.mtbf,
      target: targets.mtbfHours,
      unit: t("hours"),
      higherIsBetter: true
    },
    {
      key: "mttrHours",
      label: "MTTR",
      inputLabel: t("kpiTargetMttr"),
      actual: metrics.mttr,
      target: targets.mttrHours,
      unit: t("hours"),
      higherIsBetter: false
    },
    {
      key: "oeePercent",
      label: "OEE",
      inputLabel: t("kpiTargetOee"),
      actual: metrics.oee * 100,
      target: targets.oeePercent,
      unit: "%",
      higherIsBetter: true
    },
    {
      key: "availabilityPercent",
      label: "A",
      inputLabel: t("kpiTargetAvailability"),
      actual: metrics.availability * 100,
      target: targets.availabilityPercent,
      unit: "%",
      higherIsBetter: true
    },
    {
      key: "performancePercent",
      label: "P",
      inputLabel: t("kpiTargetPerformance"),
      actual: metrics.performance * 100,
      target: targets.performancePercent,
      unit: "%",
      higherIsBetter: true
    },
    {
      key: "qualityPercent",
      label: "Q",
      inputLabel: t("kpiTargetQuality"),
      actual: metrics.quality * 100,
      target: targets.qualityPercent,
      unit: "%",
      higherIsBetter: true
    }
  ];
}

function renderAnalyticsFilterOptions() {
  if (!analyticsAssetFilter) return;

  analyticsAssetFilter.innerHTML = `
    <option value="all">${t("allEquipment")}</option>
    ${state.assets.map((asset) => `<option value="${asset.id}" ${analyticsAssetFilter.value === asset.id ? "selected" : ""}>${asset.name}</option>`).join("")}
  `;
}

function renderKpiTargetsBoard(metrics) {
  const board = document.getElementById("kpi-targets-board");
  if (!board) return;

  const definitions = getTargetDefinitions(metrics);
  const targetInputs = [
    { key: "mtbfHours", label: t("kpiTargetMtbf"), unit: t("hours") },
    { key: "mttrHours", label: t("kpiTargetMttr"), unit: t("hours") },
    { key: "oeePercent", label: t("kpiTargetOee"), unit: "%" },
    { key: "availabilityPercent", label: t("kpiTargetAvailability"), unit: "%" },
    { key: "performancePercent", label: t("kpiTargetPerformance"), unit: "%" },
    { key: "qualityPercent", label: t("kpiTargetQuality"), unit: "%" },
    { key: "completionPercent", label: t("kpiTargetCompletion"), unit: "%" },
    { key: "approvalPercent", label: t("kpiTargetApproval"), unit: "%" }
  ];
  const targets = getKpiTargets();
  const canManageTargets = canEditEntity("report");

  board.innerHTML = `
    <section class="kpi-targets-panel">
      <div class="kpi-targets-header">
        <div>
          <p class="eyebrow">${t("analyticsSummaryTitle")}</p>
          <h3>${t("kpiTargetsTitle")}</h3>
          <p>${t("kpiTargetsSubtitle")}</p>
        </div>
      </div>
      <div class="kpi-target-grid">
        ${definitions.map((item) => {
          const status = getTargetStatus(item.actual, item.target, item.higherIsBetter);
          const progress = progressToTarget(item.actual, item.target, item.higherIsBetter);
          return `
            <article class="kpi-target-card ${status.tone}">
              <div class="metric-top">
                <p class="eyebrow">${item.label}</p>
                <span>${status.label}</span>
              </div>
              <div class="kpi-target-value">${formatKpiValue(item.actual, item.unit)}</div>
              <div class="target-row">
                <span>${t("targetWord")}: ${formatKpiValue(item.target, item.unit)}</span>
                <strong>${Math.round(progress)}%</strong>
              </div>
              <div class="target-bar"><span style="width:${progress}%"></span></div>
              <small>${item.higherIsBetter ? t("higherIsBetter") : t("lowerIsBetter")}</small>
            </article>
          `;
        }).join("")}
      </div>
      <form id="kpi-target-form" class="kpi-target-form">
        ${targetInputs.map((item) => `
          <label>
            <span>${item.label}</span>
            <input
              type="number"
              min="0"
              step="0.1"
              name="${item.key}"
              value="${targets[item.key]}"
              ${canManageTargets ? "" : "disabled"}
            >
            <small>${item.unit}</small>
          </label>
        `).join("")}
        <button class="ghost-btn" type="submit" ${canManageTargets ? "" : "disabled"}>${t("kpiTargetsSave")}</button>
      </form>
    </section>
  `;

  document.getElementById("kpi-target-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requirePermission(() => canEditEntity("report"))) return;
    const formData = new FormData(event.currentTarget);
    state.kpiTargets = normalizeKpiTargets(Object.fromEntries(formData.entries()));
    persistState();
    renderAll();
    alert(t("kpiTargetsSaved"));
  });
}

function renderAnalyticsSummary(filteredRuns, filteredEvents) {
  const summary = document.getElementById("analytics-summary");
  if (!summary || !analyticsAssetFilter) return;

  const totalDowntimeMinutes = filteredRuns.reduce((sum, run) => sum + Number(run.downtimeMinutes || 0), 0);
  const reactiveCount = filteredEvents.length;
  const pmCount = state.pm.filter((item) => analyticsAssetFilter.value === "all" || item.assetId === analyticsAssetFilter.value).length;
  const plannedMinutes = filteredRuns.reduce((sum, run) => sum + Number(run.plannedMinutes || 0), 0);
  const plannedRatio = plannedMinutes ? Math.round(((plannedMinutes - totalDowntimeMinutes) / plannedMinutes) * 100) : 0;
  const selectedMetrics = analyticsAssetFilter.value !== "all"
    ? calculateMetricsForAsset(analyticsAssetFilter.value)
    : calculateOperationalMetrics();
  const targets = getKpiTargets();
  const mtbfProgress = progressToTarget(selectedMetrics.mtbf, targets.mtbfHours, true);
  const oeeProgress = progressToTarget(selectedMetrics.oee * 100, targets.oeePercent, true);

  summary.innerHTML = [
    { label: "MTBF", value: `${selectedMetrics.mtbf.toFixed(1)} ${t("hours")}`, note: `${t("targetWord")}: ${targets.mtbfHours} ${t("hours")}`, progress: mtbfProgress },
    { label: t("reactiveVsPm"), value: `${reactiveCount} / ${pmCount}`, note: t("plannedWindow") },
    { label: t("downtimeRisk"), value: `${totalDowntimeMinutes} ${t("minutes")}`, note: `${plannedRatio}% ${t("uptimeWindow")}` },
    { label: "OEE", value: `${(selectedMetrics.oee * 100).toFixed(1)}%`, note: `${t("targetWord")}: ${targets.oeePercent}%`, progress: oeeProgress }
  ].map((card) => `
    <article class="stat-card">
      <p class="eyebrow">${card.label}</p>
      <div class="stat-value">${card.value}</div>
      <p>${card.note}</p>
      ${Number.isFinite(card.progress) ? `<div class="target-mini-bar"><span style="width:${clampPercent(card.progress)}%"></span></div>` : ""}
    </article>
  `).join("");
}

function renderAnalytics() {
  if (!analyticsAssetFilter) return;

  renderAnalyticsFilterOptions();
  const assetChart = document.getElementById("asset-kpi-chart");
  const trendChart = document.getElementById("kpi-trend-chart");
  const failureBody = document.getElementById("failure-log-body");
  const productionBody = document.getElementById("production-log-body");
  if (!assetChart || !trendChart || !failureBody || !productionBody) return;

  const selectedAssetId = analyticsAssetFilter.value;
  const filteredAssets = selectedAssetId && selectedAssetId !== "all"
    ? state.assets.filter((asset) => asset.id === selectedAssetId)
    : state.assets;
  const repairEvents = getRepairEvents();
  const filteredEvents = selectedAssetId && selectedAssetId !== "all"
    ? repairEvents.filter((event) => event.assetId === selectedAssetId)
    : repairEvents;
  const filteredRuns = selectedAssetId && selectedAssetId !== "all"
    ? state.productionRuns.filter((run) => run.assetId === selectedAssetId)
    : state.productionRuns;
  const selectedMetrics = selectedAssetId && selectedAssetId !== "all"
    ? calculateMetricsForAsset(selectedAssetId)
    : calculateOperationalMetrics();

  renderKpiTargetsBoard(selectedMetrics);
  renderAnalyticsSummary(filteredRuns, filteredEvents);

  const targets = getKpiTargets();
  assetChart.innerHTML = filteredAssets.map((asset) => {
    const metrics = calculateMetricsForAsset(asset.id);
    const mtbfProgress = progressToTarget(metrics.mtbf, targets.mtbfHours, true);
    const mttrProgress = progressToTarget(metrics.mttr, targets.mttrHours, false);
    const oeeProgress = progressToTarget(metrics.oee * 100, targets.oeePercent, true);
    return `
      <div class="chart-card">
        <strong>${asset.name}</strong>
        <div class="chart-metric">
          <span>MTBF</span>
          <div class="chart-bar"><span style="width:${mtbfProgress}%"></span></div>
          <small>${metrics.mtbf.toFixed(1)} ${t("hours")} / ${t("targetWord")} ${targets.mtbfHours} ${t("hours")}</small>
        </div>
        <div class="chart-metric">
          <span>MTTR</span>
          <div class="chart-bar warning"><span style="width:${mttrProgress}%"></span></div>
          <small>${metrics.mttr.toFixed(1)} ${t("hours")} / ${t("targetWord")} ${targets.mttrHours} ${t("hours")}</small>
        </div>
        <div class="chart-metric">
          <span>OEE</span>
          <div class="chart-bar success"><span style="width:${oeeProgress}%"></span></div>
          <small>${(metrics.oee * 100).toFixed(1)}% / ${t("targetWord")} ${targets.oeePercent}%</small>
        </div>
      </div>
    `;
  }).join("");

  const trendEvents = [...repairEvents]
    .filter((event) => !selectedAssetId || selectedAssetId === "all" || event.assetId === selectedAssetId)
    .sort((a, b) => new Date(a.failureStart) - new Date(b.failureStart))
    .slice(-6);

  trendChart.innerHTML = trendEvents.map((event) => {
    const hours = calculateEventHours(event);
    return `
      <div class="chart-card">
        <strong>${getEquipmentTitle(event.assetId)}</strong>
        <p>${new Date(event.failureStart).toLocaleDateString(getCurrentLocale())}</p>
        <div class="chart-bar warning"><span style="width:${Math.min(hours * 18, 100)}%"></span></div>
        <small>${hours.toFixed(1)} ${t("hours")} - ${event.reason}</small>
      </div>
    `;
  }).join("") || `<div class="chart-card"><strong>${t("noEvents")}</strong></div>`;

  failureBody.innerHTML = filteredEvents.map((event) => {
    const hours = calculateEventHours(event);
    return `
      <tr>
        <td data-label="${t("thAsset")}">${renderEquipmentReference(event.assetId)}</td>
        <td data-label="${t("thFailureStart")}">${formatDateTime(event.failureStart)}</td>
        <td data-label="${t("thRepairEnd")}">${formatDateTime(event.repairEnd)}</td>
        <td data-label="${t("thHours")}">${hours.toFixed(1)} ${t("hours")}</td>
        <td data-label="${t("thReason")}">${event.reason}${renderUsedParts(event.usedParts)}${renderPhotoReport(event.repairPhotos)}</td>
        <td data-label="${t("actionsColumn")}">${renderCrudActions(event.sourceEntity || "failure", event.sourceId || event.id)}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6">${t("noEvents")}</td></tr>`;

  productionBody.innerHTML = filteredRuns.map((run) => `
    <tr>
      <td data-label="${t("thAsset")}">${renderEquipmentReference(run.assetId)}</td>
      <td data-label="${t("thPlanned")}">${run.plannedMinutes} ${t("minutes")}</td>
      <td data-label="${t("thDowntime")}">${run.downtimeMinutes} ${t("minutes")}</td>
      <td data-label="${t("thTotal")}">${run.totalCount}</td>
      <td data-label="${t("thGood")}">${run.goodCount}</td>
      <td data-label="${t("actionsColumn")}">${renderCrudActions("production", run.id)}</td>
    </tr>
  `).join("") || `<tr><td colspan="6">${t("noRuns")}</td></tr>`;
}

function formatDateTime(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString(getCurrentLocale());
}

function getDashboardAlerts() {
  const today = todayISO();
  const lowStock = state.inventory
    .filter((item) => Number(item.onHand || 0) <= Number(item.minQty || 0))
    .slice(0, 5)
    .map((item) => ({
      tone: "gold",
      icon: "box",
      view: "criticalParts",
      title: t("alertLowStock"),
      text: `${item.name} (${item.onHand}/${item.minQty})`,
      meta: item.location || item.sku || item.id
    }));
  const overduePm = state.pm
    .filter((item) => item.nextDue && item.nextDue < today)
    .slice(0, 5)
    .map((item) => ({
      tone: "rose",
      icon: "calendar",
      view: "pm",
      title: t("alertOverduePm"),
      text: item.title,
      meta: item.nextDue
    }));
  const criticalFaults = getDailyFaultItems()
    .filter((item) => item.priority === "Critical" && isDailyFaultActive(item))
    .slice(0, 5)
    .map((item) => ({
      tone: "rose",
      icon: "alert",
      view: "workorders",
      title: t("alertCriticalFault"),
      text: item.title,
      meta: item.owner || translateStatus(item.status)
    }));
  const cycleWarnings = state.pressForms
    .filter((item) => Number(item.cycleLimit || 0) > 0 && (Number(item.currentCycles || 0) / Number(item.cycleLimit || 1)) >= 0.85)
    .slice(0, 5)
    .map((item) => ({
      tone: "gold",
      icon: "cycle",
      view: "pressForms",
      title: t("alertCycleLimit"),
      text: item.name,
      meta: `${Math.round((Number(item.currentCycles || 0) / Number(item.cycleLimit || 1)) * 100)}%`
    }));

  return [...criticalFaults, ...overduePm, ...lowStock, ...cycleWarnings].slice(0, 8);
}

function renderDashboardAlertIcon(icon) {
  const icons = {
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 1.8 20h20.4L12 3Zm0 4 6.6 11H5.4L12 7Zm-1 3h2v4h-2v-4Zm0 5h2v2h-2v-2Z"/></svg>',
    box: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 9 4.8v10.4L12 22l-9-4.8V6.8L12 2Zm5.7 5L12 4 6.3 7 12 10l5.7-3ZM5 8.7v7.3l6 3.2v-7.4L5 8.7Zm8 10.5 6-3.2V8.7l-6 3.1v7.4Z"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2Zm11 8H6v10h12V10ZM6 8h12V6H6v2Zm2 5h5v5H8v-5Z"/></svg>',
    cycle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.7 6.3A8 8 0 0 0 4 12H2l3 4 3-4H6a6 6 0 0 1 10.3-4.3l1.4-1.4ZM19 8l-3 4h2a6 6 0 0 1-10.3 4.3l-1.4 1.4A8 8 0 0 0 20 12h2l-3-4Z"/></svg>'
  };
  return icons[icon] || icons.alert;
}

function renderNotificationCenter() {
  if (!notificationBtn || !notificationList) return;
  const alerts = getDashboardAlerts();
  const criticalCount = alerts.filter((alert) => alert.tone === "rose").length;
  if (notificationCount) notificationCount.textContent = formatNumber(alerts.length);
  if (notificationCriticalCount) notificationCriticalCount.textContent = `${criticalCount} ${t("alertsCriticalCount")}`;
  notificationBtn.classList.toggle("has-alerts", alerts.length > 0);
  notificationList.innerHTML = alerts.length ? alerts.map((alert) => `
    <button class="notification-item ${alert.tone}" type="button" data-alert-view="${escapeHtml(alert.view || "dashboard")}">
      <span class="dashboard-alert-icon">${renderDashboardAlertIcon(alert.icon)}</span>
      <span><strong>${escapeHtml(alert.title)}</strong><small>${escapeHtml(alert.text)}</small></span>
      <em>${escapeHtml(alert.meta || "")}</em>
    </button>
  `).join("") : renderEmptyState(t("noAlerts"));
  notificationList.querySelectorAll("[data-alert-view]").forEach((button) => {
    button.addEventListener("click", () => {
      notificationPopover.hidden = true;
      notificationBtn.setAttribute("aria-expanded", "false");
      setView(button.dataset.alertView || "dashboard");
    });
  });
}

function renderDashboardOperations() {
  const alertList = document.getElementById("dashboard-alerts");
  const alertSummary = document.getElementById("dashboard-alert-summary");
  const alertCount = document.getElementById("dashboard-alert-count");
  const auditList = document.getElementById("dashboard-audit-log");
  if (alertList) {
    const alerts = getDashboardAlerts();
    const criticalCount = alerts.filter((alert) => alert.tone === "rose").length;
    const warningCount = alerts.filter((alert) => alert.tone === "gold").length;

    if (alertCount) alertCount.textContent = alerts.length;
    if (alertSummary) {
      alertSummary.innerHTML = `
        <span><strong>${alerts.length}</strong>${t("alertsTotalCount")}</span>
        <span class="rose"><strong>${criticalCount}</strong>${t("alertsCriticalCount")}</span>
        <span class="gold"><strong>${warningCount}</strong>${t("alertsWarningCount")}</span>
      `;
    }

    alertList.innerHTML = alerts.length ? alerts.map((alert) => `
      <article class="dashboard-alert-item ${alert.tone}">
        <span class="dashboard-alert-icon">${renderDashboardAlertIcon(alert.icon)}</span>
        <div>
          <strong>${escapeHtml(alert.title)}</strong>
          <span>${escapeHtml(alert.text)}</span>
        </div>
        <small>${escapeHtml(alert.meta || "")}</small>
        <button class="ghost-btn alert-open-btn" type="button" data-alert-view="${escapeHtml(alert.view || "dashboard")}" title="${t("alertOpen")}" aria-label="${t("alertOpen")}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5 20 12l-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5Z"/></svg>
        </button>
      </article>
    `).join("") : renderEmptyState(t("noAlerts"));
    alertList.querySelectorAll("[data-alert-view]").forEach((button) => {
      button.addEventListener("click", () => setView(button.dataset.alertView || "dashboard"));
    });
  }
  renderNotificationCenter();

  if (auditList) {
    const events = Array.isArray(state.auditLog) ? state.auditLog.slice(0, 8) : [];
    auditList.innerHTML = events.length ? events.map((event) => `
      <article class="dashboard-audit-item">
        <div>
          <strong>${formatAuditAction(event.action)}: ${event.title}</strong>
          <span>${formatAuditViewName(event.viewName)} · ${event.user || "-"}</span>
        </div>
        <small>${formatDateTime(event.createdAt)}</small>
      </article>
    `).join("") : renderEmptyState(t("noAudit"));
  }
}

function renderEntityAudit(entityId) {
  const events = (Array.isArray(state.auditLog) ? state.auditLog : [])
    .filter((event) => String(event.entityId) === String(entityId))
    .slice(0, 6);
  return `
    <div class="stack-list compact">
      ${events.map((event) => `
        <div class="stack-row compact">
          <strong>${formatAuditAction(event.action)}: ${event.title}</strong>
          <span>${formatDateTime(event.createdAt)}</span>
        </div>
      `).join("") || `<span>${t("noAudit")}</span>`}
    </div>
  `;
}

function renderReports() {
  const healthChip = document.getElementById("report-health-chip");
  const reportCardsContainer = document.getElementById("report-cards");
  const reportInsights = document.getElementById("report-insights");
  if (!healthChip || !reportCardsContainer || !reportInsights) return;

  const completionRate = Math.round((state.workorders.filter((item) => isWorkorderComplete(item.status)).length / Math.max(state.workorders.length, 1)) * 100);
  const requestConversion = Math.round((state.requests.filter((item) => item.status === "Approved").length / Math.max(state.requests.length, 1)) * 100);
  const lowStockCount = state.inventory.filter((item) => item.onHand <= item.minQty).length;
  const criticalAssetCount = state.assets.filter((item) => item.health === "Critical").length;
  const { mtbf, mttr, oee, availability, performance, quality, failureCount, runtimeHours } = calculateOperationalMetrics();
  const targets = getKpiTargets();
  const plannedMinutes = state.productionRuns.reduce((sum, run) => sum + Number(run.plannedMinutes || 0), 0);
  const downtimeMinutes = state.productionRuns.reduce((sum, run) => sum + Number(run.downtimeMinutes || 0), 0);
  const repairHours = getRepairEvents().reduce((sum, event) => {
    const start = new Date(event.failureStart).getTime();
    const end = new Date(event.repairEnd).getTime();
    if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return sum;
    return sum + ((end - start) / (1000 * 60 * 60));
  }, 0);
  const oeePercent = oee * 100;
  const formatPercent = (value) => `${clampPercent(value).toFixed(1)}%`;
  const reportStatus = oeePercent >= targets.oeePercent
    ? { tone: "good", label: t("reportStatusGood"), title: t("reportStatusGoodTitle") }
    : oeePercent >= targets.oeePercent * 0.82
      ? { tone: "watch", label: t("reportStatusWatch"), title: t("reportStatusWatchTitle") }
      : { tone: "critical", label: t("reportStatusCritical"), title: t("reportStatusCriticalTitle") };

  healthChip.className = `report-health-chip ${reportStatus.tone}`;
  healthChip.innerHTML = `
    <span>${reportStatus.label}</span>
    <strong>${formatPercent(oeePercent)}</strong>
  `;

  const inventoryHealth = state.inventory.length ? ((state.inventory.length - lowStockCount) / state.inventory.length) * 100 : 100;
  const assetHealth = state.assets.length ? ((state.assets.length - criticalAssetCount) / state.assets.length) * 100 : 100;
  const reportCards = [
    { label: t("reportLabels.completion"), value: `${completionRate}%`, note: `${t("targetWord")}: ${targets.completionPercent}%`, progress: progressToTarget(completionRate, targets.completionPercent, true), tone: "teal" },
    { label: t("reportLabels.approval"), value: `${requestConversion}%`, note: `${t("targetWord")}: ${targets.approvalPercent}%`, progress: progressToTarget(requestConversion, targets.approvalPercent, true), tone: "navy" },
    { label: t("reportLabels.lowStock"), value: lowStockCount, note: t("reportNotes.lowStock"), progress: inventoryHealth, tone: lowStockCount > 0 ? "gold" : "teal" },
    { label: t("reportLabels.criticalAssets"), value: criticalAssetCount, note: t("reportNotes.criticalAssets"), progress: assetHealth, tone: criticalAssetCount > 0 ? "rose" : "teal" },
    { label: t("reportLabels.mtbf"), value: `${mtbf.toFixed(1)} ${t("hours")}`, note: `${t("targetWord")}: ${targets.mtbfHours} ${t("hours")}`, progress: progressToTarget(mtbf, targets.mtbfHours, true), tone: "navy" },
    { label: t("reportLabels.mttr"), value: `${mttr.toFixed(1)} ${t("hours")}`, note: `${t("targetWord")}: ${targets.mttrHours} ${t("hours")}`, progress: progressToTarget(mttr, targets.mttrHours, false), tone: "gold" }
  ];

  reportCardsContainer.innerHTML = `
    <article class="report-oee-card">
      <div class="report-ring ${reportStatus.tone}" style="--score: ${clampPercent(oeePercent)}%;">
        <strong>${formatPercent(oeePercent)}</strong>
        <span>OEE</span>
      </div>
      <div class="report-oee-copy">
        <p class="eyebrow">${t("reportScore")}</p>
        <h3>${reportStatus.title}</h3>
        <p>${t("reportOverviewSubtitle")}</p>
        <div class="report-equation">
          <span>${t("targetWord")} OEE ${formatPercent(targets.oeePercent)}</span>
          <span>A ${formatPercent(availability * 100)}</span>
          <span>P ${formatPercent(performance * 100)}</span>
          <span>Q ${formatPercent(quality * 100)}</span>
        </div>
      </div>
    </article>
    <div class="report-kpi-grid">
      ${reportCards.map((item) => `
        <article class="report-metric-card ${item.tone}">
          <div class="metric-top">
            <p class="eyebrow">${item.label}</p>
            <span>${Math.round(clampPercent(item.progress))}%</span>
          </div>
          <div class="report-metric-value">${item.value}</div>
          <p>${item.note}</p>
          <div class="report-progress"><span style="width: ${clampPercent(item.progress)}%"></span></div>
        </article>
      `).join("")}
    </div>
  `;

  const savedReportsMarkup = state.generatedReports.length ? `
    <section class="panel report-info-panel report-snapshots-panel">
      <div class="panel-head">
        <h3>${t("reportSavedSnapshots")}</h3>
      </div>
      <div class="pm-list">
        ${state.generatedReports.map((report) => `
          <div class="pm-item">
            <strong>${report.title}</strong>
            <p>${report.createdAt}: ${report.text}</p>
            ${renderCrudActions("report", report.id)}
          </div>
        `).join("")}
      </div>
    </section>
  ` : "";

  reportInsights.innerHTML = `
    <section class="panel report-info-panel">
      <div class="panel-head">
        <h3>${t("reportFormulaTitle")}</h3>
      </div>
      <div class="formula-grid">
        <div class="formula-card">
          <strong>${t("reportFormulaOee")}</strong>
          <p>${formatPercent(availability * 100)} x ${formatPercent(performance * 100)} x ${formatPercent(quality * 100)} = ${formatPercent(oeePercent)}</p>
        </div>
        <div class="formula-card">
          <strong>${t("reportFormulaMtbf")}</strong>
          <p>${runtimeHours.toFixed(1)} ${t("hours")} / ${failureCount} = ${mtbf.toFixed(1)} ${t("hours")}</p>
        </div>
        <div class="formula-card">
          <strong>${t("reportFormulaMttr")}</strong>
          <p>${repairHours.toFixed(1)} ${t("hours")} / ${failureCount} = ${mttr.toFixed(1)} ${t("hours")}</p>
        </div>
      </div>
    </section>
    <section class="panel report-info-panel">
      <div class="panel-head">
        <h3>${t("reportDataTitle")}</h3>
      </div>
      <div class="report-data-grid">
        <div>
          <span>${t("reportRuntime")}</span>
          <strong>${runtimeHours.toFixed(1)} ${t("hours")}</strong>
        </div>
        <div>
          <span>${t("reportDowntime")}</span>
          <strong>${(downtimeMinutes / 60).toFixed(1)} ${t("hours")}</strong>
        </div>
        <div>
          <span>${t("reportFailures")}</span>
          <strong>${failureCount}</strong>
        </div>
        <div>
          <span>${t("thPlanned")}</span>
          <strong>${(plannedMinutes / 60).toFixed(1)} ${t("hours")}</strong>
        </div>
      </div>
    </section>
    ${savedReportsMarkup}
  `;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function nowLocalDateTime() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

function renderAll() {
  try {
    syncCurrentUser();
    updateSessionUI();
    renderStats();
    renderDashboardKpiAnalytics();
    renderDashboardOperations();
    renderWorkorders();
    renderRequests();
    renderAssets();
    renderPressForms();
    renderInventory();
    renderCriticalParts();
    renderPmList();
    renderUsers();
    renderSettings();
    renderReports();
    renderAnalytics();
    bindCrudButtons();
  } catch (error) {
    console.error("CMMS render error:", error);
  }
}

applyTranslations();
renderAll();
if (!handleDeepLinkOpen()) {
  setView("dashboard");
}
persistState();
updateRealTimeClock();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .catch((error) => console.info("CMMS cache cleanup is not available:", error.message));
  });
}

if ("caches" in window) {
  window.addEventListener("load", () => {
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("ozminda-cmms")).map((key) => caches.delete(key))))
      .catch((error) => console.info("CMMS cache storage cleanup is not available:", error.message));
  });
}
