import { CREATE_PLAYLIST } from "../constants/playlist-constants";

export const PlaylistReducer = (state, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST: {
      return { ...state, playlists: action.payload };
    }
    default:
      return state;
  }
};
