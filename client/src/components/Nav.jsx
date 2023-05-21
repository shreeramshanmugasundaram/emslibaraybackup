import React, { useState } from "react";
import "./Nav.css";

import Hamburger from "../images/icons/hamburger.svg";
import Logo from "../images/EMS-library-1.webp";

const Nav = ({ scrollToSection, reference }) => {
  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    const hamburger = document.getElementById("NavId");
    if (window.innerWidth < 880) {
      if (!nav) {
        hamburger.style.transform = "translate(0, 0)";
        setNav(true);
      } else {
        hamburger.style.transform = "translate(-100%, 0)";
        setNav(false);
      }
    }
  };

  return (
    <div className="NavWrapper">
      <div className="Nav center-div">
        <img src={Logo} alt="EMS-Library" />
        <div className="NavBg" id="NavId" onClick={handleMenu}>
          <ul>
            <div className="NavLogo">EMS Libaray</div>
            <li onClick={() => scrollToSection(reference.hero)}>Home</li>
            <li onClick={() => scrollToSection(reference.aboutus)}>About Us</li>
            <li onClick={() => scrollToSection(reference.contactus)}>
              Contact Us
            </li>
          </ul>
        </div>
        <img src={Hamburger} alt="Hamburger" onClick={handleMenu} />
      </div>
    </div>
  );
};

export default Nav;
