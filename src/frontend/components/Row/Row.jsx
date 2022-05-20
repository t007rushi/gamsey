import React, { useState } from "react";
import { useVideos } from "../../context/videos-context";
import "./row.css";
import {
  MdOutlineArrowForwardIos,
  MdArrowBackIos,
} from "../../constants/react-icons";
import { useNavigate } from "react-router-dom";

export const Row = ({ cat, title }) => {
  const { videos } = useVideos();
  const [val, setVal] = useState(0);
  const Games = videos.filter((vid) => vid.categoryName === cat);
  const ArrowHandler = (dir) => {
    if (dir === "right") {
      setVal((vidWidth) => vidWidth - 20);
    }
    if (dir === "left") {
      setVal((vidWidth) => vidWidth + 20);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <h1 className="row-title">{title}</h1>
      <div className="row-wrapper">
        <MdArrowBackIos
          className="sliderarrow backward-arrow"
          onClick={() => ArrowHandler("left")}
        />
        <div className="row-content">
          {Games.map(({ _id, image }) => {
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
                  onClick={() => {
                    navigate(`/explore/${_id}`);
                  }}
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
