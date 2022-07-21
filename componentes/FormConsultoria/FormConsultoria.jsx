import React from "react";

import style from "./FormConsultoria.module.css"


const FormConsultoria = ({
    title,
    mail,
    link
})=>{
    return(
        <div className={style['containerFormConsultoria']}>
            <div className="titleFormConsultoria">{title}<span className="mailFormConsultoria">{mail}</span></div>
            <a 
                className="buttonFormConsultoria"
                href={link}
                >ENVIAR</a>
        </div>
    )
}

export {FormConsultoria}