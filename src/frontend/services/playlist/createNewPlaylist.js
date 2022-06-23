import axios from "axios";
import { toast } from "react-toastify";

export const createNewPlaylist = async (playlistData, token) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      { playlist: playlistData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    toast.success(`Playlist created successfully`);
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Error while creating playlist");
  }
};
