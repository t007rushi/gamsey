import {
  ADD_TO_PLAYLIST,
  CREATE_PLAYLIST,
  REMOVE_FROM_PLAYLIST,
  REMOVE_PLAYLIST,
} from "../constants/playlist-constants";

export const PlaylistReducer = (state, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST: {
      return { ...state, playlists: action.payload };
    }
    case REMOVE_PLAYLIST:
      return { ...state, playlists: action.payload };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlistVid) =>
          playlistVid._id === action.payload._id
            ? {
                ...playlistVid,
                
                videos: action.payload.videos,
              }
            : playlistVid
        ),
      };
      case REMOVE_FROM_PLAYLIST:
     return   {
          ...state,
          playlists: state.playlists.map((playlistVid) =>
            playlistVid._id === action.payload._id
              ? {
                  ...playlistVid,
                  videos: action.payload.videos,
                }
              : playlistVid
          ),
        };
    default:
      return state;
  }
};
