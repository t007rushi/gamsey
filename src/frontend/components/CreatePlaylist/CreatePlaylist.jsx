import React, { useState } from "react";
import { CREATE_PLAYLIST } from "../../constants/playlist-constants";
import { GrAdd } from "../../constants/react-icons";
import { useAuth } from "../../context/auth-context";
import { usePlaylists } from "../../context/playlist-context";
import { createNewPlaylist } from "../../services";
import "./create-playlist.css"

export const CreatePlaylist = () => {
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const handleOpenChange = () => setShowCreatePlaylist(true);
  const handleCloseChange = () => setShowCreatePlaylist(false);
  const { playlistDipatcher } = usePlaylists();
  const {
    user: { tokenVal },
  } = useAuth();
  const [playlistData, setPlaylistData] = useState({
    title: "",
    description: "",
  });

  const handleCreatePlaylist = async () => {
    try {
      const data  = await createNewPlaylist(playlistData, tokenVal);
      playlistDipatcher({type:CREATE_PLAYLIST,payload:data.playlists})
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!showCreatePlaylist && (
        <div
          className="flex-row gap-btwn center-it modal-content"
          onClick={handleOpenChange}
        >
          <GrAdd />
          <span>Create new Playlist</span>
        </div>
      )}
      {showCreatePlaylist && (
        <div className="flex-col CreatePlaylist">
          <label htmlFor="title" className="create-input">
          <span> Title</span> 
            <input
              type="text"
              placeholder="Title for playlist"
              onChange={(e) =>
                setPlaylistData({ ...playlistData, title: e.target.value })
              }
            />
          </label>
          <label htmlFor="description" className="create-input">
          <span>   Description</span> 
            <input
              type="text"
              placeholder="description for playlist"
              onChange={(e) =>
                setPlaylistData({
                  ...playlistData,
                  description: e.target.value,
                })
              }
            />
          </label>
          <button className="create-btn"
            onClick={() => {
              handleCreatePlaylist();
              handleCloseChange();
            }}
          >
            CREATE
          </button>
        </div>
      )}
    </div>
  );
};
