import axios from "axios";
import { toast } from "react-toastify";

export const addVideoToPlaylist = async (playlistId, video, token) => {
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
    toast.success(`${video.title} added to Playlist`);
    return data;
  } catch (err) {
    console.log(err.message);
    toast.error("Error while adding video try again");
  }
};
