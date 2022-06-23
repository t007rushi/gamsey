import React from "react";
import { categoryData } from "../../constants/data/categoryViewData";
import "./categories.css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

export const Categories = () => {
  const navigate = useNavigate();
  const { dispatcherforfilter } = useFilter();
  return (
    <div className="category-container">
      {categoryData.map(({ id, image, video, title }) => {
        return (
          <div
            key={id}
            className="category-wrapper"
            onClick={() => {
              navigate("/explore");
              dispatcherforfilter({ type: "FILTERBY", payload: title });
            }}
          >
            <img src={image} alt="items" className="category" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
};
