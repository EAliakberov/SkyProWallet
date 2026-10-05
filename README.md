# SkyProWallet
Удобный и функциональный кошелёк для учёта расходов.

## О проекте

SkyProWallet — SPA для учёта личных расходов: авторизация, список трат с фильтрацией и сортировкой, аналитика и выбор периода через календарь. Данные хранятся на бэкенде.

## Стек

- **React** + **Vite**
- **React Router** — маршрутизация
- **styled-components** — стили
- **Context API** — состояние (данные пользователя, расходы)
- **ESLint** + **Prettier** — линтинг и форматирование
- **REST API** — реальный бэкенд

## Требования

- Node.js LTS (последняя LTS-версия)
- npm (идёт в комплекте с Node.js)

## Установка и запуск

1. Клонировать репозиторий:

   ```bash
   git clone <ссылка-на-репозиторий>
   cd SkyProWallet
   ```

2. Установить зависимости:

   ```bash
   npm install
   ```

3. Создать файл `.env` в корне проекта и указать адрес бэкенда:

   ```
   VITE_API_URL=https://wedev-api.sky.pro/api/transactions
   ```
   https://github.com/AlenaSol/webdev-hw-api/tree/main/pages/api/transactions

4. Запустить dev-сервер:

   ```bash
   npm run dev
   ```

   Приложение откроется по адресу, который выведет Vite (обычно http://localhost:5173).

## Скрипты

| Команда             | Что делает                          |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Запуск dev-сервера                  |
| `npm run build`     | Сборка продакшн-версии              |
| `npm run preview`   | Локальный просмотр собранной версии |
| `npm run lint`      | Проверка кода ESLint                |
| `npm run format`    | Форматирование через Prettier       |

## Функциональность

### Экран «Вход»
Стартовый экран приложения. Вводятся эл. почта и пароль, есть ссылка на экран регистрации.

### Учёт расходов
- Показ всех внесённых расходов.
Функциональность проекта
Экран «Вход»
Стартовый экран.
### Экран регистрации
- Поля «Имя», «Эл. почта» и «Пароль» доступны для ввода данных.
- При вводе данных текст становится чёрного цвета.
- Кнопка «Войти» возвращает пользователя на экран входа.
- Кнопка «Зарегистрироваться» создаёт пользователя и возвращает его на экран входа.
### Основной экран
- Кнопка «Мои расходы» перенаправляет на экран учёта расходов.
- Кнопка «Анализ расходов» ведёт на страницу аналитики.
- Кнопка «Выйти» перенаправляет на экран входа.
### Функциональность учёта расходов
- Показаны все внесённые расходы.
- Возможность фильтрации по категориям (например, еда, транспорт).
- Возможность сортировки по дате или сумме.
- При редактировании расхода фон становится светло-зелёным, текст и иконки — тёмно-зелёными.
- Доступно редактирование и удаление расходов.
- Показана общая сумма за выбранный период и затраты по категориям.
### Календарь для выбора периода
- Выбор периода по дням, неделям, месяцам и годам.
- Показ всех данных за выбранный период.
- Доступна прокрутка календаря.
### Таблица расходов
- Показ всех расходов с возможностью сортировки и фильтрации.
- Выбранный элемент подсвечивается зелёной плашкой с зелёным текстом и иконкой.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
