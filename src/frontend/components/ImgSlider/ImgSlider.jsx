import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";

export const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="slider">
      <div>
        <img
          src="./assets/images/gownew.jpg"
          alt="first"
          className="slide-img"
        />
      </div>
      <div>
        <img
          src="./assets/images/unchartnew.jpg"
          alt="second"
          className="slide-img"
        />
      </div>
      <div>
        <img
          src="./assets/images/gow2new.png"
          alt="third"
          className="slide-img"
        />
      </div>
      <div>
        <img
          src="./assets/images/codnew.jpg"
          alt="four"
          className="slide-img"
        />
      </div>
      <div>
        <img
          src="./assets/images/slider-badag.jpg"
          alt="five"
          className="slide-img"
        />
      </div>
      <div>
        <img
          src="./assets/images/slider-badging.jpg"
          alt="six"
          className="slide-img"
        />
      </div>
      <div>
        <img
          src="./assets/images/slider-scale.jpg"
          alt="seven"
          className="slide-img"
        />
      </div>
    </Slider>
  );
};
