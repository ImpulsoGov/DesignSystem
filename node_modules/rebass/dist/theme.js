'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monospace = exports.font = exports.radius = exports.colors = exports.weights = exports.fontSizes = exports.space = exports.breakpoints = undefined;

var _palx = require('palx');

var _palx2 = _interopRequireDefault(_palx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = exports.breakpoints = [32, 48, 64, 80];

var space = exports.space = [0, 4, 8, 16, 32, 64, 128];

var fontSizes = exports.fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];

var weights = exports.weights = [400, 700];

var palette = (0, _palx2.default)('#07c');

var flattened = Object.keys(palette).reduce(function (a, key) {
  var value = palette[key];
  if (Array.isArray(value)) {
    a[key] = value[5];
    value.forEach(function (val, i) {
      a[key + i] = val;
    });
  } else {
    a[key] = value;
  }
  return a;
}, {});

// todo: flatten

var colors = exports.colors = Object.assign({}, flattened, {
  black: '#000',
  white: '#fff'
});

var radius = exports.radius = 4;
var font = exports.font = '-apple-system, BlinkMacSystemFont, sans-serif';
var monospace = exports.monospace = '"SF Mono", "Roboto Mono", Menlo, monospace';

exports.default = {
  breakpoints: breakpoints,
  space: space,
  fontSizes: fontSizes,
  weights: weights,
  font: font,
  monospace: monospace,
  colors: colors,
  radius: radius
};