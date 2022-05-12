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
import { Box, Flex, Panel, PanelHeader } from "rebass";
import Dropdown from "../Dropdown";
import Tags from "../Tags/Tags";

/**
 * This component allows managing a selection of values. Values from the
 * dropdown can be added to the selection and selected values can be clicked to
 * remove them from the selection. This component does not manage state. Use
 * callbacks to hook the component up to a parent component that manages state.
 */

var ValuePicker = (function(_Component) {
  _inherits(ValuePicker, _Component);

  function ValuePicker(props) {
    _classCallCheck(this, ValuePicker);

    var _this = _possibleConstructorReturn(
      this,
      (ValuePicker.__proto__ || Object.getPrototypeOf(ValuePicker)).call(
        this,
        props
      )
    );

    _this.handleAddValue = _this.handleAddValue.bind(_this);
    _this.handleRemoveValue = _this.handleRemoveValue.bind(_this);
    return _this;
  }

  _createClass(ValuePicker, [
    {
      key: "handleAddValue",
      value: function handleAddValue(key) {
        this.props.onAddValue(key);
      }
    },
    {
      key: "handleRemoveValue",
      value: function handleRemoveValue(key) {
        this.props.onRemoveValue(key);
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          title = _props.title,
          disabled = _props.disabled,
          selectable = _props.selectable,
          selected = _props.selected;

        return React.createElement(
          Panel,
          null,
          React.createElement(PanelHeader, null, title),
          React.createElement(
            Flex,
            { align: ["stretch", "center"], direction: ["column", "row"] },
            React.createElement(
              Box,
              { p: [2, 3], flex: ["none", "1 4rem"] },
              React.createElement(Dropdown, {
                disabled: disabled,
                options: selectable,
                onChange: this.handleAddValue,
                placeholder: "Add value..."
              })
            ),
            React.createElement(
              Box,
              { p: [1, 2], flex: 3 },
              React.createElement(Tags, {
                disabled: disabled,
                tags: selected,
                onClick: this.handleRemoveValue
              })
            )
          )
        );
      }
    }
  ]);

  return ValuePicker;
})(Component);

ValuePicker.propTypes = {
  /** Component title. */
  title: PropTypes.string.isRequired,
  /** Enable or disable component. */
  disabled: PropTypes.bool,
  /** Selectable values (can be empty array). */
  selectable: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  /** Selected values (can be empty array). */
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  /** Callback fires when selecting a value in dropdown. */
  onAddValue: PropTypes.func.isRequired,
  /** Callback fires when clicking on a selected value. */
  onRemoveValue: PropTypes.func.isRequired
};
ValuePicker.defaultProps = {
  disabled: false
};

export default ValuePicker;
