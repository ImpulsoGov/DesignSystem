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
import { Select } from "rebass";

/**
 * This component encapsulates
 * [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).
 * It does does not maintain state, i.e. it does not store selected option.
 * State needs to be managed by parent component, which can be notified of
 * changes via `onChange` callabck.
 */

var Dropdown = (function(_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(
      this,
      (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props)
    );

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [
    {
      key: "handleChange",
      value: function handleChange(event) {
        event.preventDefault();
        this.props.onChange(event.target.value);
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          value = _props.value,
          disabled = _props.disabled,
          options = _props.options,
          placeholder = _props.placeholder;

        return React.createElement(
          Select,
          {
            value: value,
            disabled: disabled || options.length === 0,
            onChange: this.handleChange
          },
          options
            .map(function(option) {
              return option.key;
            })
            .indexOf(value) < 0 &&
            React.createElement(
              "option",
              { value: value, key: value, disabled: true, hidden: true },
              placeholder
            ),
          options.map(function(option) {
            return React.createElement(
              "option",
              { value: option.key, key: option.key },
              option.value
            );
          })
        );
      }
    }
  ]);

  return Dropdown;
})(Component);

Dropdown.propTypes = {
  /** Selected option needs to correspond to `key` of option. */
  value: PropTypes.string,
  /** Enable or disable component. */
  disabled: PropTypes.bool,
  /** Selectable options. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  /** Display placeholder if no or invalid option is selected. */
  placeholder: PropTypes.string,
  /** Callback when selection changes. */
  onChange: PropTypes.func.isRequired
};
Dropdown.defaultProps = {
  value: "",
  disabled: false,
  placeholder: "Select..."
};

export default Dropdown;
