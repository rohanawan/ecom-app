import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils Import
import { toastNotify } from "../utils/toastNotify";
import axios from "../utils/axios";

// Config Import
import { Routes } from "../config/Routes";
import { BackendRoutes } from "../config/BackendRoutes";

// Context Import
import { useAuth } from "../contexts/AuthContext";

const useUser = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    // Retrieve userId from session storage or context
    const userId = sessionStorage.getItem("userId");

    const handleLogin = async (credentials) => {
        setLoading(true);

        try {
            const response = await axios.post(
                BackendRoutes.user.endpoints.login,
                credentials
            );
            if (response.data.userId) {
                toastNotify("success", "Login successful");
                login(response.data.userId);
                navigate(Routes.public.home);
            }
        } catch (error) {
            console.error("Login failed", error);
            toastNotify("error", error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async (formData) => {
        setLoading(true);

        try {
            await axios.post(BackendRoutes.user.endpoints.signup, formData);

            toastNotify("success", "Signup successful, please login.");
            navigate(Routes.auth.signIn); // Redirect to login after successful signup
        } catch (error) {
            console.error(
                "Signup error:",
                error.response ? error.response.data : error
            );
            toastNotify("error", "Error during signup.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdatePassword = async (formData) => {
        setLoading(true);

        const responseObject = {
            userId,
            ...formData,
        };

        try {
            await axios.put(
                BackendRoutes.user.endpoints.updatePassword,
                responseObject
            );

            toastNotify("success", "Password updated successfully.");
            navigate(Routes.public.home); // Redirect to home after successful password change
        } catch (error) {
            console.error(
                "Password update error:",
                error.response ? error.response.data : error
            );
            toastNotify("error", "Error updating password.");
        } finally {
            setLoading(false);
        }
    };

    return { loading, handleLogin, handleSignup, handleUpdatePassword };
};
export default useUser;
