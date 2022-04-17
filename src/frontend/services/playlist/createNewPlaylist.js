import axios from "axios";

export const createNewPlaylist = async (playlistData, token) => {
  try {
    const {data} = await axios.post(
      "/api/user/playlists",
      { playlist: playlistData },
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
