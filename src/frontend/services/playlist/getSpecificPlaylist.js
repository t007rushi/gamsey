import axios from "axios";

export const getSpecificPlaylist = async (playlistId, token) => {
  try {
    const { data } = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
