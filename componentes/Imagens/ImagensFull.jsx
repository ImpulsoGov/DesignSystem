import React from "react";

import "./ImagensFull.module.css";
import "./ImagensFull2.module.css";
import "./ImagensFull3.module.css";

const ImagensFull = ({
  imagem
  }) => {
    return (
      <div className="containerBanner1">
        <img
            className="imageContainerBanner1"
            alt="BannerImage1"
            src= {String(imagem)}
          />
      </div>
  )};

  const ImagensFull2 = ({
    imagem
    }) => {
      return (
        <div className="containerBanner2">
          <img
              className="imageContainerBanner2"
              alt="BannerImage1"
              src= {String(imagem)}
            />
        </div>
    )};
    const ImagensFull3 = ({
      imagem
      }) => {
        return (
          <div className="containerBanner3">
            <img
                className="imageContainerBanner3"
                alt="BannerImage1"
                src= {String(imagem)}
              />
          </div>
      )};
    
  export {ImagensFull, ImagensFull2,ImagensFull3};