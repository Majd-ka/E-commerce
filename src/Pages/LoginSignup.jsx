import React from "react";
import "./css/Login.css";
const LoginSignUp = () => {
  return (
    <div className="Login w-full">
      <div className="Login-container ">
        <h1 className=" font-extrabold text-3xl">SignUp</h1>
        <div className="Login-input">
          <input type="text" placeholder="Your Name" name="" id="" />
          <input type="Email" placeholder="Email Adress  " name="" id="" />
          <input type="Password" placeholder="Password  " name="" id="" />
        </div>
        <button>Continue</button>
        <p className="Login-Login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="Login-checkbox">
          <label htmlFor="check">
            <input type="checkbox" name="" id="check" />
            <p className=" cursor-pointer inline ml-2">
              By continuing, I agree to the Terms of Service and Privacy Policy
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
