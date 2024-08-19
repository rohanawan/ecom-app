export const BackendRoutes = {
    user: {
        base: "",
        endpoints: {
            login: "/login",
            signup: "/signup",
            updatePassword: "/password/update",
        },
    },
    item: {
        base: "",
        endpoints: {
            showItems: "/items",
            showItem: (id) => `/item/${id}`,
            getItemsByCategory: (category) => `/items/${category}`,
        },
    },
    cart: {
        base: "",
        endpoints: {
            addToCart: "/cart",
            showCart: (userId) => `/cart/${userId}`,
            updateCart: "/cart/update",
            deleteCartItem: "/cart/delete",
        },
    },
    order: {
        base: "",
        endpoints: {
            addOrder: "/order",
            showOrderHistory: (userId) => `/order/${userId}`,
        },
    },
};
