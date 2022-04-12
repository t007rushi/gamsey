/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useVideos } from "../../context/videos-context";
import "./row.css";
import {
  MdOutlineArrowForwardIos,
  MdArrowBackIos,
} from "../../constants/react-icons";

export const Row = ({cat,title}) => {
  const { videos, fetchVideos } = useVideos();
  useEffect(() => {
    fetchVideos();
  }, []);
  const pcGames = videos.filter((vid) => vid.categoryName === cat);

  const listRef = useRef();
  const ArrowHandler = (dir) => {
    if (dir === "right") {
      listRef.current.style.transform = `translateX(100px)`;
    }
    if (dir === "left") {
        listRef.current.style.transform = `translateX(-100px)`;
      }
  };

  return (
      <>
      
    <h1 className="row-title">{title}</h1>
    <div className="row-wrapper" >
      <MdArrowBackIos
        className="sliderarrow backward-arrow"
        onClick={() => ArrowHandler("left")}
      />
      <div className="row-content" ref={listRef}>
        {pcGames.map((item) => {
          return (
            <div key={item._id} className="title_wrap" >
              <img key={item._id} src={item.image} alt="images" className="title_poster" />
            </div>
          );
        })}
      </div>
      <MdOutlineArrowForwardIos
        className="sliderarrow forward-arrow"
        onClick={() => ArrowHandler("right")}
      />
    </div>
    </>
  );
};
