/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useVideos } from "../../context/videos-context";
import "./row.css";
import {
  MdOutlineArrowForwardIos,
  MdArrowBackIos,
} from "../../constants/react-icons";

export const Row = ({ cat, title }) => {
  const { videos, fetchVideos } = useVideos();
  const [val, setVal] = useState(0);
  useEffect(() => {
    fetchVideos();
  }, []);
  const Games = videos.filter((vid) => vid.categoryName === cat);
  const ArrowHandler = (dir) => {
    if (dir === "right") {
      setVal(v => v - 20);
    }
    if (dir === "left") {
      setVal(v => v + 20);
    }
  };

  return (
    <>
      <h1 className="row-title">{title}</h1>
      <div className="row-wrapper">
        <MdArrowBackIos
          className="sliderarrow backward-arrow"
          onClick={() => ArrowHandler("left")}
        />
        <div className="row-content">
          {Games.map(({_id,image}) => {
            return (
              <div
                key={_id}
                className="title_wrap"
                style={{ transform: `translateX(${val}rem)` }}
              >
                <img
                  src={image}
                  alt="images"
                  className="title_poster"
                />
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
