import React, { useState } from "react";
import { CREATE_PLAYLIST } from "../../constants/playlist-constants";
import { GrAdd } from "../../constants/react-icons";
import { useAuth } from "../../context/auth-context";
import { usePlaylists } from "../../context/playlist-context";
import { createNewPlaylist } from "../../services/playlist/createNewPlaylist";

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
      console.log(data)
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
        <div>
          <label htmlFor="title">
            Title
            <input
              type="text"
              onChange={(e) =>
                setPlaylistData({ ...playlistData, title: e.target.value })
              }
            />
          </label>
          <label htmlFor="description">
            description
            <input
              type="text"
              onChange={(e) =>
                setPlaylistData({
                  ...playlistData,
                  description: e.target.value,
                })
              }
            />
          </label>
          <button
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
