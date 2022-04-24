import React, { useState, useRef } from "react";
import "./options-field.css";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  AiOutlineLike,
  BsThreeDotsVertical,
  AiOutlineDislike,
} from "../../constants/react-icons";
import { useOnClickOutside } from "../../hooks/onClickOutside";
import { PlayListModal } from "../PlayListModal/PlayListModal";
import { getService } from "../../services/combinedService";
import { useAuth } from "../../context/auth-context";
import { useWatchlater } from "../../context/watchlater-context";
import { useLike } from "../../context/like-context";
import { ADD_TO_LIKE, RMV_FROM_LIKE } from "../../constants/like-constants";
import {
  ADD_TO_WATCHLATER,
  RMV_FROM_WATCHLATER,
} from "../../constants/watchlater-constants";

export const OptionsField = ({ vid }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const optionsRef = useRef();
  useOnClickOutside(optionsRef, () => setShowOptions(false));

  const { watchlaterState, watchlaterDipatcher } = useWatchlater();
  const { likeState, likeDipatcher } = useLike();

  const {
    user: { tokenVal },
  } = useAuth();
  const AddToLike = async () => {
    const data = await getService("likes", "post", tokenVal, vid);
    likeDipatcher({ type: ADD_TO_LIKE, payload: data.likes });
    setShowOptions(false);
  };
  const rmvFromLike = async () => {
    const data = await getService("likes", "delete", tokenVal, vid);
    likeDipatcher({ type: RMV_FROM_LIKE, payload: data.likes });
    setShowOptions(false);
  };
  const AddToWatchlater = async () => {
    const data = await getService("watchlater", "post", tokenVal, vid);
    watchlaterDipatcher({ type: ADD_TO_WATCHLATER, payload: data.watchlater });
    setShowOptions(false);
  };
  const rmvFromLWatchlater = async () => {
    const data = await getService("watchlater", "delete", tokenVal, vid);
    watchlaterDipatcher({
      type: RMV_FROM_WATCHLATER,
      payload: data.watchlater,
    });
    setShowOptions(false);
  };

  return (
    <>
      <div className="video-options-container">
        <BsThreeDotsVertical onClick={() => setShowOptions((curr) => !curr)} />
        {showOptions && (
          <div className="flex-col video-options-field" ref={optionsRef}>
            {!watchlaterState.watchlater.some(
              (item) => item._id === vid._id
            ) ? (
              <span
                className="flex-row gap-btwn video-option"
                onClick={AddToWatchlater}
              >
                <MdOutlineWatchLater />
                WatchLater
              </span>
            ) : (
              <span
                className="flex-row gap-btwn video-option"
                onClick={rmvFromLWatchlater}
              >
                <MdOutlineWatchLater />
                Remove
              </span>
            )}
            <span
              className="flex-row gap-btwn video-option"
              onClick={openModal}
            >
              <MdPlaylistAdd />
              SAVE
            </span>
            {!likeState.likes.some((item) => item._id === vid._id) ? (
              <span
                className="flex-row gap-btwn video-option"
                onClick={AddToLike}
              >
                <AiOutlineLike />
                Like
              </span>
            ) : (
              <span
                className="flex-row gap-btwn video-option"
                onClick={rmvFromLike}
              >
                <AiOutlineDislike />
                Dislike
              </span>
            )}
          </div>
        )}
      </div>
      {showModal && <PlayListModal closeFun={closeModal} vid={vid} />}
    </>
  );
};
