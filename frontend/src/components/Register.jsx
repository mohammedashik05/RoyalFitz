// src/pages/Register.jsx
import React, { useState } from "react";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const apiUrl = `${import.meta.env.VITE_URL}/api/auth`;
// const apiUrl = "http://localhost:5000/api/auth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${apiUrl}/register`, {
        username,
        email,
        password,
      });

      alert(res.data.message || "Registration successful!");
      navigate("/login"); // redirect to login after success
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2 className="auth-title">Register</h2>
        <input
          type="text"
          placeholder="Enter UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-btn">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
