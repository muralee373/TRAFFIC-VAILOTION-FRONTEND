
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OverSpeeding.css";
import pdfFile from "../assets/drunken_driving.pdf";

function OverSpeeding() {
  const navigate = useNavigate();

  return (
    <div className="overspeeding-container">
      <h2>🚗 Overspeeding</h2>
      <div className="content">
        <div className="section">
          <h3>Why is Overspeeding Dangerous?</h3>
          <p>
            Speeding is a leading cause of road accidents worldwide. It reduces a driver’s reaction time,
            increases stopping distance, and magnifies crash severity. Driving above the speed limit
            can endanger the driver, passengers, and pedestrians alike.
          </p>
        </div>

        <div className="section">
          <h3>Consequences of Overspeeding</h3>
          <ul>
            <li>Higher chances of losing vehicle control.</li>
            <li>Reduced effectiveness of road safety structures.</li>
            <li>Increased severity of accidents leading to fatal injuries.</li>
            <li>Legal consequences including fines and license suspension.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Legal Penalties for Overspeeding in India (2025)</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>Vehicle Type</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Two-Wheeler</td><td>1000</td></tr>
              <tr><td>Four-Wheeler</td><td>2000</td></tr>
              <tr><td>Commercial Vehicle</td><td>4000</td></tr>
              <tr><td>Repeat Offenders</td><td>5000 - 10,000</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="button-container">
        <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
         <a href={pdfFile} download="DrunkenDriving.pdf" className="pdf-btn">📄 Download PDF</a>
      </div>
    </div>
  );
}

export default OverSpeeding;
