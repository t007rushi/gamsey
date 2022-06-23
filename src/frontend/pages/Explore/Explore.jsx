import React from "react";
import { useVideos } from "../../context/videos-context";
import { BsDot } from "../../constants/react-icons";
import "./explore.css";
import { CategoriesFilter, OptionsField } from "../../components";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

export const Explore = () => {
  const { videos } = useVideos();
  const { filterstate } = useFilter();

  const filteredVideos =
    filterstate.filterby === "all"
      ? videos
      : videos.filter((item) => item.categoryName === filterstate.filterby);

  const searchedFilteredData =
    filterstate.search === ""
      ? filteredVideos
      : filteredVideos.filter((data) =>
          data.title.toLowerCase().includes(filterstate.search.toLowerCase())
        );
  const navigate = useNavigate();

  return (
    <div>
      <CategoriesFilter />
      {searchedFilteredData.length === 0 ? (
        <h1 className="search-msg">Sorry No desired Video Found, Try again </h1>
      ) : (
        <div className="vid-listing-container">
          {searchedFilteredData?.map(
            ({ _id, title, creator, views, createdAt }) => {
              return (
                <div className="vid-wrapper" key={_id}>
                  <img
                    src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
                    alt="img"
                    width="100%"
                    height="100%"
                    onClick={() => {
                      navigate(`/explore/${_id}`);
                    }}
                  />
                  <div className="flex-col vid-details">
                    <div className="flex-row spc-btwn title-optionicon-wrap">
                      <h3>{title} </h3>
                      <OptionsField
                        vid={{ _id, title, creator, views, createdAt }}
                      />
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
            }
          )}
        </div>
      )}
    </div>
  );
};
