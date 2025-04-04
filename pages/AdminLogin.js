import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Check admin credentials
    if (username === "admin" && password === "admin@123") {
      alert("Welcome Admin! 🚀");
      navigate("/Dashboard");
    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleAdminLogin} className="admin-login-form">
        <h2>🔐 Admin Login</h2>

        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="admin-btn">
          Login 🚀
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
