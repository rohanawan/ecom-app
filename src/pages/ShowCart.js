import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styles Import
import "../styles/ShowCart.css";
import useCart from "../hooks/useCart";
import CartItem from "../components/showCart/CartItem";
import SpinnerLoader from "../components/ui/loader/SpinnerLoader";

// JSX
const ShowCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { loading: cartLoading, getCartItems, handleUpdateCart } = useCart();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
      updateTotalPrice(items);
    };

    fetchCartItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const updateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    setTotalPrice(total.toFixed(2));
  };

  const handleQuantityChange = async (itemId, newQty) => {
    if (newQty > 0) {
      await handleUpdateCart(itemId, newQty);
      // Refetch the updated cart items and total price
      setRefetch((prev) => !prev);
    }
  };

  if (cartLoading) return <div>{SpinnerLoader()}</div>;

  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-6 mt-4 mb-2 box-cart">
        <h2>Cart</h2>
        {cartItems?.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                refetch={refetch}
                setRefetch={setRefetch}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
            <div className="total-price">
              <h3>Total Amount: £{totalPrice}</h3>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/checkout")}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
};

export default ShowCart;
