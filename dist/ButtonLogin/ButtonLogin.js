"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLogin = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ButtonLogin.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonLogin = _ref => {
  let {
    theme
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "ButtonLogin" + theme
  }, "Entrar");
};

exports.ButtonLogin = ButtonLogin;