import React from "react";
import { render, Simulate } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("options prop maps to options", () => {
    const { container, getByText } = render(
      <Dropdown
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={jest.fn()}
      />
    );
    expect(container.querySelectorAll("select").length).toEqual(1);
    expect(container.querySelectorAll("option").length).toEqual(4);

    const dummyOption = getByText("Select...");
    expect(dummyOption).toBeInstanceOf(HTMLOptionElement);
    expect(dummyOption).toHaveAttribute("value", "");

    const redOption = getByText("Red");
    expect(redOption).toBeInstanceOf(HTMLOptionElement);
    expect(redOption).toHaveAttribute("value", "red");

    const greenOption = getByText("Green");
    expect(greenOption).toBeInstanceOf(HTMLOptionElement);
    expect(greenOption).toHaveAttribute("value", "green");

    const blueOption = getByText("Blue");
    expect(blueOption).toBeInstanceOf(HTMLOptionElement);
    expect(blueOption).toHaveAttribute("value", "blue");
  });

  test("valid value", () => {
    const { container, getByText } = render(
      <Dropdown
        value="blue"
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={jest.fn()}
      />
    );
    // Select is not disabled.
    expect(container.querySelector("select")).not.toHaveAttribute("disabled");
    // Blue option is selected initially.
    // This fails: expect(getByText("Blue")).toHaveAttribute("selected");
    // Not clear why since selected attribute is present.
    expect(getByText("Blue").selected).toEqual(true);
  });

  test("invalid value", () => {
    const { container, getByText } = render(
      <Dropdown
        value="black"
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={jest.fn()}
      />
    );
    // Select is not disabled.
    expect(container.querySelector("select")).not.toHaveAttribute("disabled");
    // Dummy option is selected initially.
    // This fails: expect(getByText("Select...")).toHaveAttribute("selected");
    // Not clear why since selected attribute is present.
    expect(getByText("Select...").selected).toEqual(true);
  });

  test("no value", () => {
    const { container, getByText } = render(
      <Dropdown
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={jest.fn()}
      />
    );
    // Select is not disabled.
    expect(container.querySelector("select")).not.toHaveAttribute("disabled");
    // Dummy option is selected initially.
    // This fails: expect(getByText("Select...")).toHaveAttribute("selected");
    // Not clear why since selected attribute is present.
    expect(getByText("Select...").selected).toEqual(true);
  });

  test("disabled prop", () => {
    const { container } = render(
      <Dropdown
        value="blue"
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={jest.fn()}
        disabled
      />
    );
    expect(container.querySelector("select")).toHaveAttribute("disabled");
  });

  test("changing selected option triggers onChange callback", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Dropdown
        value="blue"
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={onChange}
      />
    );
    Simulate.change(container.querySelector("select"), {
      target: { value: "green" }
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("green");
  });

  test("custom placeholder", () => {
    const { queryByText } = render(
      <Dropdown
        options={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" }
        ]}
        onChange={jest.fn()}
        placeholder="Make your selection..."
      />
    );
    expect(queryByText("Make your selection...")).toBeInTheDOM();
  });

  test("empty options", () => {
    const { container, getByText } = render(
      <Dropdown options={[]} onChange={jest.fn()} />
    );
    // Select is not disabled.
    expect(container.querySelector("select")).toHaveAttribute("disabled");
    // Dummy option is selected initially.
    // This fails: expect(getByText("Select...")).toHaveAttribute("selected");
    // Not clear why since selected attribute is present.
    expect(getByText("Select...").selected).toEqual(true);
  });
});
