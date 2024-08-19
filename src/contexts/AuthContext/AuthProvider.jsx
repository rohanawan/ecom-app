import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Initialize authentication state from sessionStorage
        const userId = sessionStorage.getItem("userId");
        setIsAuthenticated(!!userId);
    }, []);

    const login = (userId) => {
        sessionStorage.setItem("userId", userId);
        setIsAuthenticated(true);
    };

    const logout = () => {
        sessionStorage.removeItem("userId");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
