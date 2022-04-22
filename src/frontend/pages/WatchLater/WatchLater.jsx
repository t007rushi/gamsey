import React from "react";
import { useWatchlater } from "../../context/watchlater-context";
import "./watchlater.css";
import { OptionsField } from "../../components/index";

export const WatchLater = () => {
  const {
    watchlaterState: { watchlater },
  } = useWatchlater();
  return (
    <div className="flex-row display-details-container">
      {watchlater.length === 0 ? (
        <h1>Watchlater IS Empty</h1>
      ) : (
        <>
          <div className="display-details">
            <img
              src={`https://img.youtube.com/vi/${
                watchlater[watchlater.length - 1]?._id
              }/maxresdefault.jpg`}
              alt=""
            />
            <div className="display-title">WATCHLATER</div>
            <div className="description"></div>
          </div>
          <div className="flex-col gap-btwn listing-wrap">
            {watchlater.map((video) => {
              return (
                <div className="flex-row playlist-vid" key={video._id}>
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
