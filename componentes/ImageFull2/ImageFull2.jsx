import React from "react";

import "./ImageFull2.css";

const ImageFull2 = ({
  imagem
  }) => {
    return (
      <div className="containerBanner1-2 ">
        <img
            className="imageContainerBanner1-2"
            alt="BannerImage1"
            src= {String(imagem)}
          />
      </div>
  )};
  
  export {ImageFull2};