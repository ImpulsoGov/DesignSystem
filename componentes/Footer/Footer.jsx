import React from "react";
import cx from "classnames";
import "./Footer.module.css";
const InstagramSVG = "/instagram.svg";
const LinkedInSVG ="/linked-in.svg";
const TwitterSVG = "/twitter.svg";

const Footer = ({
  theme,
  address,
  contactCopyright,
  links,
  socialMediaURLs
}) => {
  return (
    <div className={cx("containerFooter", "theme"+theme.cor+"Footer")}>
      <div>
        <img
          className="logoWrapperFooter"
          alt="impulso-previne-logo"
          src= {String(theme.logoProjeto)}
        />
      </div>
      <div className="infoLinksWrapperFooter">
        <div className="conteinerUpperFooter">
          <div className="listFooter">
            {links.map((item) => {
              return (
                <div key={item.label} className="itemFooter">
                  <a href={item.url} className={"theme"+theme.cor+"Footer"}>
                      {item.label}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="realizacaoFooter">
            <div>Realização:</div>
            <div >
              <img className="logoImpulso"
                  alt="impulso-gov-logo"
                  src= {String(theme.logoImpulso)}
              />
            </div>
          </div>

        </div>
        
        <div className="contactAddressSocialMediasFooter">
          <div className="contactAddressFooter">
            <div>
                <div>{address.first}</div>
                <div>{address.second}</div>
            </div>
            <div className="contactFooter">
                <div>{contactCopyright.email}</div>
                <div>{contactCopyright.copyright}</div>
            </div>
          </div>
          <div className="socialMediasFooter">
            <a className="socialMediaFooter} href={socialMediaURLs.twitter">
              <img
                className="socialMediaFooter"
                alt="twitter"
                src= {TwitterSVG}
              />
            </a>
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.instagram}
            >
              <img
                className="socialMediaFooter"
                alt="instagram"
                src= {InstagramSVG}
              />
            </a>
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.linkedIn}
            >
              <img
                className="socialMediaFooter"
                alt="linkedin"
                src= {LinkedInSVG}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Footer};