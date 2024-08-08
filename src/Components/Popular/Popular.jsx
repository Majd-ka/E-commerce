import React from "react";
import "./popular.css";
import data_item from "../Assets/data.js";
import Item from "../Item/item";
const Popular = () => {
  return (
    <div className="popular flex flex-col items-center gap-5 justify-center">
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item flex flex-wrap m-12 gap-6">
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

export default Popular;
