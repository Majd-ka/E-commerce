import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
const CartItem = () => {
  const { allProducts, cartItems, addToCart, removeFromCart, getTotalAmount } =
    useContext(ShopContext);

  return (
    <div className=" md:my-24 md:mx-44">
      <div className="coco">
        <div className="cartitems-format-main ">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className=" h-1 border-0 bg-gray-300" />
        {allProducts.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div className="cartitems-format font-medium text-lg">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="man-img min-h-16 min-w-16"
                    alt=""
                  />
                </Link>
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="bg-white w-16 h-12 border border-solid border-x-sky-100">
                  {cartItems[product.id]}
                </button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  className="remove-icon w-4 my-0 mx-10 cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
      <div className="flex md:my-24 mx-0 flex-col md:flex-row">
        <div className="flex flex-1 flex-col gap-10 md:mr-52 m-10">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4 px-0">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-4 px-0 font-extrabold">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button className="w-64 h-14 border-none outline-none text-white bg-red-600 font-semibold text-base cursor-pointer  ">
            Proceed to Checkout
          </button>
        </div>
        <div className="flex-1 font-medium text-base">
          <p className="text-gray-500 text-center">
            If You Have A Coupon , Enter It Here
          </p>
          <div className=" md:w-96 mt-4 pl-5 h-14 bg-gray-300 flex m-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className="boreder-none outline-none bg-transparent text-base md:w-96 h-12 w-56"
            />
            <button className="md:w-44 h-14 text-base bg-black text-white cursor-pointer px-10">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
