import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { optionsData } from "../../constants/data/optionsData";
import {
  MdOutlineSearch,
  CgProfile,
  IoMdArrowDropdown,
  MdDarkMode,
  MdOutlineLightMode,
} from "../../constants/react-icons";
import { useAuth } from "../../context/auth-context";
import { useTheme } from "../../context/theme-context";
import "./header.css";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    user: { isUserLoggedIn },
    signOutHandler,
  } = useAuth();
  const [profileop, showProfileop] = useState(false);

  // const

  return (
    <header className="flex-row header-bar spc-btwn">
      <div className="flex-row header-left-content gap-btwn">
        <NavLink to="/" className="flex-row web-logo">
          Gamsey
        </NavLink>
        <div className="flex-row gap-btwn header-options">
          {optionsData.map(({ id, Icon, title, link }) => {
            return (
              <NavLink
                to={link}
                key={id}
                className="flex-col center-it nav-elements"
              >
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
        {!isUserLoggedIn ? (
          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>
        ) : (
          <div
            className="profile-container"
            onMouseEnter={() => showProfileop(true)}
            onMouseLeave={() => showProfileop(false)}
          >
            <CgProfile className="profile-icon" />
            {profileop && (
              <div className="flex-col spac-btwn center-it profile-options">
                <span>Account</span>
                <span onClick={signOutHandler}>Log Out</span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
