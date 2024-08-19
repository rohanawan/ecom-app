import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Utils Import
import { toastNotify } from "../utils/toastNotify";
import axios from "../utils/axios";

// Hooks Import
import useCart from "../hooks/useCart";

import "../styles/item.css";
import SpinnerLoader from "../components/ui/loader/SpinnerLoader";

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const { loading, handleAddToCart } = useCart();

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`/item/${id}`);
        console.log(response?.data);
        setItem(response?.data);
      } catch (error) {
        console.error("Error fetching item details", error);
        toastNotify("error", error.response.data.message);
      }
    };

    fetchItemDetails();
  }, [id]);

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      if (increment) {
        return prevQuantity + 1;
      }
      return prevQuantity > 1 ? prevQuantity - 1 : 1;
    });
  };

  if (!item) return <div>{SpinnerLoader()}</div>;

  return (
    <div className="item-details-container">
      <img
        src={`/images/${item.photo}`}
        alt={item.name}
        className="item-image"
      />
      <h2 className="item-name">{item.name}</h2>
      <p className="item-price">Price: £{item.price}</p>
      <div className="quantity-controls">
        <button
          className="quantity-button"
          onClick={() => handleQuantityChange(false)}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          className="quantity-input"
          readOnly
        />
        <button
          className="quantity-button"
          onClick={() => handleQuantityChange(true)}
        >
          +
        </button>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => handleAddToCart(item._id, quantity)}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add To Cart"}
      </button>
    </div>
    // <div className="text-center item-details">
    //     <br />
    //     <br />
    //     <img src={`/images/${item.photo}`} alt={item.name} />
    //     <h2>{item.name}</h2>
    //     <p>Price: £{item.price}</p>
    //     <div className="quantity-controls">
    //         <button
    //             className="btn btn-primary"
    //             style={styles.button}
    //             onClick={() => handleQuantityChange(false)}
    //         >
    //             -
    //         </button>
    //         <input
    //             type="text"
    //             value={quantity}
    //             style={styles.input}
    //             readOnly
    //         />
    //         <button
    //             className="btn btn-primary"
    //             style={styles.button}
    //             onClick={() => handleQuantityChange(true)}
    //         >
    //             +
    //         </button>
    //     </div>
    //     <br />
    //     <br />
    //     <button
    //         className="btn btn-primary"
    //         onClick={() => handleAddToCart(id, quantity)}
    //         disabled={loading}
    //     >
    //         Add To Cart
    //     </button>
    // </div>
  );
};

const styles = {
  button: {
    margin: "0 5px",
  },
  input: {
    textAlign: "center",
    width: "50px",
  },
};

export default ItemDetails;
