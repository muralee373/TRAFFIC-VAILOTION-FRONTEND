import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if data already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Create new user object
    const newUser = {
      vehicleNumber: vehicleNumber,
      phoneNumber: phoneNumber,
    };

    // Add new user to existing users
    existingUsers.push(newUser);

    // Save updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup Successful! 🎉 Please Login Now.");
    navigate("/user");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>🚗 Signup</h2>

        <label>Vehicle Number:</label>
        <input
          type="text"
          placeholder="Enter Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <button type="submit">Signup 🚀</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/User")} className="login-link">
            Login Here
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
