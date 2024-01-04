import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container bg-black w-screen relative">
      <CiLinkedin className="w-10 h-10 m-4 " />
      <CiMail className="w-10 h-10 m-4 " />
      <CiInstagram className="w-10 h-10 m-4 " />
    </div>
  );
};

export default Footer;
