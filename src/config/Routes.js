export const Routes = {
    auth: {
        signIn: "/login",
        signUp: "/signup",
    },
    public: {
        home: "/",
        aboutUs: "/about-us",
        contactUs: "/contact-us",
        itemsDetails: (id) => `/items/${id}`,
    },
    private: {
        cart: "/cart",
        myOrder: "/my-order",
        checkout: "/checkout",
        changePassword: "/change-password",
        showOrderHistory: "/order/history",
    },
};
