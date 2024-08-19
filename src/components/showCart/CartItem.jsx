import { useState, memo, useEffect } from "react";
import useCart from "../../hooks/useCart";

const CartItem = ({ item, refetch, setRefetch, handleQuantityChange }) => {
  const { loading, handleDeleteCartItem } = useCart();
  const [quantity, setQuantity] = useState(item.qty);

  useEffect(() => {
    setQuantity(item.qty);
  }, [item]);

  useEffect(() => {
    if (quantity !== item.qty) {
      handleQuantityChange(item._id, quantity);
    }
  }, [item._id, quantity]);

  return (
    <div key={item.itemId} style={{ marginTop: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="cart-item">
          <img src={`/images/${item.photo}`} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>
              £{item.price} x {quantity}
            </p>
          </div>
        </div>

        {/* Trash Icon */}
        <div
          style={{ cursor: "pointer", color: "red" }}
          onClick={async () => {
            await handleDeleteCartItem(item._id);
            setRefetch((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </div>
      </div>
      <div className="quantity-controls" style={styles.qtnBtnContainer}>
        <button
          className="btn btn-primary"
          style={styles.button}
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          disabled={loading || quantity === 1}
        >
          -
        </button>
        <input type="text" value={quantity} style={styles.input} readOnly />
        <button
          className="btn btn-primary"
          style={styles.button}
          onClick={() => setQuantity((prev) => prev + 1)}
          disabled={loading}
        >
          +
        </button>
      </div>
    </div>
  );
};

const styles = {
  qtnBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem 0 2rem 0",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
  },
  button: {
    margin: "0 10px",
    padding: "3px 16px",
  },
  input: {
    textAlign: "center",
    width: "50px",
  },
};

export default memo(CartItem);
