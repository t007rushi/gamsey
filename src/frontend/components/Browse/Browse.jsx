import React from "react";
import { NavLink } from "react-router-dom";
import { optionsData } from "../../constants/data/optionsData";
import "./browse.css";

export const Browse = () => {
  return (
    <div className="flex-col option-modal">
      {optionsData.map(({ id, link, Icon, title }) => {
        return (
          <NavLink
            to={link}
            key={id}
            className="flex-row center-it gap-btwn nav-elements options-mob-view" 
          >
            {Icon}
            <span>{title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
