import axios from "axios";
import { toast } from "react-toastify";

export const removeVideoFromPlaylist = async (playlistId, videoId, token) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    toast.success("Video Removed");
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Error occured, try again");
  }
};
