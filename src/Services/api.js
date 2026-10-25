import axios from 'axios';

// 1. Создаем экземпляр Axios с базовым URL
const transactionsApi = axios.create({
    baseURL: 'https://wedev-api.sky.pro/api',
    headers: {
        'Content-Type': null,
    },
});

let authToken = null;

/**
 * Функция для установки токена авторизации.
 * @param {string|null} token - Bearer токен пользователя
 */
export const setAuthToken = (token) => {
    authToken = token;
};

export const toApiDate = (date) => {
    const month = date.getMonth() + 1; // 0-based → человеческий
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
};

const handleApiError = (err) => {
    const message = err.response?.data?.error || err.message;
    throw new Error(message, { cause: err });
};

// 2. Перехватчик (Interceptor) для автоматического добавления токена к каждому запросу
transactionsApi.interceptors.request.use(
    (config) => {
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 3. Функции для работы с эндпоинтами

/**
 * Получить список транзакций (с опциональной сортировкой и фильтрацией)
 * @param {Object} [options] - Параметры запроса
 * @param {'date'|'sum'} [options.sortBy] - Поле для сортировки по убыванию
 * @param {string} [options.filterBy] - Категории через запятую (н-р: 'food,transport')
 * @returns {Promise<Array>} Список транзакций
 */
export const getTransactions = async (options = {}) => {
    try {
        const { sortBy, filterBy } = options;
        const response = await transactionsApi.get('/transactions', {
            params: { sortBy, filterBy },
        });
        return response.data;
    } catch (err) {
        handleApiError(err);
    }
};

/**
 * Добавить новую транзакцию
 * @param {Object} transactionData - Данные транзакции
 * @param {string} transactionData.description - Описание (минимум 4 символа)
 * @param {number} transactionData.sum - Положительное число
 * @param {'food'|'transport'|'housing'|'joy'|'education'|'others'} transactionData.category - Категория
 * @param {string} transactionData.date - Дата в формате "М-Д-ГГГГ" (например, "6-1-2025")
 * @returns {Promise<Array>} Обновленный список всех транзакций
 */
export const addTransaction = async (transactionData) => {
    try {
        const response = await transactionsApi.post('/transactions', transactionData);
        return response.data.transactions;
    } catch (err) {
        handleApiError(err);
    }
};

/**
 * Обновить существующую транзакцию
 * @param {string} id - ID транзакции
 * @param {Object} updatedData - Новые данные (description, sum, category, date)
 * @returns {Promise<Array>} Обновленный список всех транзакций
 */
export const updateTransaction = async (id, updatedData) => {
    try {
        const response = await transactionsApi.patch(`/transactions/${id}`, updatedData);
        return response.data;
    } catch (err) {
        handleApiError(err);
    }
};

/**
 * Удалить транзакцию по ID
 * @param {string} id - ID транзакции
 * @returns {Promise<Array>} Обновленный список всех транзакций
 */
export const deleteTransaction = async (id) => {
    try {
        const response = await transactionsApi.delete(`/transactions/${id}`);
        return response.data.transactions;
    } catch (err) {
        handleApiError(err);
    }
};

/**
 * Получить транзакции за определенный период
 * @param {Object} period - Границы периода
 * @param {string} period.start - Дата начала в формате "М-Д-ГГГГ" (например, "12-1-2024")
 * @param {string} period.end - Дата окончания в формате "М-Д-ГГГГ" (например, "12-1-2025")
 * @returns {Promise<Array>} Список транзакций за период
 */
export const getTransactionsByPeriod = async (period) => {
    try {
        const response = await transactionsApi.post('/transactions/period', period);
        return response.data;
    } catch (err) {
        handleApiError(err);
    }
};
