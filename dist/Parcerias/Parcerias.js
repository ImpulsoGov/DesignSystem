"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parcerias = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./Parcerias.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let importAll = r => {
  return r.keys().map(r);
};

const images = importAll(require.context('../estatico/parceiros', false, /\.(png|svg)$/));
const parceiros = images.map(image => {
  return {
    alt: image.split("/").slice(-1)[0].split(".")[0],
    src: image
  };
});

const Parcerias = _ref => {
  let {} = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container_parceiros"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "parceirosLabel"
  }, "Parceiros"), /*#__PURE__*/_react.default.createElement("div", {
    className: "gridContainer"
  }, parceiros.map(parceiro => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "logo_parceiros"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "imageContainer",
      alt: parceiro.alt,
      src: parceiro.src
    }));
  })));
};

exports.Parcerias = Parcerias;