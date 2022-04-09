import React from "react";
import {
  RiPlayList2Fill,
  AiOutlineLike,
  MdOutlineWatchLater,
  RiHistoryLine,
  MdOutlineSearch,
  CgProfile,
  IoMdArrowDropdown 
} from "../../constants/react-icons";
import "./header.css";

export const Header = () => {
  return (
    <header className="flex-row header-bar spc-btwn">
      <div className="flex-row header-left-content gap-btwn">
        <img className="web-logo-img" src="./assets/gamseylogo.jpg" alt="logo" />
        <h1 className="flex-row web-logo">Gamsey</h1>
        <div className="flex-row gap-btwn header-options">
          <div className="flex-col center-it">
            <RiPlayList2Fill />
            <span>Playlist</span>
          </div>
          <div className="flex-col center-it">
            <AiOutlineLike />
            <span>Liked</span>
          </div>
          <div className="flex-col center-it">
            <MdOutlineWatchLater />
            <span>WatchLater</span>
          </div>
          <div className="flex-col center-it">
            <RiHistoryLine />
            <span>History </span>
          </div>
        </div>
        <div className="dropdown-menu">
        <span>Browse</span>
        <IoMdArrowDropdown  className="dropdown-icon"/>
        </div>
      </div>

      <div className="flex-row center-it gap-btwn header-right-content">
        <div className="search-wrapper">
          <MdOutlineSearch className="search-icon" />
          <input type="text" placeholder="Search " className="search-bar" />
        </div>
        <CgProfile className="profile-icon" />
      </div>
    </header>
  );
};
