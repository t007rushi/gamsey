import React from "react";
import { useParams } from "react-router-dom";
import { usePlaylists } from "../../context/playlist-context";
import "./playlist-vids.css";
import { MdDeleteOutline } from "../../constants/react-icons";

export const PlaylistVideos = () => {
  const params = useParams();
  const {
    playlistState: { playlists },
  } = usePlaylists();
  const foundPlaylist = playlists.find((item) => item._id === params.playlistID);

  return (
    <div className="playlist-vid-wrapper">
      <img
        src="/assets/playlist.png"
        alt="thmbnail"
        className="playlist-poster"
      />
      <h1>{foundPlaylist.title}</h1>
      <div className="flex-col gap-btwn playlists-videos-container">
        {foundPlaylist.videos.length === 0 ? <h3>This Playlist is empty.Add Videos from Explore</h3> :
        
        foundPlaylist.videos.map(({ _id, title, creator }) => {
          return (
            <div className="flex-row playlist-vid" key={_id}>
              <img
                src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
                alt="img"
                width="100%"
                height="100%"
              />
              <div className="flex-col vid-details">
                <div className="flex-row spc-btwn title-optionicon-wrap">
                  <h3>{title} </h3>
                </div>
                <span>⚫ {creator} ✔ </span>
                <MdDeleteOutline />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
