import React from "react";

import "./ImagemFundo.css"
import ImagemFundoPNG from "../estatico/imagem-fundo.png"

const ImagemFundo = ({
    chamada,
    chamadacolor,
    cards,
    botao
}) =>{
    return(
        <div className="containerImagemFundo">
            <div className="containerImagemGradiente">
                <img
                    className="imagemFundo"
                    src={ImagemFundoPNG}
                />
                <div className="gradienteImagemFundo">
                    <div className="chamadaImagemFundo">{chamada}<span className="chamadaColor">{chamadacolor}</span></div>
                    <div className="cardsImagemFundo">
                        {cards.map((card)=>{
                            return(
                                <div className="cardImagemFundo">
                                    <div className="cardTitleImagemFundo">{card.title}</div>
                                    <div className="cardBodyImagemFundo">{card.body}</div>
                                </div>
                            )
                    })}
                    </div>
                    <a href={botao.url} className="botaoImagemFundo">{botao.label.toUpperCase()}</a>
                </div>
            </div>
        </div>
    )
}

export {ImagemFundo}