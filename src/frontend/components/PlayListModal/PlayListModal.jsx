import React from "react";
import "./playlistmodal.css";
import { GrClose, MdDeleteOutline } from "../../constants/react-icons";
import { CreatePlaylist } from "../CreatePlaylist/CreatePlaylist";
import { usePlaylists } from "../../context/playlist-context";
import {
  ADD_TO_PLAYLIST,
  REMOVE_FROM_PLAYLIST,
  REMOVE_PLAYLIST,
} from "../../constants/playlist-constants";
import { useAuth } from "../../context/auth-context";
import { deletePlaylist,removeVideoFromPlaylist,addVideoToPlaylist } from "../../services";

export const PlayListModal = ({ closeFun, vid }) => {
  const { playlistDipatcher } = usePlaylists();
  const {
    user: { tokenVal },
  } = useAuth();
  const handleDeletePlaylist = async (id) => {
    try {
      const data = await deletePlaylist(id, tokenVal);
      playlistDipatcher({ type: REMOVE_PLAYLIST, payload: data.playlists });
    } catch (err) {
      console.log(err);
    }
  };
  const {
    playlistState: { playlists },
  } = usePlaylists();

  const addVideoToPlaylistFun = async (id, vid) => {
    try {
      const data = await addVideoToPlaylist(id, vid, tokenVal);
      playlistDipatcher({ type: ADD_TO_PLAYLIST, payload: data.playlist });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteVideoFromPlaylist = async (id, vid_id) => {
    try {
      const data = await removeVideoFromPlaylist(id, vid_id, tokenVal);
      playlistDipatcher({ type: REMOVE_FROM_PLAYLIST, payload: data.playlist });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal-container">
      <div className=" flex-col modal">
        <div className="flex-row spc-btwn modal-content">
          SAVE TO...
          <span onClick={closeFun}>
            <GrClose />
          </span>
        </div>
        <div className="flex-col gap-btwn playlist-collection-container">
          {playlists.map((play) => {
            return (
              <div className="flex-row spc-btwn playlist-item" key={play._id}>
                <label className="flex-row gap-btwn center-it">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={play.videos.some((video) => {
                      return video._id === vid._id;
                    })}
                    onChange={(e) => {
                      if (e.target.checked) {
                        addVideoToPlaylistFun(play._id, vid);
                      } else {
                        deleteVideoFromPlaylist(play._id, vid._id);
                      }
                    }}
                  />{" "}
                  {play.title}
                </label>
                <MdDeleteOutline
                  onClick={() => handleDeletePlaylist(play._id)}
                />
              </div>
            );
          })}
        </div>
        <CreatePlaylist />
      </div>
    </div>
  );
};
