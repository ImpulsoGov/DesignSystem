"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Footer.css");

var _Typography = _interopRequireWildcard(require("../Typography/Typography.jsx"));

var _facebook = _interopRequireDefault(require("../estatico/facebook.svg"));

var _instagram = _interopRequireDefault(require("../estatico/instagram.svg"));

var _linkedIn = _interopRequireDefault(require("../estatico/linked-in.svg"));

var _twitter = _interopRequireDefault(require("../estatico/twitter.svg"));

var _impulsoPrevineLogo = _interopRequireDefault(require("../estatico/impulso-previne-logo.svg"));

var _impulsoGovLogoBranco = _interopRequireDefault(require("../estatico/impulso-gov-logo-branco.svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = _ref => {
  let {
    address,
    contactCopyright,
    links,
    socialMediaURLs
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerFooter ipColorthemeFooter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logoFrameFooter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logoWrapperFooter"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "impulso-previne-logoFooter",
    src: _impulsoPrevineLogo.default
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "infoLinksWrapperFooter"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "listFooter"
  }, links.map(item => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item.label,
      className: "itemFooter"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item.url
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      as: "span",
      className: "moreInfoLinkFooter",
      variant: _Typography.ETYPOGRAPHY_VARIANTS.BODY_M
    }, item.label)));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "conteiner-logo-impulso-govFooter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "realizacaoLabelFooter"
  }, "Realiza\xE7\xE3o:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-impulsoFooter"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "impulso-gov-logoFooter",
    src: _impulsoGovLogoBranco.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "contactAddressSocialMediasFooter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contactAddressFooter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "addressFooter"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: _Typography.ETYPOGRAPHY_VARIANTS.BODY_S,
    as: "p"
  }, address.first, ","), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: _Typography.ETYPOGRAPHY_VARIANTS.BODY_S,
    as: "p"
  }, address.second)), /*#__PURE__*/_react.default.createElement("div", {
    className: "contactFooter"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: _Typography.ETYPOGRAPHY_VARIANTS.BODY_S,
    as: "p"
  }, contactCopyright.email), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: _Typography.ETYPOGRAPHY_VARIANTS.BODY_S,
    as: "p"
  }, contactCopyright.copyright))), /*#__PURE__*/_react.default.createElement("div", {
    className: "socialMediasFooter"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "socialMediaFooter",
    href: socialMediaURLs.facebook
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "facebook",
    src: _facebook.default
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "socialMediaFooter",
    href: socialMediaURLs.twitter
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "twitter",
    src: _twitter.default
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "socialMediaFooter",
    href: socialMediaURLs.instagram
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "instagram",
    src: _instagram.default
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "socialMediaFooter",
    href: socialMediaURLs.linkedIn
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "linkedin",
    src: _linkedIn.default
  }))))));
};

exports.Footer = Footer;