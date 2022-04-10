import React from "react";
import {
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "../../constants/react-icons";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="flex-row center-it gap-btwn footer-container">
      <BsGithub className="footer-icon" />
      <BsTwitter className="footer-icon" />
      <BsInstagram className="footer-icon" />
      <BsLinkedin className="footer-icon" />
    </div>
  );
};
