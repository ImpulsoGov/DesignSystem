import React from "react";

import "./ButtonLogin.css";

const ButtonLogin = ({
  theme
  }) => {
    return (
        <button className={"ButtonLogin"+theme}>Entrar</button>
    )}

export {ButtonLogin};