import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DD.css"; // Import the CSS file
import pdfFile from "../assets/drunken_driving.pdf";

const DrunkenDriving = () => {
  const navigate = useNavigate();

  return (
    <div className="drunken-driving-container">
      <h2>🚔 Drunken Driving</h2>

      <div className="drunken-driving-content">
        {/* Section 1 - Law Overview */}
        <div className="section">
          <h3>Why is Drunken Driving Dangerous?</h3>
          <p>
            Drunken driving significantly reduces reaction time, impairs judgment, and increases the likelihood of accidents.
            It endangers not only the driver but also passengers, pedestrians, and other motorists.
          </p>
        </div>

        {/* Section 2 - Legal Details */}
        <div className="section">
          <h3>Legal Provisions - Section 185 of the Motor Vehicles Act</h3>
          <p>
            Section 185 of the Motor Vehicles Act strictly prohibits driving under the influence of alcohol or drugs. 
            Offenders may face severe legal consequences, including imprisonment and fines.
          </p>

          <h4>Key Provisions:</h4>
          <ul>
            <li><strong>Blood Alcohol Limit:</strong> 30 mg per 100 ml of blood.</li>
            <li><strong>Impaired Driving:</strong> Driving under the influence of drugs or alcohol is illegal.</li>
          </ul>
        </div>

        {/* Section 3 - Penalties */}
        <div className="section">
          <h3>Penalties for Drunken Driving</h3>

          <h4>First-Time Offenders:</h4>
          <ul>
            <li>Imprisonment up to six months.</li>
            <li>Fine up to ₹10,000.</li>
            <li>Both imprisonment and fine.</li>
          </ul>

          <h4>Repeat Offenders:</h4>
          <ul>
            <li>Imprisonment up to two years.</li>
            <li>Fine up to ₹15,000.</li>
            <li>Both imprisonment and fine.</li>
          </ul>
        </div>

        {/* Section 4 - Fines Structure */}
        <div className="section">
          <h3>Fines & Legal Penalties</h3>
          <table className="fine-table">
            <thead>
              <tr>
                <th>Offense</th>
                <th>Fine Amount</th>
                <th>Imprisonment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Offense</td>
                <td>₹10,000</td>
                <td>Up to 6 months</td>
              </tr>
              <tr>
                <td>Second Offense</td>
                <td>₹15,000</td>
                <td>Up to 2 years</td>
              </tr>
              <tr>
                <td>Refusal to Take Breath Test</td>
                <td>₹2,000</td>
                <td>License Suspension</td>
              </tr>
              <tr>
                <td>Causing an Accident Under Influence</td>
                <td>₹25,000</td>
                <td>Imprisonment as per IPC</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5 - Prevention Measures */}
        <div className="section">
          <h3>Prevention & Awareness</h3>
          <p>To prevent accidents caused by drunk driving, always:</p>
          <ul>
            <li>Use a designated driver or public transport after consuming alcohol.</li>
            <li>Avoid driving under the influence of drugs or medication.</li>
            <li>Encourage responsible drinking habits among friends and family.</li>
            <li>Support law enforcement initiatives to curb drunken driving.</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="button-container">
        <button onClick={() => navigate(-1)} className="button go-back">
            ⬅ Go Back
          </button>
        <a href={pdfFile} download="DrunkenDriving.pdf" className="button download-pdf">
            📄 Download PDF
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default DrunkenDriving;
