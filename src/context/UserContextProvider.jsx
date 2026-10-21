import { useEffect, useState } from 'react';
import { UserContext } from './contextAPI';
import { userLogin, userRegister } from '../Services/userAPI';

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        try {
            const localUserData = localStorage.getItem('userData');
            return localUserData ? JSON.parse(localUserData) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (userData) localStorage.setItem('userData', JSON.stringify(userData));
        else localStorage.removeItem('userData');
    }, [userData]);

    const logOut = async () => {
        setUserData(null);
        localStorage.removeItem('userData');
    };

    const logIn = async ({ login, password }) => {
        try {
            const data = await userLogin({ login, password });
            setUserData(data);
            return data;
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    const signUp = async ({ login, password, name }) => {
        try {
            const data = await userRegister({ login, password, name });
            setUserData(data);
            return data;
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    return (
        <UserContext.Provider value={{ userData, logIn, logOut, signUp }}>
            {children}
        </UserContext.Provider>
    );
};
