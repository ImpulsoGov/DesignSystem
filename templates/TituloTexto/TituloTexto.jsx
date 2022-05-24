import React from "react";
import "./TituloTexto.css"
import { ImageFull2 } from "../../componentes/ImageFull2/ImageFull2"

const ImageTop = ({
  top,
  link,
  titulo
}) => {
  if (top==true) {
    return(
      <div>
        <ImageFull2 imagem={link} />
        <div className="tituloTexto">{titulo}</div>
      </div>
    )
  }else if (top==false) {
    return(
      <div>
        <div className="tituloTexto">{titulo}</div>
        <ImageFull2 imagem={link} />
      </div>
    )
  }else{
    return(
      <div>
        <div className="tituloTexto">{titulo}</div>
      </div>
    )
  }
}

const TituloTexto = ({
  titulo,
  texto,
  imagem
}) => {
  return (
      <div className="containerTexto">
        <ImageTop
         top = {imagem.posicao}
         link = {imagem.url}
         titulo = {titulo}
         />
        <div className="corpoTexto">{texto}</div>
      </div>
)};

export {TituloTexto};