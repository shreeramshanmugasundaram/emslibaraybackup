import React from "react";
import Slider from "react-slick";
import star from "../images/icons/star.svg";

import "./Testimonial.css";
const data = [
  {
    msg: "Best Library in Pratap Nagar. 5 star ambiance, great study environment, cooperative staff.",
    name: "Shaurya",
    rating: "4.8",
  },
  {
    msg: " Peaceful study environment, good infrastructure, access to high speed Internet and separate room to read newspaper. What else one needs to study hard and get success!",
    name: "Chandra",
    rating: "5",
  },
  {
    msg: "Best Library I’ve ever been to! It has separate room for discussion and news paper reading. overall great management!",

    name: "Poonam",
    rating: "4.5",
  },
  {
    msg: "Great infrastructure! Really the best library in Pratap Nagar and Malviya Nagar area.",

    name: "Ajay",
    rating: "5",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div>
      <h2 className="center-div" style={{ marginTop: "3rem" }}>
        What do people say about us?
      </h2>

      <div className="Testimonial">
        <div className="center-div">
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div key={item.name}>
                  <div className="TestimonialCard">
                    <div>{item.msg}</div>
                    <h4>{item.name}</h4>
                    <span>
                      {item.rating} <img src={star} alt="star" />
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
