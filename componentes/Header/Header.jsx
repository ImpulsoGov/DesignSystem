import React from "react";

import "./Header.css";

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
            <a className="buttonHeader" href={botao.url}>{botao.label}</a>
            <a className="consultoriaHeader" href={chamada.url}>{chamada.label}</a>
        </div>
    </div>
)};

export {Header};