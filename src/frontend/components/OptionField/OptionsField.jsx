import React, { useState, useRef } from "react";
import "./options-field.css";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  AiOutlineLike,
  BsThreeDotsVertical,
} from "../../constants/react-icons";
import { useOnClickOutside } from "../../hooks/onClickOutside";

export const OptionsField = ({openModal}) => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef();
  useOnClickOutside(optionsRef, () => setShowOptions(false));
  return (
    <>
      <div className="video-options-container">
        <BsThreeDotsVertical onClick={() => setShowOptions((curr) => !curr)} />
        {showOptions && (
          <div className="flex-col video-options-field" ref={optionsRef}>
            <span className="flex-row gap-btwn video-option">
              <MdOutlineWatchLater />
              WatchLater
            </span>
            <span className="flex-row gap-btwn video-option" onClick={openModal}>
              <MdPlaylistAdd />
              SAVE
            </span>
            <span className="flex-row gap-btwn video-option">
              <AiOutlineLike />
              Like
            </span>
          </div>
        )}
      </div>
    </>
  );
};
