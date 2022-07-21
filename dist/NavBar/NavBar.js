"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./NavBar.css");

var _ButtonLogin = require("../ButtonLogin/ButtonLogin.jsx");

var _hamburgerIconBranco = _interopRequireDefault(require("../estatico/hamburgerIconBranco.svg"));

var _hamburgerIconDark = _interopRequireDefault(require("../estatico/hamburgerIconDark.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavBarMenu = tema => {
  let theme = tema == "ColorIP" ? _hamburgerIconBranco.default : _hamburgerIconDark.default;
  return theme;
};

const Dropdown = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DropdownNavBar"
  }, /*#__PURE__*/_react.default.createElement("div", null, props.link), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdownContentNavBar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "iconDropdownNavBar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "iconDropdownContainerNavBar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "itensDropdownNavBar"
  }, props.subtitles.map(subtitle => {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdownItemNavBar"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "subtitle.link"
    }, subtitle.label)));
  }))));
};

const DropdownMenu = attr => {
  if (attr.index == 0) {
    return /*#__PURE__*/_react.default.createElement(Dropdown, {
      link: attr.link.label,
      subtitles: attr.props.subtitles
    });
  } else {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: attr.link.url,
      className: "theme" + attr.props.theme.cor
    }, attr.link.label);
  }
};

const DropdownMenuMoblie = attr => {
  const [active, setMode] = (0, _react.useState)(false);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  if (attr.index == 0) {
    console.log(attr);
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
      onClick: menuVisible
    }, attr.link.label), active && /*#__PURE__*/_react.default.createElement("div", {
      className: "subMenuMoblie themeColorIP"
    }, attr.props.subtitles.map(subtitle => {
      return /*#__PURE__*/_react.default.createElement("a", {
        href: subtitle.url,
        className: "linkNavBarMoblie"
      }, subtitle.label);
    })));
  } else {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: attr.link.label
    }, attr.link.label);
  }
};

const NavBar = props => {
  const [active, setMode] = (0, _react.useState)(true);

  const menuVisible = () => {
    setMode(!active);
    return active;
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container_navbar theme" + props.theme.cor
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logoWrapper_navbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logo_navbar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "impulso-previne-logo_navbar",
    src: String(props.theme.logoProjeto)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "links_navbar"
  }, props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "link_navbar"
    }, DropdownMenu({
      index,
      link,
      props
    }));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "containerCidadeLogin_navbar"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("select", {
    className: "citySelect_navbar" + props.theme.cor
  }, /*#__PURE__*/_react.default.createElement("option", null, "Selecione Seu Municipio"), props.municipios.map(option => /*#__PURE__*/_react.default.createElement("option", {
    value: option.municipio
  }, option.municipio)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "ButtonLoginBox_navbar"
  }, /*#__PURE__*/_react.default.createElement(_ButtonLogin.ButtonLogin, {
    theme: props.theme.cor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonMoblie" + props.theme.cor,
    onClick: menuVisible
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "navBarIcon",
    alt: "NavBarIcon",
    src: NavBarMenu(props.theme.cor)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: active ? "linksNavBarMoblie" : "linksNavBarMoblie linksNavBarMoblieVisible"
  }, props.menu.map((link, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "link_navbar"
    }, DropdownMenuMoblie({
      index,
      link,
      props
    }));
  })));
};

exports.NavBar = NavBar;