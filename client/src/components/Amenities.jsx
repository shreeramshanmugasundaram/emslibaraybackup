import React from "react";
import icon1 from "../images/icons/wifi.svg";
import icon2 from "../images/icons/airconditioning.svg";
import icon3 from "../images/icons/plug.svg";
import icon4 from "../images/icons/note.svg";
import icon5 from "../images/icons/newspaper1.svg";
import icon6 from "../images/icons/newspaper2.svg";

import "./Amenities.css";
const cards = [
  { img: icon1, text: "Wifi enabled campus" },
  { img: icon2, text: "Comfortable seating with AC" },
  { img: icon3, text: "Power Backup" },
  { img: icon4, text: "Free Competitive exam resources" },
  { img: icon5, text: "Free Email newsletter" },
  { img: icon6, text: "Extensive collection of newspapers" },
];
const Amenities = () => {
  return (
    <div className="center-div">
      <h2 style={{ margin: "3rem 0 1rem 0" }}>Amenities</h2>
      <div className="Amenities">
        {cards.map((item) => {
          return (
            <div className="AmenitiesCard" key={item.text}>
              <div>
                <img src={item.img} alt="icon" />
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
