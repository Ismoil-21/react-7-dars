import logo from "../assets/logo.png";
import "./header.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headers">
          <img width={100} src={logo} alt="" />
          <div className="links">
            <a className="link" href="">Home</a>
            <a className="link" href="">Careers</a>
            <a className="link" href="">Blog</a>
            <a className="link" href="">About Us</a>
            <button className="btn">Login</button>
            <button className="bttn">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
