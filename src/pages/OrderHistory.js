import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { toastNotify } from "../utils/toastNotify";
import { BackendRoutes } from "../config/BackendRoutes";
import SpinnerLoader from "../components/ui/loader/SpinnerLoader";

const OrderHistory = () => {
  const [orderNumber, setOrderNumber] = useState([]);
  const [orderDate, setOrderDate] = useState([]);
  const [totalItems, setTotalItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state

  // Retrieve userId from session storage or context
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          BackendRoutes.order.endpoints.showOrderHistory(userId)
        );
        setOrderNumber(response.data.orderNumber || []);
        setOrderDate(response.data.orderDate || []);
        setTotalItems(response.data.totalItems || []);
        setTotalPrice(response.data.totalItemsPrice || []);
      } catch (error) {
        console.error("Error fetching item details", error);
        toastNotify(
          "error",
          error.response?.data?.message || "Error fetching item details"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (loading) return <div>{SpinnerLoader()}</div>;

  if (
    orderNumber.length === 0 ||
    orderDate.length === 0 ||
    totalItems.length === 0 ||
    totalPrice.length === 0
  ) {
    return (
      <div className="text-center" style={{ marginTop: "15rem" }}>
        No orders found.
      </div>
    );
  }

  return (
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Orders History
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>Total Items</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orderNumber.map((order, index) => (
            <tr key={order}>
              <td>{order}</td>
              <td>{new Date(orderDate[index]).toLocaleDateString()}</td>
              <td>{totalItems[index]}</td>
              <td>{totalPrice[index].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
