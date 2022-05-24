import React from "react"
import {NavBar} from "../../componentes/NavBar/NavBar"
import {Footer} from "../../componentes/Footer/Footer"


const PaginaBase = (props) => {
    return (
        <div>
            <NavBar
                links={props.NavBar.links}
                municipios={props.NavBar.municipios}
            />  
            {props.children}
            <Footer
                address={props.Footer.address}
                contactCopyright={props.Footer.contactCopyright}
                links={props.Footer.links}
                socialMediaURLs={props.Footer.socialMediaURLs}
            />
        </div>
    )
};
  
export {PaginaBase}
export default {PaginaBase}