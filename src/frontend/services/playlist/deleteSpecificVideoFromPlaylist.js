import axios from "axios";

export const deleteSpecificVideoFromPlaylist = async (
  playlistId,
  videoId,
  token
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
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
