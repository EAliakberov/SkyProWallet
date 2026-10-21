import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/contextAPI';

export const PrivatePage = () => {
    const { userData } = useContext(UserContext);
    return userData ? <Outlet /> : <Navigate to="/signin" />;
};
