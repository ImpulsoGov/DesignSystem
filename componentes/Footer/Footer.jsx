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
    <div className="containerFooter ipColorthemeFooter">
      <div className="logoFrameFooter">
        <div className="logoWrapperFooter">
          <img
            alt="impulso-previne-logoFooter"
            src= {ImpulsoPrevineLogo}
          />
        </div>
      </div>
      <div className="infoLinksWrapperFooter">
        <ul className="listFooter">
          {links.map((item) => {
            return (
              <li key={item.label} className="itemFooter">
                <a href={item.url}>
                  <Typography
                    as="span"
                    className="moreInfoLinkFooter"
                    variant={ETYPOGRAPHY_VARIANTS.BODY_M}
                  >
                    {item.label}
                  </Typography>
                </a>
              </li>
            );
          })}
          <div className="conteiner-logo-impulso-govFooter">
            <div className="realizacaoLabelFooter">Realização:</div>
            <div className="logo-impulsoFooter">
              <img 
                  alt="impulso-gov-logoFooter"
                  src= {ImpulsoLogo}
                />
              </div>
            </div>
        </ul>
        <div className="contactAddressSocialMediasFooter">
          <div className="contactAddressFooter">
            <div className="addressFooter">
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {address.first},
              </Typography>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {address.second}
              </Typography>
            </div>
            <div className="contactFooter">
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {contactCopyright.email}
              </Typography>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {contactCopyright.copyright}
              </Typography>
            </div>
          </div>
          <div className="socialMediasFooter">
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.facebook}
            >
              <img
                alt="facebook"
                src= {FacebookSVG}
              />
            </a>
            <a className="socialMediaFooter" href={socialMediaURLs.twitter}>
              <img
                alt="twitter"
                src= {TwitterSVG}
              />
            </a>
            <a
              className="socialMediaFooter"
              href={socialMediaURLs.instagram}
            >
              <img
                alt="instagram"
                src= {InstagramSVG}
              />
            </a>
            <a
              className="socialMediaFooter"
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