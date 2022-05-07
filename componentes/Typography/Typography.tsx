import React from "react";
import cx from "classnames";

import styles from "./Typography.module.css";

export enum ETYPOGRAPHY_VARIANTS {
  HEADLINE_XXL = "headlineXXl",
  HEADLINE_XL = "headlineXl",
  HEADLINE_L = "headlineL",
  HEADLINE_M = "headlineM",
  HEADLINE_S = "headlineS",
  BODY_XL = "bodyXl",
  BODY_L = "bodyL",
  BODY_M = "bodyM",
  BODY_S = "bodyS",
  BUTTON_LABEL_L = "buttonLabelL",
  BUTTON_LABEL = "buttonLabel",
  LINK = "link",
  CAPTION = "caption",
}

export interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: ETYPOGRAPHY_VARIANTS;
  className?: string;
}

const Typography: React.FC<ITypographyProps> = ({
  as = "p",
  variant = ETYPOGRAPHY_VARIANTS.BODY_M,
  className,
  children,
  ...props
}) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.type, styles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;