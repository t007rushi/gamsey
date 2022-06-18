import axios from "axios";
import { toast } from "react-toastify";

export const deletePlaylist = async (playlistId, token) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    toast.success(`Playlist Deleted successfully`);
    return data;
  } catch (err) {
    console.log(err);
    toast.error("Error occured, try again");
  }
};
