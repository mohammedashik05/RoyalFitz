import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../styles/NotificationPage.css";

const NotificationPage = () => {
  const navigate = useNavigate();
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all low-stock products
  const fetchLowStockProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_URL}/api/products/low-stock`);
      const data = await res.json();

      if (res.ok) {
        setLowStockProducts(data.products || []);
      } else {
        toast.error(data.message || "Failed to fetch low-stock products");
      }
    } catch (err) {
      console.error("Error fetching low stock products:", err);
      toast.error("Something went wrong while fetching low-stock products");
    } finally {
      setLoading(false);
    }
  };

  const handleMarkNotified = async (id) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_URL}/api/products/mark-notified/${id}`, {
        method: "PUT",
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Product marked as notified");
        setLowStockProducts((prev) => prev.filter((p) => p._id !== id));
      } else {
        toast.error(data.message || "Failed to mark as notified");
      }
    } catch (err) {
      console.error("Error marking notified:", err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchLowStockProducts();
  }, []);

  return (
    <div className="notification-page">
      <h2>Low Stock Notifications</h2>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : lowStockProducts.length === 0 ? (
        <p className="empty-text">All products are well stocked 🎉</p>
      ) : (
        <div className="notification-flex">
          {lowStockProducts.map((product) => (
            <div className="notification-card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p>
                  <strong>Stock:</strong>{" "}
                  <span className={product.stock === 0 ? "badge danger" : "badge warning"}>
                    {product.stock === 0 ? "Out of Stock" : product.stock}
                  </span>
                </p>

                <div className="actions">
                  <button
                    onClick={() => navigate(`/update-product/${product._id}`)}
                    className="btn update"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleMarkNotified(product._id)}
                    className="btn notify"
                  >
                    Mark as Notified
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
