

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NoSeatBelt.css";
import pdfFile from "../assets/drunken_driving.pdf";

function NoSeatBelt() {
  const navigate = useNavigate();

  return (
    <div className="no-seatbelt-container">
      <h2>🚫 No Seatbelt</h2>

      <div className="content">
        <div className="section">
          <h3>Why is Wearing a Seatbelt Important?</h3>
          <p>
            Seatbelts are one of the most effective safety measures in vehicles. 
            They prevent passengers from being ejected during accidents and reduce 
            the severity of injuries by distributing force across stronger body parts.
          </p>
          <p>
            Studies have shown that wearing a seatbelt reduces the risk of death in 
            car crashes by 45% for front-seat passengers and 60% for rear-seat passengers.
          </p>
        </div>

        <div className="section">
          <h3>Consequences of Not Wearing a Seatbelt</h3>
          <ul>
            <li>Increased risk of severe injury or death in an accident.</li>
            <li>Legal penalties, including fines and driving license suspension.</li>
            <li>Higher medical expenses due to lack of safety precautions.</li>
            <li>Increased risk of impacting other passengers during a crash.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Safety Measures</h3>
          <ul>
            <li>Always wear a seatbelt before starting the vehicle.</li>
            <li>Ensure that all passengers buckle up, including those in the back seat.</li>
            <li>Adjust the seatbelt properly so it fits snugly across the chest and lap.</li>
            <li>Teach children about the importance of seatbelts from a young age.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Fines for Not Wearing a Seatbelt in Different Indian States (2025)</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Delhi</td><td>1,000</td></tr>
              <tr><td>Maharashtra</td><td>500 - 1,500</td></tr>
              <tr><td>Karnataka</td><td>1,000</td></tr>
              <tr><td>Uttar Pradesh</td><td>1,500</td></tr>
              <tr><td>Punjab</td><td>1,000</td></tr>
              <tr><td>West Bengal</td><td>1,200</td></tr>
              <tr><td>Telangana</td><td>1,000</td></tr>
              <tr><td>Rajasthan</td><td>800 - 1,200</td></tr>
            </tbody>
          </table>
        </div>

        <div className="button-container">
          <button className="button go-back" onClick={() => navigate(-1)}>🔙 Go Back</button>
          <a href={pdfFile} download="DrunkenDriving.pdf" className="pdf-btn">📄 Download PDF</a>
        </div>
      </div>
    </div>
  );
}

export default NoSeatBelt;
