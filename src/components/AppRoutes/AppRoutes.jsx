import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivatePage } from '../../Pages/PrivatePage';
import { ExpensesPage } from '../../Pages/ExpensesPage';
import { AnalysisPage } from '../../Pages/AnalysisPage';
import { SignInUpPage } from '../../Pages/SignInUpPage';

export function AppRouter() {
    return (
        <Routes>
            <Route element={<PrivatePage />}>
                <Route path="/" element={<Navigate to="/analysis" />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/analysis" element={<AnalysisPage />} />
            </Route>
            <Route path="/signin" element={<SignInUpPage signup={false} />} />
            <Route path="/signup" element={<SignInUpPage signup={true} />} />
        </Routes>
    );
}
