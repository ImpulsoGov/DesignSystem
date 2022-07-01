import React from "react";

import "./NavBar.css";
import Typography, { ETYPOGRAPHY_VARIANTS } from "../Typography/Typography.jsx";
import {ButtonLogin} from "../ButtonLogin/ButtonLogin.jsx";

const NavBar = ({
  links,
  municipios
}) => {
  return (
    <div className="container_navbar">
      <div className="logoWrappe_navbar">
        <div className="logo_navbar">
        <img
            alt="impulso-previne-logo_navbar"
            src= {ImpulsoPrevineLogo}
          />
        </div>
      </div>

          <ul className="links_navbar">
            {links.map((link, index) => {
              return (
                <li key={index} className="link_navbar">
                  <a href={link.url}>
                    <Typography
                      as="span"
                      className="linkLabel_navbar"
                      variant={ETYPOGRAPHY_VARIANTS.BODY_M}
                    >
                      {link.label}
                    </Typography>
                  </a>
                </li>
              );
            })}
          </ul>

        <div className="containerCidadeLogin_navbar">
          <div>
            <select className="citySelect_navbar">
              <option>Selecione Seu Municipio</option>
              {municipios.map((option) => (
                <option value={option.municipio}>{option.municipio}</option>
              ))}
            </select>
          </div>
          <div className="ButtonLoginBox_navbar">
            <ButtonLogin/>
          </div>
        </div>
    </div>
)};

export {NavBar};