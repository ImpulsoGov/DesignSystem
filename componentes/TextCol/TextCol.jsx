import React from "react";
import "./TextCol.module.css"
const TextCol = ({
    titulo,
    corpo
}) => {
  return (
      <div className="TextCol">
          <div className="TextColTitle">{titulo}</div>
          <div className="TextColBody">{corpo}</div>
      </div>
)};

export {TextCol};