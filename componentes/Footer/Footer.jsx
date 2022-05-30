import React from "react";

import "./Footer.css";
import FacebookSVG from "../estatico/facebook.svg";
import InstagramSVG from "../estatico/instagram.svg";
import LinkedInSVG from "../estatico/linked-in.svg";
import TwitterSVG from "../estatico/twitter.svg";

const Footer = ({
  theme,
  address,
  contactCopyright,
  links,
  socialMediaURLs
}) => {
  return (
    <div className={"containerFooter theme"+theme.cor}>
          <img
            className="logoWrapper"
            alt="impulso-previne-logo"
            src= {String(theme.logoProjeto)}
          />
      <div className="infoLinksWrapper">
        <div className="list">
          {links.map((item) => {
            return (
              <div key={item.label} className="item">
                <a href={item.url} className={"theme"+theme.cor}>
                    {item.label}
                </a>
              </div>
            );
          })}
          <div className="item">
            <div className="item">Realização:</div>
            <div className="logo-impulso">
              <img className="logo-impulso"
                  alt="impulso-gov-logo"
                  src= {String(theme.logoImpulso)}
              />
            </div>
          </div>

        </div>
        
        <div className="contactAddressSocialMedias">
          <div className="contactAddress">
            <div>
                <div>{address.first}</div>
                <div>{address.second}</div>
            </div>
            <div className="contact">
                <div>{contactCopyright.email}</div>
                <div>{contactCopyright.copyright}</div>
            </div>
          </div>
          <div className="socialMediasFooter">
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.facebook}
            >
              <img
                className="socialMedia"
                alt="facebook"
                src= {FacebookSVG}
              />
            </a>
            <a className="socialMediaFooter" href={socialMediaURLs.twitter}>
              <img
                className="socialMedia"
                alt="twitter"
                src= {TwitterSVG}
              />
            </a>
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.instagram}
            >
              <img
                className="socialMedia"
                alt="instagram"
                src= {InstagramSVG}
              />
            </a>
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.linkedIn}
            >
              <img
                className="socialMedia"
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