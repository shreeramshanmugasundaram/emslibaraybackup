import React from "react";
import Education from "../images/education1.mp4";

import "./Hero.css";
const Hero = ({ scrollToSection, contactus, reference }) => {
  return (
    <div className="Hero center-div" ref={reference}>
      <div className="HeroContent">
        <h2 className="ft-h1-bold">
          The ultimate destination for{" "}
          <span style={{ color: "var(--clr-primary)" }}>curious</span> minds.
        </h2>
        <p className="ft-h3">
          Join the best library in Pratap Nagar, Jaipur today!
        </p>
        <button className="btn-1" onClick={() => scrollToSection(contactus)}>
          Contact Us
        </button>
      </div>
      <div className="HeroVideo">
        <video src={Education} autoPlay muted loop type="video/mp4"></video>
      </div>
    </div>
  );
};

export default Hero;
