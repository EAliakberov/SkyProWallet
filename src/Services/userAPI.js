import axios from 'axios';

const userApi = axios.create({
    baseURL: 'https://wedev-api.sky.pro/api/user',
    headers: { 'Content-Type': null },
});

// обработка ошибок
const handleApiError = (err) => {
    const message = err.response?.data?.error || err.message;
    throw new Error(message, { cause: err });
};

/**
 * Авторизовать пользователя (Вход)
 * @param {Object} loginData - Данные для входа
 * @param {string} loginData.login - Логин пользователя
 * @param {string} loginData.password - Пароль пользователя
 * @returns {Promise<Object>} Данные авторизованного пользователя (включая токен)
 */
export const userLogin = async ({ login, password }) => {
    console.log(login, password);
    try {
        const loginData = { login, password };
        console.log(JSON.stringify(loginData));
        const response = await userApi.post('/login', JSON.stringify(loginData));
        return response.data?.user || {};
    } catch (err) {
        handleApiError(err);
    }
};

/**
 * Зарегистрировать нового пользователя
 * @param {Object} registerData - Данные для регистрации
 * @param {string} registerData.login - Логин аккаунта
 * @param {string} registerData.name - Имя пользователя
 * @param {string} registerData.password - Пароль аккаунта
 * @returns {Promise<Object>} Данные созданного пользователя
 */
export const userRegister = async ({ login, name, password }) => {
    try {
        const registerData = { login, name, password };
        const response = await userApi.post('/', registerData);
        return response.data?.user || {};
    } catch (err) {
        handleApiError(err);
    }
};

/**
 * Получить список всех пользователей системы
 * @returns {Promise<Array>} Массив объектов пользователей
 */
export const getUsersList = async () => {
    try {
        const response = await userApi.post('/');
        return response.data?.users || [];
    } catch (err) {
        handleApiError(err);
    }
};
