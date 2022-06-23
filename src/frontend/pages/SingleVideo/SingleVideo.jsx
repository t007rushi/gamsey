import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useVideos } from "../../context/videos-context";
import "./single-vid.css";
import {
  BsDot,
  MdOutlineWatchLater,
  AiOutlineLike,
  MdPlaylistAdd,
  AiFillLike,
  FaBan,
} from "../../constants/react-icons";
import { OptionsField, PlayListModal } from "../../components";
import { getService } from "../../services/combinedService";
import { useAuth } from "../../context/auth-context";
import { useHistory } from "../../context/history-context";
import {
  ADD_TO_HISTORY,
  RMV_FROM_HISTORY,
} from "../../constants/history-constants";
import { useLike } from "../../context/like-context";
import { useWatchlater } from "../../context/watchlater-context";
import { ADD_TO_LIKE, RMV_FROM_LIKE } from "../../constants/like-constants";
import {
  ADD_TO_WATCHLATER,
  RMV_FROM_WATCHLATER,
} from "../../constants/watchlater-constants";
import { toast } from "react-toastify";

export const SingleVideo = () => {
  const params = useParams();
  const {
    user: { tokenVal, isUserLoggedIn },
  } = useAuth();
  const { videos } = useVideos();

  const {
    historyState: { history },
    historyDipatcher,
  } = useHistory();

  const { likeState, likeDipatcher } = useLike();
  const { watchlaterState, watchlaterDipatcher } = useWatchlater();
  const currentVideo = videos.find((vid) => vid?._id === params.singleVid);
  const recommendVideos = videos.filter(
    (vid) =>
      vid.categoryName === currentVideo?.categoryName &&
      vid?._id !== currentVideo._id
  );

  const AddToLike = async () => {
    const data = await getService("likes", "post", tokenVal, currentVideo);
    likeDipatcher({ type: ADD_TO_LIKE, payload: data.likes });
  };
  const rmvFromLike = async () => {
    const data = await getService("likes", "delete", tokenVal, currentVideo);
    likeDipatcher({ type: RMV_FROM_LIKE, payload: data.likes });
  };

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

  const AddToWatchlater = async () => {
    const data = await getService("watchlater", "post", tokenVal, currentVideo);
    watchlaterDipatcher({ type: ADD_TO_WATCHLATER, payload: data.watchlater });
  };
  const rmvFromLWatchlater = async () => {
    const data = await getService(
      "watchlater",
      "delete",
      tokenVal,
      currentVideo
    );
    watchlaterDipatcher({
      type: RMV_FROM_WATCHLATER,
      payload: data.watchlater,
    });
  };

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

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
            onStart={addToHistoryHandler}
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
              {!likeState.likes.some(
                (item) => item._id === currentVideo._id
              ) ? (
                <AiOutlineLike
                  onClick={() => {
                    if (isUserLoggedIn) {
                      AddToLike();
                    } else {
                      toast.warning("Login to continue");
                      navigate("/login");
                    }
                  }}
                />
              ) : (
                <AiFillLike onClick={rmvFromLike} />
              )}
              {!watchlaterState.watchlater.some(
                (item) => item._id === currentVideo._id
              ) ? (
                <MdOutlineWatchLater
                  onClick={() => {
                    if (isUserLoggedIn) {
                      AddToWatchlater();
                    } else {
                      toast.warning("Login to continue");
                      navigate("/login");
                    }
                  }}
                />
              ) : (
                <FaBan onClick={rmvFromLWatchlater} />
              )}
              <MdPlaylistAdd
                onClick={() => {
                  if (isUserLoggedIn) {
                    openModal();
                  } else {
                    toast.warning("Login to continue");
                    navigate("/login");
                  }
                }}
              />
            </div>
          </div>
          <div className="video-description">{currentVideo?.description}</div>
        </div>
      </div>
      <div className="flex-col gap-btwn listing-wrap">
        {recommendVideos.map((video) => {
          return (
            <div className="flex-row playlist-vid" key={video?._id}>
              <>
                <img
                  src={`https://img.youtube.com/vi/${video?._id}/maxresdefault.jpg`}
                  alt="recommented-vids"
                  onClick={() => {
                    navigate(`/explore/${video?._id}`);
                  }}
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
      {showModal && <PlayListModal closeFun={closeModal} vid={currentVideo} />}
    </div>
  );
};
