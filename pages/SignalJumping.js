import React from "react";
import { useNavigate } from "react-router-dom";
//import "../styles/SignalJumping.css";
import pdfFile from "../assets/drunken_driving.pdf";

function SignalJumping() {
  const navigate = useNavigate();

  return (
    <div className="signal-jumping-container">
      <h2>🚦 Signal Jumping</h2>
      <div className="content">
        <div className="section">
          <h3>Red Light Jumping Challan – Things to Know</h3>
          <p>
            You will have to pay a jumping red light fine if you break the signal or violate the traffic rule. 
            You will be given a red light jump challan of Rs. 1,000 for breaking or not following the traffic signal or light. 
            Prior to the Motor Vehicle Act amendment, a fine of roughly Rs. 100-300 was chargeable as the red light jump fine.
          </p>
          <p>
            The signal jump challan penalty is similar for all vehicles which are breaking the signals on roads. 
            This is not dependent on the specific vehicle type.
          </p>
        </div>

        <div className="section">
          <h3>The Procedure Followed After Breaking the Traffic Signal</h3>
          <ul>
            <li>Your vehicle will be stopped by the traffic police officer on the side of the road.</li>
            <li>The police officer will ask to see all your relevant documents of the vehicle including the driving license and the RC book as well.</li>
            <li>The police officer will then issue the jumping red light challan either offline or online.</li>
            <li>If issued offline, visit the nearest traffic police station to pay the fine.</li>
            <li>If issued online, visit your State Transport Department's website to complete the payment.</li>
            <li>Ensure that you keep the receipt of this payment safely for future reference.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Process to Pay Challan for Jumping Red Light Signal in India</h3>
          <h4>Offline Procedure:</h4>
          <ul>
            <li>Visit a Traffic Police Station near you.</li>
            <li>Enquire about your challan details.</li>
            <li>Submit the payment after checking the details.</li>
            <li>Keep the challan receipt safely with you.</li>
          </ul>
          <h4>Online Procedure:</h4>
          <ul>
            <li>Go to the website of the Department of Transport of your respective state.</li>
            <li>Click on the ‘Challan payment’ button.</li>
            <li>Enter your vehicle registration number or challan number.</li>
            <li>Check the challan details.</li>
            <li>Click ‘Pay Now’ and choose the mode of payment.</li>
            <li>Complete the payment using your preferred method.</li>
            <li>Download the receipt for future reference.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Fine for Red Light Jumping in Different Indian States in 2025</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Fine Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Andhra Pradesh</td><td>1000</td></tr>
              <tr><td>Delhi</td><td>1000</td></tr>
              <tr><td>Haryana</td><td>5000</td></tr>
              <tr><td>Karnataka</td><td>500</td></tr>
              <tr><td>Maharashtra</td><td>200</td></tr>
              <tr><td>Punjab</td><td>500 - 1000</td></tr>
              <tr><td>Telangana</td><td>500</td></tr>
              <tr><td>Uttar Pradesh</td><td>300 - 500</td></tr>
              <tr><td>West Bengal</td><td>100</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="button-container">
        <button className="button go-back" onClick={() => navigate(-1)}>⬅ Go Back</button>
        <a href={pdfFile} download="DrunkenDriving.pdf" className="button download-pdf">📄 Download PDF</a>
      </div>
    </div>
  );
}

export default SignalJumping;