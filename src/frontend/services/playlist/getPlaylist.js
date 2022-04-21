import axios from "axios";

export const getPlaylist = async (token) => {
  try {
    const res = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
