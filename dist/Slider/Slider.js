"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Slider.css");

var _leftIcon = _interopRequireDefault(require("../estatico/left-icon.svg"));

var _rightIcon = _interopRequireDefault(require("../estatico/right-icon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CoreSlider = _ref => {
  let {
    titulo,
    subtitulo,
    corpo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cardSlider"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "coreTitulo"
  }, titulo), /*#__PURE__*/_react.default.createElement("div", {
    className: "coreSubTitulo"
  }, subtitulo), /*#__PURE__*/_react.default.createElement("div", {
    className: "coreCorpo"
  }, corpo));
};

const IconLeft = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "left-icon",
    src: _leftIcon.default
  }));
};

const Iconright = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "right-icon",
    src: _rightIcon.default
  }));
};

class Slider extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      len: props.core.length - 1
    };
  }

  nextText() {
    let index = this.state.index;
    let len = this.state.len;

    if (index < len) {
      this.setState({
        index: index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  }

  prevText() {
    let index = this.state.index;
    let len = this.state.len;

    if (index != 0) {
      this.setState({
        index: index - 1
      });
    } else {
      this.setState({
        index: len
      });
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "Slider"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tituloSlider"
    }, this.props.titulo), /*#__PURE__*/_react.default.createElement("div", {
      className: "coreSlider"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btnSlider",
      onClick: () => this.prevText()
    }, /*#__PURE__*/_react.default.createElement(IconLeft, null)), /*#__PURE__*/_react.default.createElement(CoreSlider, {
      titulo: this.props.core[this.state.index].titulo,
      subtitulo: this.props.core[this.state.index].subtitulo,
      corpo: this.props.core[this.state.index].corpo
    }), /*#__PURE__*/_react.default.createElement("button", {
      className: "btnSlider",
      onClick: () => this.nextText()
    }, /*#__PURE__*/_react.default.createElement(Iconright, null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "conteinerChamadaSlider"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "chamadaSlider"
    }, this.props.chamada)));
  }

}

exports.Slider = Slider;