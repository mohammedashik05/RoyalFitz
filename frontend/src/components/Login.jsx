// src/pages/Login.jsx


import React, { useState } from "react";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast"
const apiUrl = "https://menswear-backend1.onrender.com/api/auth";
// const apiUrl = "http://localhost:5000/api/auth";


console.log(apiUrl)
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      // API call to backend login route
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });
      console.log(response);

      if (response.data.success) {
        // ✅ store token & user in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        toast.success("Login Successfull!");
        navigate("/home");
        
      } else {
        
        toast.error(response.data.message || "Login failed");
        
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Server error. Please try again.");
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />

        <button type="submit" className="auth-btn"  onClick={handleSubmit} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Don’t have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
