'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createComponent = require('./create-component');

var _createComponent2 = _interopRequireDefault(_createComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createLibrary = function createLibrary(components) {
  var library = components.filter(function (c) {
    return c !== null;
  }).reduce(function (a, b) {
    return Object.assign(a, _defineProperty({}, b.name, (0, _createComponent2.default)(b, a)));
  }, {});

  return library;
};

exports.default = createLibrary;