import axios from "axios";

export const addSpecificVideoToPlaylist = async (playlistId, video, token) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
