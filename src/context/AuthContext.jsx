import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userAuthentified, setUserAuthentified] = useState(false);

    useEffect(() => {
        const storedStatus = localStorage.getItem('userAuthentified');
        if (storedStatus === 'true') {
            setUserAuthentified(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ userAuthentified, setUserAuthentified }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
