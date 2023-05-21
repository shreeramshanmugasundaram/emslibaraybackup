import React from "react";
import "./Popup.css";
import "./Footer.css";
import Pana from "../images/icons/pana.svg";
import Close from "../images/icons/close.svg";
import Email from "./Email";
const Popup = ({ setPopup }) => {
  return (
    <div className="PopupWapper">
      <div className="Popup">
        <img src={Pana} alt="newsletterLogo" />
        <img
          src={Close}
          alt="closelettericon"
          onClick={() => setPopup(false)}
        />
        <h3>Subscribe to our newsletter</h3>
        <p>
          Join our weekly Inspiration and Information Newsletter to stay
          motivated, stay informed, and start growing. Click the Subscribe
          button now!"
        </p>
        <Email setPopup={setPopup} />
      </div>
    </div>
  );
};

export default Popup;
