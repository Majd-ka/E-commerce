import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import paintrest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="the-footer flex flex-col justify-center gap-12 items-center">
      <div className="footer-logo flex items-center gap-5">
        <img src={footer_logo} alt="" />
        <p className=" font-bold text-5xl text-gray-700">Shopper</p>
      </div>
      <ul className="md:flex md:list-none hidden gap-12 text-gray-900 text-xl">
        <li>Company</li>
        <li>Products</li>
        <li>offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icons flex gap-5">
        <div className="footer-container cursor-pointer">
          <img src={insta} alt="" />
        </div>
        <div className="footer-container cursor-pointer">
          <img src={paintrest} alt="" />
        </div>
        <div className="footer-container cursor-pointer">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copy flex flex-col items-center gap-8 w-full mb-8 text-black text-2xl ">
        <hr className=" w-1/2 border-none rounded-xl h-1 bg-slate-600" />
        <p>© 2024 Shopper. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
