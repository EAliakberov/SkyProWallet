import { TransactionsContext } from './contextAPI';

export const TransactionsContextProvider = ({ children }) => {
    return <TransactionsContext.Provider value={{}}>{children}</TransactionsContext.Provider>;
};
