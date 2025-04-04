import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import trafficImage from "../assets/traffic.jpg";
import hawkeyeLogo from "../assets/hawkeye-logo.jpg";


const awarenessStories = [
  {
    id: 1,
    title: "The Red Light Tragedy 🚦",
    text: "Raj was running late for work. In a rush, he sped through a red light at a busy intersection. A truck coming from the side had no time to stop. The result? A devastating collision. A moment of impatience cost him his life.",
    moral: "Never run red lights. They exist to save lives!",
    image: require("../assets/red-light-accident.jpg"),
  },
  {
    id: 2,
    title: "The Drunk Driver’s Regret 🍻🚗",
    text: "Arjun had a party and thought he was 'fine' to drive home. Halfway through the journey, his reflexes slowed, and he swerved into another lane, crashing into a family’s car. The little girl in the back seat never made it home.",
    moral: "If you drink, never drive. Take a cab or ask a friend for help!",
    image: require("../assets/drunk-driving.jpg"),
  },
  {
    id: 3,
    title: "Speeding Near a School – A Close Call 🚸",
    text: "Sana was excited to reach her destination faster, pressing the accelerator near a school zone. Just as she turned the corner, a little boy ran across the street. Her brakes screeched, barely stopping in time. One more second, and it would’ve been fatal.",
    moral: "Always slow down in school zones. Children are unpredictable!",
    image: require("../assets/school-zone-warning.jpg"),
  },
];

function Home() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % awarenessStories.length);
  };

  const prevStory = () => {
    setCurrentStory(
      (prev) => (prev - 1 + awarenessStories.length) % awarenessStories.length
    );
  };

  return (
    <div className="home-container">
      <title>Hawkeye - "We Are Watching"</title>

      <header className="header">
        <div className="header-content">
          <img src={hawkeyeLogo} alt="Hawkeye Logo" className="logo small-logo" />
          <h1 className="title">Hawkeye - "We Are Watching"</h1>
        </div>
        <nav className="nav-icons">
         <Link to="/signal" className="nav-link signal-icon"></Link>
          <Link to="/admin" className="nav-link admin-icon"></Link>
          <Link to="/user" className="nav-link user-icon"></Link>
        </nav>
      </header>

      <section className="banner">
        <img src={trafficImage} alt="Heavy Traffic" className="banner-image" />
        <h2 className="quote">"Safety is Gainful, Accidents are Painful"</h2>
      </section>

     

    <section className="violations" id="violations">
        <h2>Types of Violations</h2>
        <div className="violations-grid">
          <Link to="/signal-jumping" className="violation-box">🚦 Signal Jumping</Link>
          <Link to="/no-helmet" className="violation-box">🏍️ No Helmet</Link>
          <Link to="/overspeeding" className="violation-box">🚗 Overspeeding</Link>
          <Link to="/mobile-usage" className="violation-box">📵 Mobile Usage</Link>
          <Link to="/wrong-lane" className="violation-box">🚴 Wrong Lane Driving</Link>
          <Link to="/no-seatbelt" className="violation-box">🚫 No Seatbelt</Link>
          <Link to="/overloading" className="violation-box">🚕 Overloading</Link> 
          <Link to="/DrunkenDriving" className="violation-box">🍺 Drunk Driving</Link>
        </div>
      </section> 

      <section className="awareness">
        <h2>Awareness Stories</h2>
        <div className="story-container">
          <button className="nav-btn left" onClick={prevStory}>
            ⬅
          </button>
          <div className="story-content">
            <img
              src={awarenessStories[currentStory].image}
              alt="Story"
              className="story-image"
            />
            <div className="story-text">
              <h3>{awarenessStories[currentStory].title}</h3>
              <p>{awarenessStories[currentStory].text}</p>
              <p className="moral">
                <strong>Moral:</strong> {awarenessStories[currentStory].moral}
              </p>
            </div>
          </div>
          <button className="nav-btn right" onClick={nextStory}>
            ➡
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Hawkeye - Traffic Violation Detection System</p>
      </footer>
    </div>
  );
}

export default Home;
