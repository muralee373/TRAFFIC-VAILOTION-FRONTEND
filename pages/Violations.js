import React from "react";
//import "../styles/violations.css"; // Ensure this file is created for styling

const violations = [
  { id: 1, name: "Signal Violation", image: "/images/signal.png", path: "/SignalJumping" },
  { id: 2, name: "Drunken Driving", image: "/images/drunk-driving.png", path: "/drunk-driving" },
  { id: 3, name: "Overspeeding", image: "/images/overspeeding.png", path: "/overspeeding" },
  { id: 4, name: "No Helmet", image: "/images/no-helmet.png", path: "/NoHelmet" },
  { id: 5, name: "No Seatbelt", image: "/images/no-seatbelt.png", path: "/no-seatbelt" },
  { id: 6, name: "Wrong Parking", image: "/images/wrong-parking.png", path: "/wrong-parking" },
  { id: 7, name: "Overloading", image: "/images/overloading.png", path: "/overloading" },
  { id: 8, name: "Rash Driving", image: "/images/rash-driving.png", path: "/rash-driving" },
];

const Violations = () => {
  return (
    <div className="violations-container">
      <h2>Types of Violations</h2>
      <div className="violations-grid">
        {violations.map((violation) => (
          <a key={violation.id} href={violation.path} className="violation-box">
            <img src={violation.image} alt={violation.name} className="violation-image" />
            <p>{violation.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Violations;
