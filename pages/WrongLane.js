import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WL.css";
import pdfFile from "../assets/drunken_driving.pdf";

function WrongLane() {
  const navigate = useNavigate();

  return (
    <div className="wrong-lane-container">
      <h2>🚴 Wrong Lane Driving</h2>

      <div className="content">
        <div className="section">
          <h3>What is Wrong Lane Driving?</h3>
          <p>
            Wrong lane driving occurs when a vehicle is driven in the opposite or incorrect lane, 
            violating traffic rules. This behavior is dangerous and can result in head-on collisions and severe accidents.
          </p>
          <p>
            Many accidents are caused due to drivers not following the designated lanes, 
            especially at intersections and one-way roads.
          </p>
        </div>

        <div className="section">
          <h3>Consequences of Driving in the Wrong Lane</h3>
          <ul>
            <li>Increased risk of accidents due to unexpected oncoming vehicles.</li>
            <li>Traffic congestion and road blockages.</li>
            <li>Legal penalties, fines, and possible suspension of driving license.</li>
            <li>Endangerment of pedestrians and other motorists.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Preventive Measures</h3>
          <ul>
            <li>Follow road signs and lane markings diligently.</li>
            <li>Always check for lane direction before entering a road.</li>
            <li>Use indicators and side mirrors before changing lanes.</li>
            <li>Educate new drivers about the dangers of wrong lane driving.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Fines for Wrong Lane Driving in Different Indian States (2025)</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Delhi</td><td>2,000 - 5,000</td></tr>
              <tr><td>Maharashtra</td><td>2,000</td></tr>
              <tr><td>Karnataka</td><td>1,500</td></tr>
              <tr><td>Uttar Pradesh</td><td>1,000</td></tr>
              <tr><td>Punjab</td><td>1,500 - 3,000</td></tr>
              <tr><td>West Bengal</td><td>2,500</td></tr>
              <tr><td>Telangana</td><td>2,000</td></tr>
              <tr><td>Rajasthan</td><td>1,500</td></tr>
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

export default WrongLane;
