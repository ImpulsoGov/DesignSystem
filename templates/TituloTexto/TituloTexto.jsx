import React from "react";
import DOMPurify from "dompurify";
import "./TituloTexto.css"
import { ImagensFull2 } from "../../componentes/Imagens/ImagensFull"

const sanitize = (texto) => ({
  __html: DOMPurify.sanitize(texto)
})

const ImageTop = ({
  top,
  link,
  titulo
}) => {
  if (top==true) {
    return(
      <div>
        <ImagensFull2 imagem={link} />
        <div 
          className="tituloTexto"
          dangerouslySetInnerHTML={sanitize(titulo)}
          ></div>
      </div>
    )
  }else if (top==false) {
    return(
      <div>
        <div 
          className="tituloTexto"
          dangerouslySetInnerHTML={sanitize(titulo)}
          ></div>
        <ImagensFull2 imagem={link} />
      </div>
    )
  }else{
    return(
      <div>
        <div 
          className="tituloTexto"
          dangerouslySetInnerHTML={sanitize(titulo)}
          ></div>
      </div>
    )
  }
}

const TituloTexto = ({
  titulo,
  texto,
  imagem,
}) => {
  return (
      <div className="containerTexto">
        <ImageTop
         top = {imagem.posicao}
         link = {imagem.url}
         titulo = {titulo}
         />
        <div 
          className="corpoTexto"
          dangerouslySetInnerHTML={sanitize(texto)}
          ></div>
      </div>
)};

export {TituloTexto};