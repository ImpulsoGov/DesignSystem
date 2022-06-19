import React from "react"
import {NavBar} from "../../componentes/NavBar/NavBar"
import {Footer} from "../../componentes/Footer/Footer"

const propriedades = {
    NavBar:{
        links:[
            { label: "Análise", url: "/analise" },
            { label: "Fórum de gestores", url: "/forum" },
            { label: "Sobre", url: "/sobre" },
            { label: "Consultoria", url: "/consultoria" },
            { label: "Contato", url: "/contato" }
        ],
        municipios:[
            { municipio: "Santo André,SP"},
            { municipio: "São Bernardo do Campo,SP"},
            { municipio: "São Caetano,SP"},
            { municipio: "Mauá,SP"},
            { municipio: "Diadema,SP"}
        ]
    },
    Footer:{
        address:{
            first: "Rua Aracaju 100 - Vila Madalena",
            second: "São Paulo - SP, 01010-100",
        },
        contactCopyright:{
            copyright: "© 2021 Impulso",
            email: "contato@impulsogov.org",
        },
        links:[
            { label: "Quem somos", url: "/quem-somos" },
            { label: "Nossa atuação", url: "/nossa-atuacao" },
            { label: "Notícias", url: "/noticias" },
            { label: "Trabalhe conosco", url: "/trabalhe-conosco" },
            { label: "Quero doar", url: "/quero-doar" },
            { label: "Contato", url: "/contato" }
        ],
        socialMediaURLs:{
            facebook: "/facebook",
            instagram: "/instagram",
            linkedIn: "/linkedin",
            twitter: "/twitter",
        }
    }
}

const PaginaBaseIP = (props) => {
    return (
        <div>
            <NavBar
                links={propriedades.NavBar.links}
                municipios={propriedades.NavBar.municipios}
            />  
            {props.children}
            <Footer
                address={propriedades.Footer.address}
                contactCopyright={propriedades.Footer.contactCopyright}
                links={propriedades.Footer.links}
                socialMediaURLs={propriedades.Footer.socialMediaURLs}
            />
        </div>
    )
};
  
export {PaginaBaseIP}
export default {PaginaBaseIP}