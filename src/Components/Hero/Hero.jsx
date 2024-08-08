import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero flex">
      <div className="hero-left flex flex-1 flex-col justify-center gap-5 md:pl-44 pl-10">
        <h2 className="font-bold text-5xl">New Arrivals</h2>
        <div>
          <div className="hero-hand-icon flex items-center gap-5">
            <p>New</p>
            <img className="md:w-28 w-20" src={hand_icon} alt="" />
          </div>
          <p className="m-2">Collection</p>
          <p className="m-2">for Everyone</p>
        </div>
        <div className="hero-btn flex items-center justify-center gap-4 w-80 h-20 mt-5 text-white font-medium text-2xl cursor-pointer">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right flex justify-center items-center">
        <img className="w-3/4" src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
