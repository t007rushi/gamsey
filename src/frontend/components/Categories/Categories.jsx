import React from "react";
import { categoryData } from "../../constants/data/categoryViewData";
import "./categories.css";

export const Categories = () => {
  return (
    <div className="category-container">
      {categoryData.map(({ id, image, video }) => {
        return (
          <div key={id} className="category-wrapper">
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
