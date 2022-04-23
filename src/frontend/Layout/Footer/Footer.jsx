import React from "react";
import { useLocation } from "react-router-dom";
import {
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "../../constants/react-icons";
import "./footer.css";

export const Footer = () => {
  const { pathname } = useLocation();
  const forbiddenPathsForFooter = ["/", "/explore"];
  return (
    <div
      className={
        forbiddenPathsForFooter.includes(pathname)
          ? "flex-row center-it gap-btwn footer-container1"
          : "flex-row center-it gap-btwn footer-container2"
      }
    >
      <BsGithub className="footer-icon" />
      <BsTwitter className="footer-icon" />
      <BsInstagram className="footer-icon" />
      <BsLinkedin className="footer-icon" />
    </div>
  );
};
