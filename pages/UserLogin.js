import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/UserLogin.css";

function UserLogin() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored data from localStorage
    const storedData = JSON.parse(localStorage.getItem("user"));

    // Check if user exists
    if (
      storedData &&
      storedData.vehicleNumber === vehicleNumber &&
      storedData.phoneNumber === phoneNumber
    ) {
      alert("Login Successful! 🎉");
      navigate("/userdashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1e3a8a",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "linear-gradient(to right, #ff4e50, #1e3c72)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>🔐 User Login</h2>

        <label style={{ color: "#fff", fontWeight: "bold" }}>
          Vehicle Number:
        </label>
        <input
          type="text"
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#333",
            color: "#fff",
          }}
        />

        <label style={{ color: "#fff", fontWeight: "bold" }}>
          Phone Number:
        </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#333",
            color: "#fff",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff4e50",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
          }}
        >
          Login 🚀
        </button>

        <p style={{ marginTop: "15px", color: "#fff" }}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#ffeb3b",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Signup Here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;
