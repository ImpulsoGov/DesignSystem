"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content3Col = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Content3Col.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Content3Col = _ref => {
  let {
    titulo,
    child1,
    child2,
    child3
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Content3Col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Content3ColTitulo"
  }, titulo), /*#__PURE__*/_react.default.createElement("div", {
    className: "Content3ColGrid"
  }, child1, child2, child3));
};

exports.Content3Col = Content3Col;