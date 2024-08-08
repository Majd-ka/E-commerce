import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCart } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar flex justify-around p-4 shadow-lg">
      <Link to="/">
        <div
          onClick={() => setMenu("shop")}
          className="nav-logo flex items-center gap-3"
        >
          <img src={logo} />{" "}
          <p className="logo-text text-gray-900 text-3xl font-extrabold">
            E-Commerce
          </p>
        </div>
      </Link>
      <ul
        className={`flex items-center gap-14 text-gray-500 font-bold text-lg ${
          isOpen ? "hidden" : "hidden"
        } md:flex`}
      >
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link to="/men">Men</Link>
          {menu === "Men" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "Kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart flex gap-10 items-center">
        <Link to="/login">
          <button className=" w-36 h-10 bg-white text-gray-500 border-gray-600 border rounded-2xl active:bg-gray-300">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} />
        </Link>
        <div className="cart-count flex justify-center items-center w-6 h-6 -ml-12 -mt-10 rounded-xl bg-red-800 text-white">
          {getTotalCart()}
        </div>
      </div>
      <div className="md:hidden my-auto">
        <button onClick={toggleMenu} className=" text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col mt-8 items-center bg-white w-full absolute top-16 left-0 text-gray-500 font-bold text-lg gap-4 md:hidden">
          <li
            onClick={() => {
              setMenu("shop");
              setIsOpen(false);
            }}
          >
            <Link to="/">Shop</Link>
            {menu === "shop" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
              setIsOpen(false);
            }}
          >
            <Link to="/men">Men</Link>
            {menu === "Men" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("women");
              setIsOpen(false);
            }}
          >
            <Link to="/women">Women</Link>
            {menu === "women" ? <hr /> : ""}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
              setIsOpen(false);
            }}
          >
            <Link to="/kids">Kids</Link>
            {menu === "Kids" ? <hr /> : ""}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
