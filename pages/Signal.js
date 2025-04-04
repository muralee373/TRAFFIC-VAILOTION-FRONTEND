import React from "react";
import "../styles/Signal.css";

// Importing videos directly
import video1 from "../assets/Videos/video1.mp4";
import video2 from "../assets/Videos/video2.mp4";
import video3 from "../assets/Videos/video3.mp4";
import video5 from "../assets/Videos/video5.mp4";
import video6 from "../assets/Videos/video6.mp4";
import video7 from "../assets/Videos/video7.mp4";
import video8 from "../assets/Videos/video8.mp4";
import video9 from "../assets/Videos/video9.mp4";
import video10 from "../assets/Videos/video10.mp4";

const videoSources = [video1, video2, video3, video5, video6, video7, video8, video9, video10];

const Signal = () => {
  return (
    <div className="signal-container">
      <h2 className="signal-title">Signal Violation Detection</h2>
      <div className="video-grid">
        {videoSources.map((video, index) => (
          <div key={index} className="video-box">
            <video className="video-player" muted loop autoPlay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signal;
