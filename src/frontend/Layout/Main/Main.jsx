import React from "react";
import { Categories } from "../../components/Categories/Categories";
import { ImgSlider } from "../../components/ImgSlider/ImgSlider";
import { Row } from "../../components/Row/Row";

export const Main = () => {
  return (
    <div>
      <ImgSlider />
      <Categories />
      <Row cat="pc" title="PC Gaming"/>
      <Row cat="ps4" title="PS4 Gaming"/>
    </div>
  );
};
