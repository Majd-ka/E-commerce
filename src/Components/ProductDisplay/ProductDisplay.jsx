import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex my-0 mx-44">
      <div className="dipslay-left flex gap-4">
        <div className="img-list flex flex-col gap-4">
          <img className=" h-28" src={product.image} alt="" />
          <img className=" h-28" src={product.image} alt="" />
          <img className=" h-28" src={product.image} alt="" />
          <img className=" h-28" src={product.image} alt="" />
        </div>
        <div className="main-img">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right flex flex-col my-0 mx-20">
        <h1 className=" font-extrabold text-3xl text-gray-500">
          {product.name}
        </h1>
        <div className="flex items-center mt-4 gap-1 text-gray-800 font-semibold">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(20)</p>
        </div>
        <div className="prices flex my-10 mx-0 gap-8 text-2xl font-bold">
          <div className="left_price text-gray-400 line-through">
            ${product.old_price}
          </div>
          <div className="right_price text-red-900">${product.new_price}</div>
        </div>
        <div className="discription"></div>
        <div className="size">
          <h1 className=" font-extrabold text-3xl text-gray-500 mt-10 ">
            Select Size
          </h1>
          <div className="flex gap-5 my-7 mx-0">
            <div className=" py-5 px-6 bg-slate-200 border border-solid border-slate-400 rounded-md cursor-pointer">
              S
            </div>
            <div className=" py-5 px-6 bg-slate-200 border border-solid border-slate-400 rounded-md cursor-pointer">
              M
            </div>
            <div className=" py-5 px-6 bg-slate-200 border border-solid border-slate-400 rounded-md cursor-pointer">
              L
            </div>
            <div className=" py-5 px-6 bg-slate-200 border border-solid border-slate-400 rounded-md cursor-pointer">
              Xl
            </div>
            <div className=" py-5 px-6 bg-slate-200 border border-solid border-slate-400 rounded-md cursor-pointer">
              XXl
            </div>
          </div>
        </div>
        <button
          onClick={() => addToCart(product.id)}
          className=" rounded-full py-5 px-10 w-52 font-bold text-lg text-white bg-red-800 mb-10"
        >
          Add To Cart
        </button>
        <p></p>
      </div>
    </div>
  );
};

export default ProductDisplay;
