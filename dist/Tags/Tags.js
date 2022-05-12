var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonCircle, Flex, Box } from "rebass";

/**
 * This component renders an array of tags. It does not maintain state. Use
 * callback to hook up component to a parent component that manages state.
 */

var Tags = (function(_Component) {
  _inherits(Tags, _Component);

  function Tags(props) {
    _classCallCheck(this, Tags);

    var _this = _possibleConstructorReturn(
      this,
      (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props)
    );

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Tags, [
    {
      key: "handleClick",
      value: function handleClick(event) {
        event.preventDefault();
        this.props.onClick(event.target.value);
      }
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
          tags = _props.tags,
          disabled = _props.disabled;

        return React.createElement(
          Flex,
          { wrap: true },
          tags.map(function(tag) {
            return React.createElement(
              Box,
              { p: 1, key: tag.key },
              React.createElement(
                ButtonCircle,
                {
                  f: 0,
                  value: tag.key,
                  disabled: disabled,
                  onClick: _this2.handleClick
                },
                tag.value
              )
            );
          })
        );
      }
    }
  ]);

  return Tags;
})(Component);

Tags.propTypes = {
  /** Enable or disable component. */
  disabled: PropTypes.bool,
  /** Array of tags to be displayed. */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  /** Callback with tag's `key` as payload is fired when a tag is clicked. */
  onClick: PropTypes.func.isRequired
};
Tags.defaultProps = {
  disabled: false
};

export default Tags;
