import React from "react";
import { Categories, ImgSlider, Row } from "../../components/index";

export const HomePage = () => {
  return (
    <div>
      <ImgSlider />
      <Categories />
      <Row cat="pc" title="PC Gaming" />
      <Row cat="ps4" title="PS4 Gaming" />
    </div>
  );
};
