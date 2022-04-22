import React from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylists } from "../../context/playlist-context";
import "./playlist.css";

export const PlayList = () => {
  const {
    playlistState: { playlists },
  } = usePlaylists();

  const navigate = useNavigate();
  return (
    <div className="flex-row center-it gap-btwn playlist-container">
      {playlists.length === 0? (
        <h1>There is no Playlists in Catalogue</h1>
      ) : (
        playlists.map((item) => {
          return (
            <div
              className="flex-col center-it rel-img"
              key={item._id}
              onClick={() => {
                navigate(`/playlist/${item._id}`);
              }}
            >
              <img
                src="./assets/playlist.png"
                alt="thmbnail"
                className="playlist-poster"
              />
              <span className="playlist-title">{item.title}</span>
            </div>
          );
        })
      )}
    </div>
  );
};
