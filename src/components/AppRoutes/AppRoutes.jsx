import { Route, Routes } from 'react-router-dom';
import { PrivatePage } from '../../Pages/PrivatePage';
import { MainPage } from '../../Pages/MainPage';
import { ExpensesPage } from '../../Pages/ExpensesPage';
import { AnalysisPage } from '../../Pages/AnalysisPage';
import { SignInOutPage } from '../../Pages/SignInOutPage';

export function AppRouter() {
    return (
        <Routes>
            <Route element={<PrivatePage />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/analysis" element={<AnalysisPage />} />
            </Route>
            <Route path="/signin" element={<SignInOutPage />} />
            <Route path="/signup" element={<SignInOutPage signup={true} />} />
        </Routes>
    );
}
