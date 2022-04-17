/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState} from "react";
import { useVideos } from "../../context/videos-context";
import { BsDot } from "../../constants/react-icons";
import "./explore.css";
import { OptionsField } from "../../components";
import { PlayListModal } from "../../components/PlayListModal/PlayListModal";

export const Explore = () => {
  const { videos, fetchVideos } = useVideos();
  const [showModal,setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  useEffect(() => {
    fetchVideos();
  }, []);
  const pcgames = videos.filter(
    (item) => item.categoryName === "pc" || item.categoryName === "ps4"
  );
  return (
    <div className="vid-listing-container">
      {pcgames.map(({ _id, title, creator, views, createdAt }) => {
        return (
          <div className="vid-wrapper" key={_id}>
            <img
              src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
              alt="img"
              width="100%"
              height="100%"
            />
            <div className="flex-col vid-details">
              <div className="flex-row spc-btwn title-optionicon-wrap">
                <h3>{title} </h3>
                <OptionsField openModal = {openModal}/>
              </div>
              <span>⚫ {creator} ✔ </span>
              <div className="flex-row center-it views-time-wrap">
                <span>{`${views}k views`}</span>
                <BsDot />
                <span>{`${createdAt} ago`}</span>
              </div>
            </div>
          </div>
        );
      })}
     {showModal && <PlayListModal closeFun={closeModal}/> }
    </div>
  );
};
