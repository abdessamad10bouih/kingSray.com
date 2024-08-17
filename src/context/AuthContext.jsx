import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userAuthentified, setUserAuthentified] = useState(false);

    useEffect(() => {
        const storedStatus = localStorage.getItem('userAuthentified');
        if (storedStatus === 'true') {
            setUserAuthentified(true);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('userAuthentified');
        localStorage.removeItem('userData');
        setUserAuthentified(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ userAuthentified, setUserAuthentified }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
