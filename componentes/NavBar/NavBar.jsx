import React from "react";

import "./NavBar.css";
import {ButtonLogin} from "../ButtonLogin/ButtonLogin.jsx";
import NavBarIconBranco  from "../estatico/hamburgerIconBranco.svg"
import NavBarIconDark  from "../estatico/hamburgerIconDark.svg"

const NavBarMenu = (tema) => {
  let theme = (tema=="ColorIP") ?  NavBarIconBranco : NavBarIconDark
  return theme
}

const NavBar = ({
  theme,
  links,
  municipios
}) => {
  return (
    <div>
      <div className={"container_navbar theme"+theme.cor}>
        <div className="logoWrapper_navbar">
          <div className="logo_navbar">
          <img
              alt="impulso-previne-logo_navbar"
              src= {String(theme.logoProjeto)}
            />
          </div>
        </div>

            <div className="links_navbar">
              {links.map((link, index) => {
                return (
                  <div key={index} className="link_navbar">
                    <a href={link.url} className={"theme"+theme.cor}>
                        {link.label}
                    </a>
                  </div>
                );
              })}
            </div>

          <div className="containerCidadeLogin_navbar">
            <div>
              <select className={"citySelect_navbar"+theme.cor}>
                <option>Selecione Seu Municipio</option>
                {municipios.map((option) => (
                  <option value={option.municipio}>{option.municipio}</option>
                ))}
              </select>
            </div>
            <div className="ButtonLoginBox_navbar">
              <ButtonLogin theme={theme.cor}/>
            </div>
          </div>
          <div className={"buttonMoblie"+theme.cor}>
            <img
                id="navBarIcon"
                alt="NavBarIcon"
                src= {NavBarMenu(theme.cor)}
              />
          </div>
      </div>
      <div className="linksNavBarMoblie">
          {links.map((link, index) => {
            return (
              <div key={index} className="link_navbar">
                <a href={link.url}>
                    {link.label}
                </a>
              </div>
            );
          })}
      </div>
    </div>
)};

export {NavBar};