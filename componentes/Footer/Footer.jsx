import React from "react";

import "./Footer.css";
import Typography, { ETYPOGRAPHY_VARIANTS } from "../Typography/Typography.jsx";
import FacebookSVG from "../estatico/facebook.svg";
import InstagramSVG from "../estatico/instagram.svg";
import LinkedInSVG from "../estatico/linked-in.svg";
import TwitterSVG from "../estatico/twitter.svg";
import ImpulsoPrevineLogo from "../estatico/impulso-previne-logo.svg"
import ImpulsoLogo from "../estatico/impulso-gov-logo-branco.svg"


const Footer = ({
  address,
  contactCopyright,
  links,
  socialMediaURLs
}) => {
  return (
    <div className="container">
      <div className="logoFrame">
        <div className="logoWrapper">
          <img
            alt="impulso-previne-logo"
            src= {ImpulsoPrevineLogo}
          />
        </div>
      </div>
      <div className="infoLinksWrapper">
        <ul className="list">
          {links.map((item) => {
            return (
              <li key={item.label} className="item">
                <a href={item.url}>
                  <Typography
                    as="span"
                    className="moreInfoLink"
                    variant={ETYPOGRAPHY_VARIANTS.BODY_M}
                  >
                    {item.label}
                  </Typography>
                </a>
              </li>
            );
          })}
          <div className="conteiner-logo-impulso-gov">
            <div className="realizacaoLabel">Realização:</div>
            <div className="logo-impulso">
              <img 
                  alt="impulso-gov-logo"
                  src= {ImpulsoLogo}
                />
              </div>
            </div>
        </ul>
        <div className="contactAddressSocialMedias">
          <div className="contactAddress">
            <div className="address">
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {address.first},
              </Typography>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {address.second}
              </Typography>
            </div>
            <div className="contact">
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {contactCopyright.email}
              </Typography>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {contactCopyright.copyright}
              </Typography>
            </div>
          </div>
          <div className="socialMedias">
            <a
              className="socialMedia"
              href={socialMediaURLs.facebook}
            >
              <img
                alt="facebook"
                src= {FacebookSVG}
              />
            </a>
            <a className="socialMedia" href={socialMediaURLs.twitter}>
              <img
                alt="twitter"
                src= {TwitterSVG}
              />
            </a>
            <a
              className="socialMedia"
              href={socialMediaURLs.instagram}
            >
              <img
                alt="instagram"
                src= {InstagramSVG}
              />
            </a>
            <a
              className="socialMedia"
              href={socialMediaURLs.linkedIn}
            >
              <img
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
export default {Footer};