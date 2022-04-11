import React from "react";
import { categoryData } from "../../constants/data/categoryViewData";
import "./categories.css";

export const Categories = () => {
  
  return (
    <div className="category-container">
      {categoryData.map((item) => {
        return (
          <div key={item.categoryName} className="category-wrapper">
            <img src={item.image} alt="items" className="category" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src={item.video} type="video/mp4"/>
            </video>
          </div>
        );
      })}
    </div>
  );
};
