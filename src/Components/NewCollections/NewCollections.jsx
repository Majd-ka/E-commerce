import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/item.jsx";
const NewCollections = () => {
  return (
    <div className="NewCollections flex flex-col items-center gap-5">
      <h1>New Collections</h1>
      <hr className="h-10" />
      <div className="collections">
        {new_collection.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollections;
