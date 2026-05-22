# Деплой O'zMinda CMMS на Render

Этот вариант дает постоянную публичную ссылку вида `https://ozminda-cmms.onrender.com`.

## Что уже подготовлено

- `server.js` умеет работать на хостинге через `PORT` и `0.0.0.0`.
- `render.yaml` описывает веб-сервис Render.
- `.gitignore` убирает локальные данные, backup и `node_modules`.

## Как выложить

1. Создай репозиторий на GitHub и загрузи туда эту папку.
2. Открой Render: `https://dashboard.render.com/blueprints`.
3. Нажми `New Blueprint Instance`.
4. Выбери GitHub-репозиторий с проектом.
5. Render прочитает `render.yaml`.
6. Нажми `Apply`.
7. После сборки открой выданный адрес.

## Важно про данные

`render.yaml` создает Render Postgres `ozminda-cmms-db` и передает приложению `DATABASE_URL`.
Когда `DATABASE_URL` есть, сервер хранит состояние CMMS в PostgreSQL.
Локально без `DATABASE_URL` сервер продолжает хранить данные в `data/store.json`.

Free Render Postgres подходит для теста и демонстрации, но бесплатная база истекает через 30 дней.
Для постоянной рабочей эксплуатации переведи базу Render Postgres на платный тариф до истечения срока.
