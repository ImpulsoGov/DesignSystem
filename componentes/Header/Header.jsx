import React from "react";

import "./Header.module.css";

const Header = ({
    titulo,
    tituloDestaque,
    texto,
    botao,
    chamada
}) => {
  return (
    <div className="conteinerHeader">
        <div className="tituloHeader">{titulo}<span className="tituloDestaqueHeader">{tituloDestaque}</span></div>
        <div className="textoHeader">{texto}</div>
        <div className="conteinerChamadasHeader">
            {botao.label && <a className="buttonHeader" href={botao.url}>{botao.label.toUpperCase()}</a>}
            {chamada.label && <a className="consultoriaHeader" href={chamada.url}>{chamada.label.toUpperCase()}</a>}
        </div>
    </div>
)};

export {Header};