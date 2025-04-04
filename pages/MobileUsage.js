import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MobileUsage.css";
import pdfFile from "../assets/drunken_driving.pdf";

function MobileUsage() {
  const navigate = useNavigate();

  return (
    <div className="mobile-usage-container">
      <h2>📵 Mobile Usage While Driving</h2>

      <div className="content">
        <div className="section">
          <h3>Why is Using a Mobile While Driving Dangerous?</h3>
          <p>
            Using a mobile phone while driving is extremely dangerous as it diverts attention from the road, 
            increases reaction time, and leads to severe accidents. It is one of the primary causes of road crashes globally.
          </p>
          <p>
            In India, using a phone while driving is strictly prohibited, and violators are fined heavily to ensure road safety.
          </p>
        </div>

        <div className="section">
          <h3>Risks of Using a Mobile Phone While Driving</h3>
          <ul>
            <li>Increased chances of accidents due to lack of focus.</li>
            <li>Slower reaction time in case of unexpected road hazards.</li>
            <li>Violation of traffic laws, leading to penalties.</li>
            <li>Possibility of losing driving privileges if caught multiple times.</li>
          </ul>
        </div>

        <div className="section">
          <h3>How to Avoid Mobile Usage While Driving</h3>
          <ul>
            <li>Use a hands-free device if urgent communication is required.</li>
            <li>Pull over safely if you need to take or make a call.</li>
            <li>Turn on "Do Not Disturb" mode to prevent distractions.</li>
            <li>Educate passengers to avoid distracting the driver.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Fines for Using a Mobile While Driving in Different Indian States (2025)</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Andhra Pradesh</td><td>1,000</td></tr>
              <tr><td>Delhi</td><td>5,000</td></tr>
              <tr><td>Haryana</td><td>2,000</td></tr>
              <tr><td>Karnataka</td><td>1,500</td></tr>
              <tr><td>Maharashtra</td><td>2,500</td></tr>
              <tr><td>Punjab</td><td>1,000 - 2,000</td></tr>
              <tr><td>Telangana</td><td>1,500</td></tr>
              <tr><td>Uttar Pradesh</td><td>2,000</td></tr>
              <tr><td>West Bengal</td><td>1,000</td></tr>
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

export default MobileUsage;
