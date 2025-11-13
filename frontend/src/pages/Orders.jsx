import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import axios from "axios";
import "../styles/Orders.css";
import Lottie from "lottie-react";
import Loading from "../animation/loading.json";

function Orders() {
  const { token } = useContext(ProductContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_URL;

  // ✅ Fetch user's orders
  const fetchOrders = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/orderPlaced/user-orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setOrders(res.data.orders || []);
    console.log("Updated Orders:", res.data.orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
  }
};


 useEffect(() => {
  const load = async () => {
    await fetchOrders();
    setLoading(false);
  };
  load();

  const interval = setInterval(fetchOrders, 5000); // 🔄 auto refresh every 5s
  return () => clearInterval(interval);
}, []);


  if (loading)
    return (
      <div className="loading-container">
        <Lottie className="loadingAnimation" animationData={Loading} loop />
        <p className="loading-text">Loading Your Orders...</p>
      </div>
    );

  return (
    <div className="orders-container">
      <h2>My Order History</h2>

      {orders.length === 0 ? (
        <p className="no-orders">You haven’t placed any orders yet.</p>
      ) : (
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Products</th>
                <th>Total Amount</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>
                    <ul className="product-list">
                      {order.cart.map((item, i) => (
                        <li key={i}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="order-product-img"
                          />
                          <span>{item.name}</span>
                          <span className="qty">x{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>₹{order.totalAmount}</td>
                  <td>{order.address}</td>
                  <td>{order.mobileNo}</td>
                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Orders;
