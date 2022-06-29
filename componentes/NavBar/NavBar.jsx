import React, {useState,useEffect} from "react";

import "./NavBar.css";
import {ButtonLogin} from "../ButtonLogin/ButtonLogin.jsx";
import NavBarIconBranco  from "../estatico/hamburgerIconBranco.svg"
import NavBarIconDark  from "../estatico/hamburgerIconDark.svg"



const NavBarMenu = (tema) => {
  let theme = (tema=="ColorIP") ?  NavBarIconBranco : NavBarIconDark
  return theme
}
const Dropdown = (props) => {
  return (
    <div className="DropdownNavBar">
      <div>{props.link}</div>
      <div className="dropdownContentNavBar">
        <div className="iconDropdownNavBar">
          <div className="iconDropdownContainerNavBar"></div>
        </div>
        <div className="itensDropdownNavBar">
          {props.subtitles.map((subtitle)=>{
            return(
              <div>
                <div className="dropdownItemNavBar"><a href="subtitle.link">{subtitle.label}</a></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
const DropdownMenu = (attr) => {  
  if (attr.index==0){
    return(
      <Dropdown 
        link={attr.link.label}
        subtitles={attr.props.subtitles}
      />
    )
  }else{
    return(
      <a href={attr.link.url} className={"theme"+attr.props.theme.cor}>
        {attr.link.label}
      </a>
    )
  }
}

const DropdownMenuMoblie = (attr) => {  
  const [active,setMode] = useState(false)
  const menuVisible = () =>{
    setMode(!active)
    return active
  }

  if (attr.index==0){
    console.log(attr)
    return(
      <div>
        <a
          onClick = {menuVisible} 
        >{attr.link.label}
        </a>
        { active &&
          <div className="subMenuMoblie themeColorIP">
            {attr.props.subtitles.map((subtitle)=>{
              return(
                <a 
                  href={subtitle.url}
                  className="linkNavBarMoblie">{subtitle.label}</a>
              )
            })}
          </div>
        }
      </div>
    )
  }else{
    return(
      <a href={attr.link.label}>
        {attr.link.label}
      </a>
    )
  }
}

const NavBar = (props) => {
  const [active,setMode] = useState(true)
  const menuVisible = () =>{
    setMode(!active)
    return active
  }
  return (
    <div>
      <div></div>
      <div className={"container_navbar theme"+props.theme.cor}>
        <div className="logoWrapper_navbar">
          <div className="logo_navbar">
          <img
              alt="impulso-previne-logo_navbar"
              src= {String(props.theme.logoProjeto)}
            />
          </div>
        </div>

            <div className="links_navbar">
              {props.menu.map((link, index) => {
                  return (
                    <div key={index} className="link_navbar">
                      {DropdownMenu({index,link,props})}
                    </div>
                  );
                })}
            </div>

          <div className="containerCidadeLogin_navbar">
            <div>
              <select className={"citySelect_navbar"+props.theme.cor}>
                <option>Selecione Seu Municipio</option>
                {props.municipios.map((option) => (
                  <option value={option.municipio}>{option.municipio}</option>
                ))}
              </select>
            </div>
            <div className="ButtonLoginBox_navbar">
              <ButtonLogin theme={props.theme.cor}/>
            </div>
          </div>
          <div className={"buttonMoblie"+props.theme.cor}
            onClick = {menuVisible} 
          >
            <img
                id="navBarIcon"
                alt="NavBarIcon"
                src= {NavBarMenu(props.theme.cor)}
              />
          </div>
      </div>
      <div className={active ?  "linksNavBarMoblie" : "linksNavBarMoblie linksNavBarMoblieVisible"}>
        {props.menu.map((link, index) => {
              return (
                <div key={index} className="link_navbar">
                  {DropdownMenuMoblie({index,link,props})}
                </div>
              );
        })}

      </div>
    </div>
)};

export {NavBar};