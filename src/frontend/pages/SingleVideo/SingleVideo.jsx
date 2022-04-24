import React from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useVideos } from "../../context/videos-context";
import "./single-vid.css";
import {
  BsDot,
  MdOutlineWatchLater,
  AiOutlineLike,
  MdPlaylistAdd,
} from "../../constants/react-icons";
import { OptionsField } from "../../components";
import { getService } from "../../services/combinedService";
import { useAuth } from "../../context/auth-context";
import { useHistory } from "../../context/history-context";
import {
  ADD_TO_HISTORY,
  RMV_FROM_HISTORY,
} from "../../constants/history-constants";

export const SingleVideo = () => {
  const params = useParams();
  const {
    user: { tokenVal },
  } = useAuth();
  const { videos } = useVideos();

  const {
    historyState: { history },
    historyDipatcher,
  } = useHistory();

  const currentVideo = videos.find((vid) => vid?._id === params.singleVid);
  const recommendVideos = videos.filter(
    (vid) => vid.categoryName === currentVideo?.categoryName && vid?._id !== currentVideo._id
  );

  const addToHistoryHandler = async () => {
    if (history.find((vid) => vid?._id === currentVideo?._id)) {
      const data = await getService(
        "history",
        "delete",
        tokenVal,
        currentVideo
      );
      historyDipatcher({ type: RMV_FROM_HISTORY, payload: data.history });
    }
    const data = await getService("history", "post", tokenVal, currentVideo);
    historyDipatcher({ type: ADD_TO_HISTORY, payload: data.history });
  };
  const navigate = useNavigate();
  return (
    <div className="flex-row video-page">
      <div className="flex-col vid-page-container">
        <div className="video-player">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${currentVideo?._id}`}
            controls
            playing
            onStart={() => addToHistoryHandler()}
          />
        </div>
        <div className="video-details-section">
          <div className="video-title">{currentVideo?.title}</div>
          <div className="flex-row video-details">
            <div className="video-views-upload-info">
              <span>{`${currentVideo?.views}k views`}</span>
              <BsDot />
              <span>{`${currentVideo?.createdAt} ago`}</span>
            </div>
            <div className="video-options">
              <AiOutlineLike />
              <MdOutlineWatchLater />
              <MdPlaylistAdd />
            </div>
          </div>
          <div className="video-description">{currentVideo?.description}</div>
        </div>
      </div>
      <div className="flex-col gap-btwn listing-wrap">
        {recommendVideos.map((video) => {
          return (
            <div
              className="flex-row playlist-vid"
              key={video?._id}
              onClick={() => {
                navigate(`/explore/${video?._id}`);
              }}
            >
              <>
                <img
                  src={`https://img.youtube.com/vi/${video?._id}/maxresdefault.jpg`}
                  alt=""
                />
                <div className="flex-col vid-details">
                  <div className="flex-row spc-btwn title-optionicon-wrap">
                    <h3>{video?.title} </h3>
                  </div>
                  <span>⚫ {video?.creator} ✔ </span>
                </div>
              </>
              <OptionsField vid={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
