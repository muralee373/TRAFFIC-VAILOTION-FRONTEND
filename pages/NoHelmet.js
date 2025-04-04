import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NoHelmet.css";
import pdfFile from "../assets/drunken_driving.pdf";

function NoHelmet() {
  const navigate = useNavigate();

  return (
    <div className="signal-jumping-container">
      <h2>🏍️ No Helmet</h2>
      <div className="content">
        <div className="section">
          <h3>Importance of Wearing a Helmet</h3>
          <p>
            Helmets are crucial in protecting riders from severe head injuries in case of an accident. 
            According to studies, wearing a helmet reduces the risk of fatal head injuries by up to 70%.
          </p>
          <p>
            In many states, wearing a helmet is mandatory, and failing to do so results in hefty fines and penalties.
          </p>
        </div>

        <div className="section">
          <h3>Penalties for Riding Without a Helmet</h3>
          <ul>
            <li>First-time offenders may face a fine of Rs. 1,000 and suspension of their driving license.</li>
            <li>Repeated violations may lead to higher penalties and even legal action.</li>
            <li>Pillion riders are also required to wear helmets in many states.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Fine for Not Wearing a Helmet in Different Indian States (2025)</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Delhi</td><td>1000</td></tr>
              <tr><td>Maharashtra</td><td>500</td></tr>
              <tr><td>Karnataka</td><td>500</td></tr>
              <tr><td>Tamil Nadu</td><td>1000</td></tr>
              <tr><td>West Bengal</td><td>300</td></tr>
              <tr><td>Gujarat</td><td>500</td></tr>
              <tr><td>Rajasthan</td><td>500</td></tr>
              <tr><td>Punjab</td><td>1000</td></tr>
            </tbody>
          </table>
        </div>

        <div className="button-container">
          <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
          <a href={pdfFile} download="drunken_driving.pdf" className="download-pdf">📄 Download PDF</a>
        </div>
      </div>
    </div>
  );
}

export default NoHelmet;
