import { useState, createContext, useContext,useReducer } from "react";
import { PlaylistReducer } from "../reducer/playlist-reducer";
import { getPlaylist } from "../services";
import { useAuth } from "./auth-context";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [Playlists, setPlaylists] = useState([]);
  const {
    user: { tokenVal },
  } = useAuth();

  const initialState = {
    playlists: []
  };
  

  const [playlistState,playlistDipatcher] = useReducer(PlaylistReducer,initialState)

  //Get Playlists
  const fetchPlaylists = async () => {
    try {
      const { data } = await getPlaylist(tokenVal);
      setPlaylists(data.playlists);
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <PlaylistContext.Provider value={{ Playlists, fetchPlaylists,playlistState,playlistDipatcher }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylists = () => {
  const data = useContext(PlaylistContext);
  if (data !== undefined) {
    return data;
  }
};

export { usePlaylists, PlaylistProvider };
