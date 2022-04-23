import React from "react";
import { useLike } from "../../context/like-context";
import "./likes.css";
import { OptionsField } from "../../components/index";

export const Liked = () => {
  const {
    likeState: { likes },
  } = useLike();

  return (
    <div className="flex-row display-details-container">
      {likes.length === 0 ? (
        <h1>likes IS Empty</h1>
      ) : (
        <>
          <div className="display-details">
            <img
              src={`https://img.youtube.com/vi/${
                likes[likes.length - 1]?._id
              }/maxresdefault.jpg`}
              alt=""
            />
            <div className="display-title">LIKED VIDEOS</div>
            <div className="description"></div>
          </div>
          <div className="flex-col gap-btwn listing-wrap">
            {likes.map((video) => {
              return (
                <div className="flex-row playlist-vid" key={video._id}>
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
                      alt=""
                    />
                    <div className="flex-col vid-details">
                      <div className="flex-row spc-btwn title-optionicon-wrap">
                        <h3>{video.title} </h3>
                      </div>
                      <span>⚫ {video.creator} ✔ </span>
                    </div>
                  </>
                  <OptionsField vid={video} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
