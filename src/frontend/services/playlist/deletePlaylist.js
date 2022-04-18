
import axios from "axios";

export const createNewPlaylist = async (playlistId, token) => {
  try {
    const {data} = await axios.delete(
      `/api/user/playlists/:${playlistId}`,
      {
        headers: {
          authorization: token,
        },
      } 
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};