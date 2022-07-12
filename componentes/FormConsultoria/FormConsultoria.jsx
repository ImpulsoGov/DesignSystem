import React from "react";

import "./FormConsultoria.css"

const FormConsultoria = ({
    title,
    mail,
    link
})=>{
    return(
        <div className="containerFormConsultoria">
            <div className="titleFormConsultoria">{title}<span className="mailFormConsultoria">{mail}</span></div>
            <a 
                className="buttonFormConsultoria"
                href={link}
                >ENVIAR</a>
        </div>
    )
}

export {FormConsultoria}