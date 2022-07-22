import React from "react";

import "./FormConsultoria.module.css"

const FormConsultoria = ({
    title,
    mail,
    link,
    button
})=>{
    return(
        <div id="formulario">
            <div className="containerFormConsultoria">
                <div className="titleFormConsultoria">{title}<span className="mailFormConsultoria">{mail}</span></div>
                {button != "" && 
                <a 
                    className="buttonFormConsultoria"
                    href={link}
                >{button.toUpperCase()}</a>}
            </div>
        </div>
    )
}

export {FormConsultoria}