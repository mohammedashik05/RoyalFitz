import React, { useEffect, useState } from "react";
import order_Delivered from "../animation/order_Delivered.json"
import axios from "axios";
import "../styles/AdminDashBoard.css";
import Lottie from "lottie-react";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [delivered,setDelivered]=useState(false);

  // Fetch all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orderPlaced/all");
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, []);

  const handleClosePopup = () => setSelectedOrder(null);

  const updateOrderStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orderPlaced/update/${id}`, {
        status: newStatus,
      });
      setOrders((prev) =>
        prev.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
      setSelectedOrder(null);
      if(newStatus=="Delivered") setDelivered(true);

      setTimeout(() => setDelivered(false), 5000);

      // alert(`Order marked as ${newStatus}`);
    } catch (err) {
      console.error("Error updating order:", err);
    }
  };

  if (loading) return <div className="loading">Loading orders...</div>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard - Order's</h1>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Products</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} onClick={() => setSelectedOrder(order)}>
                <td data-label="User">{order.username}</td>
                <td data-label="Email">{order.email}</td>
                <td data-label="Mobile">{order.mobileNo}</td>
                <td data-label="Address">{order.address}</td>
                <td data-label="Products">
                  {order.cart.map((item) => (
                    <div key={item.id}>
                      {item.name} × {item.quantity}
                    </div>
                  ))}
                </td>
                <td data-label="Total">₹{order.totalAmount.toFixed(2)}</td>
                <td data-label="Status">
                  <span
                    className={`status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Modal */}
      {selectedOrder && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Order Details</h2>
            <div className="popup-details">
              <p><strong>User:</strong> {selectedOrder.username}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Mobile:</strong> {selectedOrder.mobileNo}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
              <p><strong>Total:</strong> ₹{selectedOrder.totalAmount.toFixed(2)}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>

              <div>
                <strong>Products:</strong>
                <ul>
                  {selectedOrder.cart.map((item) => (
                    <li key={item.id}>
                      {item.name} × {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="popup-buttons">
              <button
                className="btn-delivered"
                onClick={() =>
                  updateOrderStatus(selectedOrder._id, "Delivered")
                }
              >
                Mark as Delivered
              </button>
              <button
                className="btn-cancel"
                onClick={() =>
                  { updateOrderStatus(selectedOrder._id, "Cancelled");
                    
                  }
                }
              >
                Cancel Order
              </button>
              <button className="btn-close" onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {
        delivered &&
        <div className="delivered-animation-overlay">
            <div className="delivered-animation-box">
              <Lottie animationData={order_Delivered} loop={false} />          
            </div>
          </div>
      }


    </div>
  );
}

export default AdminDashboard;
