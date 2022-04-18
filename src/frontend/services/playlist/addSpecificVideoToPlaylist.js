import axios from "axios";

export const addSpecificVideoToPlaylist = async (playlistId, token) => {
  try {
    const { data } = await axios.post(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
