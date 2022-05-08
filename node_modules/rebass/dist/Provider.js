'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = _styledComponents2.default.div([], function (props) {
  return {
    fontFamily: props.theme.font || _theme2.default.font
  };
});

var Provider = function Provider(props) {
  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: Object.assign({}, _theme2.default, props.theme) },
    _react2.default.createElement(Base, props)
  );
};

Provider.propTypes = {
  theme: (0, _propTypes.shape)({
    breakpoints: (0, _propTypes.arrayOf)(_propTypes.number),
    space: (0, _propTypes.arrayOf)(_propTypes.number),
    fontSizes: (0, _propTypes.arrayOf)(_propTypes.number),
    weights: (0, _propTypes.arrayOf)(_propTypes.number),
    colors: (0, _propTypes.oneOfType)([_propTypes.object, _propTypes.array]),
    font: _propTypes.string,
    monospace: _propTypes.string,
    radius: _propTypes.number
  })
};

exports.default = Provider;