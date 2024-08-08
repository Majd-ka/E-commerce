import React, { useContext } from "react";
import "./css/ShopCategory.css";
import ShopContext from "../Context/ShopContext";
import dropdowen_icon from "../Components/Assets/dropdown_icon.png";
import all_product from "../Components/Assets/all_product";

import Item from "../Components/Item/item";
const ShopCategory = (props) => {
  // const { allProducts } = useContext(ShopContext);

  return (
    <div>
      <img
        className="shopcategory-banner block my-9 mx-auto md:w-3/4 p-2"
        src={props.banner}
        alt=""
      />{" "}
      <div className="flex my-0 md:mx-40 mx-5 justify-between items-center">
        <p>
          <span className="font-bold">Showing 1-12 </span>
          out of 36 products
        </p>
        <div className=" px-3 py-6 rounded-3xl border border-solid border-gray-700 cursor-pointer">
          Sort by <img className="inline" src={dropdowen_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (item.category == props.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className=" cursor-pointer flex justify-center items-center md:my-40 my-20 mx-auto w-56 h-16 rounded-full font-bold text-2xl text-gray-500 bg-slate-300">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
