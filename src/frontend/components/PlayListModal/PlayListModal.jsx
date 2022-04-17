import React from "react";
import "./playlistmodal.css";
import { GrClose } from "../../constants/react-icons";
import { CreatePlaylits } from "../CreatePlaylist/CreatePlaylits";
import { usePlaylists } from "../../context/playlist-context";

export const PlayListModal = ({ closeFun }) => {
  const {
    playlistState:{playlists},
  } = usePlaylists();
  return (
    <div className="modal-container">
      <div className=" flex-col modal">
        <div className="flex-row spc-btwn modal-content">
          {" "}
          SAVE TO...{" "}
          <span onClick={closeFun}>
            <GrClose />
          </span>
        </div>
        <div className="flex-col gap-btwn playlist-collection-container">
          {playlists.map(play =>{
            return(
              <label className="flex-row gap-btwn center-it" key={play._id}>
              <input type="checkbox" name="" id=""/> {play.title}
            </label>
            )
          })}
        </div>
        <CreatePlaylits />
      </div>
    </div>
  );
};
