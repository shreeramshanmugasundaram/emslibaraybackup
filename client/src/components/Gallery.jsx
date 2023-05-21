import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Gallery.css";
import Image from "../images/gallery/img1.webp";
import Image1 from "../images/gallery/img2.webp";
import Image2 from "../images/gallery/img3.webp";
import Image3 from "../images/gallery/img4.webp";
import Image4 from "../images/gallery/img5.webp";

const images = [Image, Image1, Image2, Image3, Image4, Image2, Image3, Image4];

const Gallery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <h2 className="center-div" style={{ margin: "2rem auto" }}>
        Gallery
      </h2>
      <div style={{ marginTop: "0rem", width: "120vw" }}>
        <Slider {...settings}>
          {images.map((item) => {
            return (
              <div className="slider-div" key={item}>
                <img src={item} alt="sliderImage" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Gallery;
