import React from "react";
import { NavLink } from "react-router-dom";
import { optionsData } from "../../constants/data/optionsData";
import {
  MdOutlineSearch,
  CgProfile,
  IoMdArrowDropdown,
  MdDarkMode,
  MdOutlineLightMode,
} from "../../constants/react-icons";
import { useTheme } from "../../context/theme-context";
import "./header.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex-row header-bar spc-btwn">
      <div className="flex-row header-left-content gap-btwn">
        <img
          className="web-logo-img"
          src="./assets/gamseylogo.jpg"
          alt="logo"
        />
        <h1 className="flex-row web-logo">Gamsey</h1>
        <div className="flex-row gap-btwn header-options">
          {optionsData.map(({ id, Icon, title, link }) => {
            return (
              <NavLink to={link} key={id} className="flex-col center-it">
                {Icon}
                <span>{title}</span>
              </NavLink>
            );
          })}
        </div>
        <div className="dropdown-menu">
          <span>Browse</span>
          <IoMdArrowDropdown className="dropdown-icon" />
        </div>
      </div>

      <div className="flex-row center-it gap-btwn header-right-content">
        <div className="search-wrapper">
          <MdOutlineSearch className="search-icon" />
          <input type="text" placeholder="Search " className="search-bar" />
        </div>
        {theme === "light" ? (
          <MdOutlineLightMode onClick={toggleTheme} />
        ) : (
          <MdDarkMode onClick={toggleTheme} />
        )}
        <CgProfile className="profile-icon" />
      </div>
    </header>
  );
};
