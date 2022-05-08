'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 8px;\n  margin: 12px;\n  fill: currentcolor;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 8px;\n  margin: 12px;\n  fill: currentcolor;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Root = _styledComponents2.default.div(_templateObject);

var Select = _styledComponents2.default.select([], {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  appearance: 'none',
  width: '100%',
  margin: 0,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  outline: 'none'
});

var Arrow = (0, _styledComponents2.default)(function (props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, props, {
      viewBox: '0 0 32 32' }),
    _react2.default.createElement('path', {
      d: 'M0 6 L32 6 L16 28 z'
    })
  );
})(_templateObject2);

var SelectBase = function SelectBase(props) {
  return _react2.default.createElement(
    Root,
    { className: props.className },
    _react2.default.createElement(Select, _extends({}, props, {
      className: null
    })),
    _react2.default.createElement(Arrow, null)
  );
};

exports.default = SelectBase;