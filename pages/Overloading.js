import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Overloading.css";
import pdfFile from "../assets/drunken_driving.pdf";

function Overloading() {
  const navigate = useNavigate();

  return (
    <div className="overloading-container">
      <h2>🚕 Overloading</h2>

      <div className="content">
        <div className="section">
          <h3>Why is Overloading Dangerous?</h3>
          <p>
            Overloading a vehicle significantly affects its stability, braking 
            efficiency, and overall control. It increases the risk of accidents, 
            reduces fuel efficiency, and puts excessive strain on vehicle components.
          </p>
          <p>
            Vehicles exceeding their weight limit have a higher chance of tire 
            blowouts, brake failure, and mechanical breakdowns, endangering the 
            driver and others on the road.
          </p>
        </div>

        <div className="section">
          <h3>Consequences of Overloading</h3>
          <ul>
            <li>Reduced braking efficiency leading to longer stopping distances.</li>
            <li>Higher risk of vehicle rollovers and loss of control.</li>
            <li>Increased tire wear and chances of tire bursts.</li>
            <li>Possible fines and legal penalties for violating weight limits.</li>
            <li>Structural damage to roads, bridges, and highways.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Safety Measures</h3>
          <ul>
            <li>Always check and adhere to the vehicle’s weight limit.</li>
            <li>Distribute load evenly to maintain vehicle balance.</li>
            <li>Avoid carrying excess passengers beyond the seating capacity.</li>
            <li>Regularly inspect tire pressure and suspension system.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Fines for Overloading in Different Indian States (2025)</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Delhi</td><td>5,000 + ₹2,000 per extra ton</td></tr>
              <tr><td>Maharashtra</td><td>4,000 + ₹1,500 per extra ton</td></tr>
              <tr><td>Karnataka</td><td>5,000 + ₹2,500 per extra ton</td></tr>
              <tr><td>Uttar Pradesh</td><td>4,500 + ₹2,000 per extra ton</td></tr>
              <tr><td>Punjab</td><td>5,000 + ₹1,800 per extra ton</td></tr>
              <tr><td>West Bengal</td><td>4,000 + ₹1,600 per extra ton</td></tr>
              <tr><td>Telangana</td><td>5,500 + ₹2,200 per extra ton</td></tr>
              <tr><td>Rajasthan</td><td>4,200 + ₹1,900 per extra ton</td></tr>
            </tbody>
          </table>
        </div>

        <div className="button-container">
          <button className="button go-back" onClick={() => navigate(-1)}>🔙 Go Back</button>
          <a href={pdfFile} download="Overloading.pdf" className="button download-pdf">📄 Download PDF</a>
        </div>
      </div>
    </div>
  );
}

export default Overloading;
