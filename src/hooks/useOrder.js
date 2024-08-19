import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils Import
import { toastNotify } from "../utils/toastNotify";
import axios from "../utils/axios";

// Config Import
import { Routes } from "../config/Routes";
import { BackendRoutes } from "../config/BackendRoutes";

const useOrder = () => {
    const navigate = useNavigate();

    // Retrieve userId from session storage or context
    const userId = sessionStorage.getItem("userId");

    const [loading, setLoading] = useState(false);

    const handleConfirmOrder = async () => {
        setLoading(true);
        try {
            await axios.post(BackendRoutes.order.endpoints.addOrder, {
                userId,
            });

            // Navigate to MyOrder page upon success
            navigate(Routes.private.myOrder);

            toastNotify("success", "Order confirmed!");
        } catch (error) {
            console.error("Error confirming order:", error);
            // Handle error, show message to the user
            toastNotify("error", "Error confirming order");
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        handleConfirmOrder,
    };
};

export default useOrder;
