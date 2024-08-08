import React from "react";
import "./offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offer flex">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
