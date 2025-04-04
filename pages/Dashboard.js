import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Get users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="admin-dashboard-container">
      {/* Header with Live Button */}
      <div className="dashboard-header">
        <h2>📊 Admin Dashboard</h2>
        <button className="live-btn">🔴 Live</button>
      </div>

      {/* Users Table */}
      <table className="admin-users-table">
        <thead>
          <tr>
            <th>🚗 Vehicle Number</th>
            <th>📞 Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="2">No Users Found 😔</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.vehicleNumber}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
