import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
import Typography, { ETYPOGRAPHY_VARIANTS } from "components/Typography";
import FacebookSVG from "estatico/facebook.svg";
import InstagramSVG from "estatico/instagram.svg";
import LinkedInSVG from "estatico/linked-in.svg";
import TwitterSVG from "estatico/twitter.svg";
import Link, { ELINK_VARIANTS } from "components/Link";

interface ILink {
  label: string;
  url: string;
}

interface IAddressInfo {
  first: string;
  second: string;
}

interface IContactCopyright {
  email: string;
  copyright: string;
}

interface IFooterProps {
  address: IAddressInfo;
  contactCopyright: IContactCopyright;
  links: ILink[];
  socialMediaURLs: ISocialMedias;
}

interface ISocialMedias {
  facebook: string;
  instagram: string;
  linkedIn: string;
  twitter: string;
}

const Footer: React.FC<IFooterProps> = ({
  address,
  contactCopyright,
  links,
  socialMediaURLs,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoFrame}>
        <div className={styles.logoWrapper}>
          <Image
            alt="impulso-gov-logo"
            src="/impulso-gov-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.infoLinksWrapper}>
        <ul className={styles.list}>
          {links.map((item) => {
            return (
              <li key={item.label} className={styles.item}>
                <Link href={item.url}>
                  <Typography
                    as="span"
                    className={styles.moreInfoLink}
                    variant={ETYPOGRAPHY_VARIANTS.BODY_M}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.contactAddressSocialMedias}>
          <div className={styles.contactAddress}>
            <div className={styles.address}>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {address.first},
              </Typography>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {address.second}
              </Typography>
            </div>
            <div className={styles.contact}>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {contactCopyright.email}
              </Typography>
              <Typography variant={ETYPOGRAPHY_VARIANTS.BODY_S} as="p">
                {contactCopyright.copyright}
              </Typography>
            </div>
          </div>
          <div className={styles.socialMedias}>
            <Link
              className={styles.socialMedia}
              href={socialMediaURLs.facebook}
            >
              <FacebookSVG />
            </Link>
            <Link className={styles.socialMedia} href={socialMediaURLs.twitter}>
              <TwitterSVG />
            </Link>
            <Link
              className={styles.socialMedia}
              href={socialMediaURLs.instagram}
            >
              <InstagramSVG />
            </Link>
            <Link
              className={styles.socialMedia}
              href={socialMediaURLs.linkedIn}
            >
              <LinkedInSVG />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;