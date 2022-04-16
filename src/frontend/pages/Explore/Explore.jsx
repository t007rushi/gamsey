import React from "react";
import { useVideos } from "../../context/videos-context";
import { BsDot, BsThreeDotsVertical } from "../../constants/react-icons";
import "./explore.css";

export const Explore = () => {
  const { videos } = useVideos();
  const pcgames = videos.filter(
    (item) => item.categoryName === "pc" || item.categoryName === "ps4"
  );
  return (
    <div className="vid-listing-container">
      {pcgames.map((item) => {
        return (
          <div className="vid-wrapper">
            <img
              src={`https://img.youtube.com/vi/${item._id}/maxresdefault.jpg`}
              alt="img"
              width="100%"
              height="100%"
            />
            <div className="flex-col vid-details">
              <div className="flex-row spc-btwn title-optionicon-wrap">
                {" "}
                <h3>{item.title} </h3> <BsThreeDotsVertical />
              </div>
              <span>⚫ {item.creator} ✔ </span>
              <div className="flex-row center-it views-time-wrap">
                <span>{`${item.views}k views`}</span> <BsDot />
                <span>{`${item.createdAt} ago`}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
