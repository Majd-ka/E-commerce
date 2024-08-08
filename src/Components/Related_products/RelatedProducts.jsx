import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/item";
import data_item from "../Assets/data.js";
const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-3 h-full">
      <h1 className="text-3xl font-bold text-gray-900">Related Products</h1>
      <hr className="h-2 w-52 rounded-xl bg-slate-900" />
      <div className="related-product-container flex mt-12 ">
        {data_item.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
