import React, { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { ProductContext } from "../components/ProductProvider.jsx";

const AdminRoute = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { verifyAdmin } = useContext(ProductContext);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const result = await verifyAdmin(); // ✅ Await async call
        setAdmin(result.isAdmin);           // backend returns { isAdmin: true/false }
      } catch (err) {
        console.error("Error verifying admin:", err);
        setAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [verifyAdmin]);

  if (loading) return <div>Loading...</div>;

  return admin ? children : <Navigate to="/home" replace />;
};

export default AdminRoute;
