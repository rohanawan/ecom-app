import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils Import
import { toastNotify } from "../utils/toastNotify";
import axios from "../utils/axios";

// Config Import
import { Routes } from "../config/Routes";
import { BackendRoutes } from "../config/BackendRoutes";

const useCart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const userId = sessionStorage.getItem("userId");

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        BackendRoutes.cart.endpoints.showCart(userId)
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching cart items:", error);
      return [];
    }
  };

  const handleAddToCart = async (itemId, qty) => {
    if (!userId) {
      // Optionally alert the user or just redirect to login page
      toastNotify("error", "Please log in to add items to the cart.");
      navigate(Routes.auth.signIn);
      return;
    }

    setLoading(true);
    try {
      await axios.post(BackendRoutes.cart.endpoints.addToCart, {
        userId,
        itemId,
        qty,
      });
      toastNotify("success", "Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart", error);
      toastNotify("error", "Failed to add item to cart.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCart = async (cartItemId, qty) => {
    try {
      await axios.put(BackendRoutes.cart.endpoints.updateCart, {
        userId,
        cartItemId,
        qty,
      });
      console.log("Cart updated");
    } catch (error) {
      console.error("Error updating cart", error);
      toastNotify("error", error.response.data.message);
    }
  };

  const handleDeleteCartItem = async (cartItemId) => {
    setLoading(true);

    console.log("Deleting item from cart", cartItemId);
    try {
      await axios.delete(BackendRoutes.cart.endpoints.deleteCartItem, {
        data: { userId, cartItemId },
      });
      console.log("Item deleted from cart");
    } catch (error) {
      console.error("Error deleting item from cart", error);
      toastNotify("error", error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getCartItems,
    handleAddToCart,
    handleUpdateCart,
    handleDeleteCartItem,
  };
};
export default useCart;
