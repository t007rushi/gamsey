/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from "react";
import { useVideos } from "../../context/videos-context";
import "./row.css";
import {
  MdOutlineArrowForwardIos,
  MdArrowBackIos,
  RiPlayList2Fill,
  AiOutlineLike,
  MdOutlineWatchLater,
  RiHistoryLine,
} from "../../constants/react-icons";

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
                <img src={image} alt="images" className="title_poster" />
                <div className="option-icons">
                  <RiPlayList2Fill />
                  <AiOutlineLike />
                  <MdOutlineWatchLater />
                  <RiHistoryLine />
                </div>
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
