"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagemFundo = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ImagemFundo.css");

var _imagemFundo = _interopRequireDefault(require("../estatico/imagem-fundo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImagemFundo = _ref => {
  let {
    chamada,
    chamadacolor,
    cards,
    botao
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerImagemFundo"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "containerImagemGradiente"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "imagemFundo",
    src: _imagemFundo.default
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "gradienteImagemFundo"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "chamadaImagemFundo"
  }, chamada, /*#__PURE__*/_react.default.createElement("span", {
    className: "chamadaColor"
  }, chamadacolor)), /*#__PURE__*/_react.default.createElement("div", {
    className: "cardsImagemFundo"
  }, cards.map(card => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "cardImagemFundo"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cardTitleImagemFundo"
    }, card.title), /*#__PURE__*/_react.default.createElement("div", {
      className: "cardBodyImagemFundo"
    }, card.body));
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: botao.url,
    className: "botaoImagemFundo"
  }, botao.label.toUpperCase()))));
};

exports.ImagemFundo = ImagemFundo;