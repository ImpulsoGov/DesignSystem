'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanProps = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tag = function tag() {
  var blacklist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var clean = cleanProps(blacklist);

  return function (type) {
    var Base = function Base(props) {
      var isEl = typeof type === 'string';
      var Comp = isEl ? props.is || type : type;
      var next = isEl ? clean(props) : props;

      if (isEl) next.is = null;

      return _react2.default.createElement(Comp, next);
    };

    return Base;
  };
};

var cleanProps = exports.cleanProps = function cleanProps(blacklist) {
  return function (props) {
    var next = {};
    for (var key in props) {
      if (blacklist.includes(key)) continue;
      next[key] = props[key];
    }
    return next;
  };
};

exports.default = tag;