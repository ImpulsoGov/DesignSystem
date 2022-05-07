import React from "react";
import cx from "classnames";
import NextLink from "next/link";

import styles from "./Link.module.css";
import Typography, { ETYPOGRAPHY_VARIANTS } from "../Typography";

export enum ELINK_VARIANTS {
  DEFAULT = "default",
  LINK_PRIMARY = "linkPrimary",
  BUTTON_PRIMARY = "buttonPrimary",
  BUTTON_SECONDARY = "buttonSecondary",
}

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ELINK_VARIANTS;
  fontVariant?: ETYPOGRAPHY_VARIANTS;
  uppercase?: boolean;
}

const Link: React.FC<ILinkProps> = ({
  children,
  className,
  href,
  variant = ELINK_VARIANTS.DEFAULT,
  fontVariant = ETYPOGRAPHY_VARIANTS.BODY_M,
  uppercase = false,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <a
        className={cx(
          styles.anchor,
          styles[variant],
          styles[fontVariant],
          { [styles.uppercase]: uppercase },
          className
        )}
        {...props}
      >
        <Typography as="span" variant={fontVariant}>
          {children}
        </Typography>
      </a>
    </NextLink>
  );
};

export default Link;