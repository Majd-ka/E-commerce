import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import Product from "../../Pages/Product";
function Breadcrums({ product }) {
  return (
    <div className="flex items-center gap-2 font-semibold text-xl my-16 mx-44 capitalize text-gray-600">
      <img className="inline" src={arrow_icon} alt="" />
      Shop <img className="inline" src={arrow_icon} alt="" /> {product.category}{" "}
      <img className="inline" src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrums;
