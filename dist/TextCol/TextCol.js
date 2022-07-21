"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextCol = void 0;

var _react = _interopRequireDefault(require("react"));

require("./TextCol.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextCol = _ref => {
  let {
    titulo,
    corpo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "TextCol"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "TextColTitle"
  }, titulo), /*#__PURE__*/_react.default.createElement("div", {
    className: "TextColBody"
  }, corpo));
};

exports.TextCol = TextCol;