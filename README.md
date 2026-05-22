# CMMS Prototype

Это стартовый прототип CMMS-системы для управления:

- рабочими заявками (`Work Orders`)
- активами (`Assets`)
- плановым обслуживанием (`Preventive Maintenance`)

## Что уже есть

- боковое меню и dashboard
- KPI-карточки
- таблица заявок с фильтрами
- реестр оборудования
- блок планового обслуживания
- создание новой заявки через форму
- смена статуса заявки по клику
- сохранение данных в `localStorage`

## Файлы

- [index.html](C:/Users/Sodiq%20Musinov/Documents/Codex/2026-04-24/mms/index.html) — структура интерфейса
- [styles.css](C:/Users/Sodiq%20Musinov/Documents/Codex/2026-04-24/mms/styles.css) — стили и адаптивность
- [app.js](C:/Users/Sodiq%20Musinov/Documents/Codex/2026-04-24/mms/app.js) — логика CMMS и данные

## Как запустить

Можно просто открыть `index.html` в браузере.

Если захотите перейти к следующему этапу, я могу сразу помочь сделать:

1. backend на `Node.js + Express`
2. базу данных `PostgreSQL`
3. авторизацию пользователей
4. роли `Admin / Technician / Manager`
5. отдельные страницы для `Requests`, `Inventory`, `Reports`
6. API для заявок, активов и PM

## Рекомендуемая следующая версия

Для полноценной CMMS я бы предложил такой стек:

- frontend: `React + Vite`
- backend: `Node.js + Express`
- database: `PostgreSQL`
- auth: `JWT` или `Clerk/Auth.js`
- UI: таблицы, календарь PM, отчеты, уведомления

Если хотите, следующим сообщением я могу сразу превратить этот прототип в полноценный web-проект с backend-архитектурой.
