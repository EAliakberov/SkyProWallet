import { useCallback, useContext, useMemo, useState } from 'react';
import { TransactionsContext, UserContext } from './contextAPI';
import {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTransactionsByPeriod,
    toApiDate,
} from '../Services/api';

export const TransactionsContextProvider = ({ children }) => {
    const { userData } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [transactionsPeriod, setTransactionsPeriod] = useState(null);

    /**
     * Обертка для запросов к API: авторизация, loading, error, commit результата.
     * @param {() => Promise<Array>} request - Функция запроса, возвращающая список транзакций
     * @param {(result: Array) => boolean} [commit=true] - Обновлять ли state списка результатом запроса
     * @returns {Promise<Array>} Результат запроса
     */

    const runTransactionRequest = useCallback(
        async (request, commit = true) => {
            if (!userData) {
                throw new Error('Вы не авторизированы');
            }
            setLoading(true);
            setError(null);
            try {
                const result = await request();
                if (commit) setTransactions(result);
                return result;
            } catch (err) {
                setError(err);
                throw err;
            } finally {
                setLoading(false);
            }
        },
        [userData]
    );

    const setPeriod = useCallback((period) => {
        if (period.start) setTransactionsPeriod(period);
        else setTransactionsPeriod(null);
    }, []);

    /**
     * Получить список транзакций (с опциональной сортировкой и фильтрацией)
     * @param {Object} [options] - Параметры запроса
     * @param {'date'|'sum'} [options.sortBy] - Поле для сортировки по убыванию
     * @param {string} [options.filterBy] - Категории через запятую (н-р: 'food,transport')
     * @returns {Promise<Array>} Список транзакций
     */
    const loadTransactions = useCallback(
        ({ sortBy, filterBy } = {}) => {
            return runTransactionRequest(() => getTransactions({ sortBy, filterBy }));
        },
        [runTransactionRequest]
    );

    /**
     * Добавить новую транзакцию
     * @param {Object} transactionData - Данные транзакции
     * @param {string} transactionData.description - Описание (минимум 4 символа)
     * @param {number} transactionData.sum - Положительное число
     * @param {'food'|'transport'|'housing'|'joy'|'education'|'others'} transactionData.category - Категория
     * @param {string} transactionData.date - Дата в формате "М-Д-ГГГГ" (например, "6-1-2025")
     * @returns {Promise<Array>} Обновленный список всех транзакций
     */
    const addNewTransaction = useCallback(
        (transactionData) => {
            return runTransactionRequest(() => addTransaction(transactionData));
        },
        [runTransactionRequest]
    );

    /**
     * Обновить существующую транзакцию
     * @param {string} id - ID транзакции
     * @param {Object} updatedData - Новые данные (description, sum, category, date)
     * @returns {Promise<Array>} Обновленный список всех транзакций
     */
    const editTransaction = useCallback(
        (id, updatedData) => {
            return runTransactionRequest(() => updateTransaction(id, updatedData));
        },
        [runTransactionRequest]
    );

    /**
     * Удалить транзакцию по ID
     * @param {string} id - ID транзакции
     * @returns {Promise<Array>} Обновленный список всех транзакций
     */
    const removeTransaction = useCallback(
        (id) => {
            return runTransactionRequest(() => deleteTransaction(id));
        },
        [runTransactionRequest]
    );

    /**
     * Получить транзакции за определенный период (без перезаписи общего списка)
     * @param {Object} period - Границы периода
     * @param {string} period.start - Дата начала в формате "М-Д-ГГГГ"
     * @param {string} period.end - Дата окончания в формате "М-Д-ГГГГ"
     * @returns {Promise<Array>} Список транзакций за период
     */
    const loadTransactionsByPeriod = useCallback(
        (period) => {
            return runTransactionRequest(
                () =>
                    getTransactionsByPeriod({
                        start: toApiDate(period.start),
                        end: toApiDate(period.end),
                    }),
                true
            );
        },
        [runTransactionRequest]
    );

    const contextValue = useMemo(
        () => ({
            transactions,
            loading,
            error,
            transactionsPeriod,
            loadTransactions,
            addNewTransaction,
            editTransaction,
            removeTransaction,
            setPeriod,
            loadTransactionsByPeriod,
        }),
        [
            transactions,
            loading,
            error,
            transactionsPeriod,
            loadTransactions,
            addNewTransaction,
            editTransaction,
            removeTransaction,
            setPeriod,
            loadTransactionsByPeriod,
        ]
    );

    return (
        <TransactionsContext.Provider value={contextValue}>{children}</TransactionsContext.Provider>
    );
};
