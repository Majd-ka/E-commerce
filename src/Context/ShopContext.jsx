import React, { createContext, useEffect, useState } from "react";
import all_products from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);
const cartNum = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(cartNum());

  // useEffect(() => setAllProducts(all_products), []);
  let addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  let removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };
  const getTotalCart = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
  return (
    <ShopContext.Provider
      value={{
        getTotalCart,
        getTotalAmount,
        allProducts: [...all_products],
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
