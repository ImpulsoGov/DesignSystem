import React from "react";

import "./Banner1.css";
import BannerImage1 from "../estatico/banner-1.png"

const Banner1 = ({
  }) => {
    return (
      <div className="containerBanner1 ">
        <img
            className="imageContainerBanner1"
            alt="BannerImage1"
            src= {BannerImage1}
          />
      </div>
  )};
  
  export {Banner1};