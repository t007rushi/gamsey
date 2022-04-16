import React, { useState,useRef } from "react";
import "./options-field.css";
import {
  MdPlaylistAdd,
  RiPlayList2Fill,
  AiOutlineLike,
  BsThreeDotsVertical,
} from "../../constants/react-icons";
import { useOnClickOutside } from "../../hooks/onClickOutside";

export const OptionsField = () => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef();
  useOnClickOutside(optionsRef,() => setShowOptions(false))
  return (
    <>
      <div className="video-options-container">
        <BsThreeDotsVertical onClick={() => setShowOptions((curr) => !curr)} />
        {showOptions && (
          <div className="flex-col video-options-field" ref={optionsRef}>
            <span className="flex-row gap-btwn video-option">
              <MdPlaylistAdd/>
              WatchLater
            </span>
            <span className="flex-row gap-btwn video-option">
              <RiPlayList2Fill />
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
