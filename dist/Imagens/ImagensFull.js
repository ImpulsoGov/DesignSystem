"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagensFull2 = exports.ImagensFull = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ImagensFull.css");

require("./ImagensFull2.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImagensFull = _ref => {
  let {
    imagem
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerBanner1 "
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "imageContainerBanner1",
    alt: "BannerImage1",
    src: String(imagem)
  }));
};

exports.ImagensFull = ImagensFull;

const ImagensFull2 = _ref2 => {
  let {
    imagem
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerBanner1-2 "
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "imageContainerBanner1-2",
    alt: "BannerImage1",
    src: String(imagem)
  }));
};

exports.ImagensFull2 = ImagensFull2;