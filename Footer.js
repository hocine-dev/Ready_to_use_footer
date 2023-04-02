import React from "react";
import red_heart from "./red-heart-icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="f-spacing copy">
        © {new Date().getFullYear()} Made With <img src={red_heart} alt="red heart" className="svg" />
        By Hocine Dev
      </div>
    </>
  );
};

export default Footer;
