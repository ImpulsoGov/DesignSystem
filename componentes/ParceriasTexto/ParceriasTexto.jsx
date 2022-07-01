import React from "react";
import cx from "classnames";
import "./ParceriasTexto.css";

let importAll = (r)=> {
    return r.keys().map(r);
  }
const images = importAll(require.context('../estatico/parceiros', false, /\.(png|svg)$/));
const parceiros = images.map((image)=>{
    return(
        {
            alt: image.split("/").slice(-1)[0].split(".")[0],
            src: image
        }
    )
})
const ParceriasTexto = ({
    text,
    label
}) => {
  return (
    <div className="container_parceiros">
        <div className="textoParcerias">{text}</div>
        <div className="parceirosLabel">{label}</div>
        <div className="gridContainer">
                {parceiros.map((parceiro)=>{
                    return(
                        <div className="logo_parceiros">
                            <img className="imageContainer"
                            alt= {parceiro.alt}
                            src= {parceiro.src}
                            />
                        </div>
                    )
                })}
        </div>
    </div>
  );
};

export {ParceriasTexto};