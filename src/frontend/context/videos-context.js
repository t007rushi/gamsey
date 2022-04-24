import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  //Get videos
  const url = "/api/videos";
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(url);
        setVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <videoContext.Provider value={{ videos }}>{children}</videoContext.Provider>
  );
};

const useVideos = () => {
  const data = useContext(videoContext);
  if (data !== undefined) {
    return data;
  }
};

export { useVideos, VideoProvider };
