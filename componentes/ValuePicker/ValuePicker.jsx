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
class ValuePicker extends Component {
  static propTypes = {
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

  static defaultProps = {
    disabled: false
  };

  constructor(props) {
    super(props);
    this.handleAddValue = this.handleAddValue.bind(this);
    this.handleRemoveValue = this.handleRemoveValue.bind(this);
  }

  handleAddValue(key) {
    this.props.onAddValue(key);
  }

  handleRemoveValue(key) {
    this.props.onRemoveValue(key);
  }

  render() {
    const { title, disabled, selectable, selected } = this.props;
    return (
      <Panel>
        <PanelHeader>{title}</PanelHeader>
        <Flex align={["stretch", "center"]} direction={["column", "row"]}>
          <Box p={[2, 3]} flex={["none", "1 4rem"]}>
            <Dropdown
              disabled={disabled}
              options={selectable}
              onChange={this.handleAddValue}
              placeholder="Add value..."
            />
          </Box>
          <Box p={[1, 2]} flex={3}>
            <Tags
              disabled={disabled}
              tags={selected}
              onClick={this.handleRemoveValue}
            />
          </Box>
        </Flex>
      </Panel>
    );
  }
}

export default ValuePicker;
