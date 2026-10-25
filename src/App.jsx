import { AppRouter } from './components/AppRoutes/AppRoutes';
import { GlobalStyles } from './components/GlobalStyles';
import { TransactionsContextProvider } from './context/TransactionsContextProvider';
import { UserContextProvider } from './context/UserContextProvider';

function App() {
    return (
        <UserContextProvider>
            <TransactionsContextProvider>
                <GlobalStyles />
                <AppRouter />
            </TransactionsContextProvider>
        </UserContextProvider>
    );
}

export default App;
