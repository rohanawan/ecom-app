import { toast } from "react-toastify";

const toastOptions = {
    theme: "light",
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const toastNotify = (type, message) => {
    switch (type) {
        case "success":
            toast.success(message, toastOptions);
            break;
        case "error":
            toast.error(message, toastOptions);
            break;
        case "warning":
            toast.warn(message, toastOptions);
            break;
        case "info":
            toast.info(message, toastOptions);
            break;
        default:
            toast(message);
    }
};
