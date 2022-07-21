"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = _ref => {
  let {
    titulo,
    tituloDestaque,
    texto,
    botao,
    chamada
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "conteinerHeader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tituloHeader"
  }, titulo, /*#__PURE__*/_react.default.createElement("span", {
    className: "tituloDestaqueHeader"
  }, tituloDestaque)), /*#__PURE__*/_react.default.createElement("div", {
    className: "textoHeader"
  }, texto), /*#__PURE__*/_react.default.createElement("div", {
    className: "conteinerChamadasHeader"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "buttonHeader",
    href: botao.url
  }, botao.label), /*#__PURE__*/_react.default.createElement("a", {
    className: "consultoriaHeader",
    href: chamada.url
  }, chamada.label)));
};

exports.Header = Header;