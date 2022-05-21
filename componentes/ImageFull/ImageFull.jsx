import React from "react";

import "./ImageFull.css";

const ImageFull = ({
  imagem
  }) => {
    return (
      <div className="containerBanner1 ">
        <img
            className="imageContainerBanner1"
            alt="BannerImage1"
            src= {String(imagem)}
          />
      </div>
  )};
  
  export {ImageFull};