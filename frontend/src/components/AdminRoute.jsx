import React, { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { ProductContext } from "../components/ProductProvider.jsx";
import Lottie from "lottie-react";
import Loading from "../animation/loading.json"; // ✅ Import your Lottie JSON
// import "../styles/AdminRoute.css"; // ✅ Add new CSS for animation layout

const AdminRoute = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { verifyAdmin } = useContext(ProductContext);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const result = await verifyAdmin();
        setAdmin(result.isAdmin);
      } catch (err) {
        console.error("Error verifying admin:", err);
        setAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [verifyAdmin]);

  // ✅ Show Lottie animation while verifying admin access
  if (loading) {
    return (
      <div className="loading-container">
        <Lottie className="loadingAnimation" animationData={Loading} loop />
        <p className="loading-text">Verifying Admin Access...</p>
      </div>
    );
  }

  // ✅ Render route only if verified admin
  return admin ? children : <Navigate to="/home" replace />;
};

export default AdminRoute;
