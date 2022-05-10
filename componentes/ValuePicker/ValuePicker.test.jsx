import React from "react";
import { render, Simulate } from "react-testing-library";
import "dom-testing-library/extend-expect";
import ValuePicker from "./ValuePicker";

describe("ValuePicker", () => {
  test("non-empty selectable and non-empty selected", () => {
    const { container, getByText } = render(
      <ValuePicker
        title="Age"
        selectable={[
          { key: "red", value: "Red" },
          { key: "yellow", value: "Yellow" }
        ]}
        selected={[
          { key: "blue", value: "Blue" },
          { key: "green", value: "Green" },
          { key: "black", value: "Black" }
        ]}
        onAddValue={jest.fn()}
        onRemoveValue={jest.fn()}
      />
    );

    expect(container.querySelectorAll("select").length).toEqual(1);

    expect(container.querySelectorAll("option").length).toEqual(3);

    const defaultOption = getByText("Add value...");
    expect(defaultOption).toBeInstanceOf(HTMLOptionElement);
    expect(defaultOption).toHaveAttribute("disabled");
    expect(defaultOption).toHaveAttribute("hidden");
    expect(defaultOption).toHaveAttribute("value", "");

    const redOption = getByText("Red");
    expect(redOption).toBeInstanceOf(HTMLOptionElement);
    expect(redOption).toHaveAttribute("value", "red");

    const yellowOption = getByText("Yellow");
    expect(yellowOption).toBeInstanceOf(HTMLOptionElement);
    expect(yellowOption).toHaveAttribute("value", "yellow");

    expect(container.querySelectorAll("button").length).toEqual(3);

    const blueButton = getByText("Blue");
    expect(blueButton).toBeInstanceOf(HTMLButtonElement);
    expect(blueButton).toHaveAttribute("value", "blue");

    const greenButton = getByText("Green");
    expect(greenButton).toBeInstanceOf(HTMLButtonElement);
    expect(greenButton).toHaveAttribute("value", "green");

    const blackButton = getByText("Black");
    expect(blackButton).toBeInstanceOf(HTMLButtonElement);
    expect(blackButton).toHaveAttribute("value", "black");
  });

  test("non-empty selectable and empty selected", () => {
    const { container } = render(
      <ValuePicker
        title="Age"
        selectable={[
          { key: "red", value: "Red" },
          { key: "yellow", value: "Yellow" }
        ]}
        selected={[]}
        onAddValue={jest.fn()}
        onRemoveValue={jest.fn()}
      />
    );
    expect(container.querySelectorAll("option").length).toEqual(3);
    expect(container.querySelectorAll("button").length).toEqual(0);
  });

  test("empty selectable and non-empty selected", () => {
    const { container } = render(
      <ValuePicker
        title="Age"
        selectable={[]}
        selected={[
          { key: "blue", value: "Blue" },
          { key: "green", value: "Green" },
          { key: "black", value: "Black" }
        ]}
        onAddValue={jest.fn()}
        onRemoveValue={jest.fn()}
      />
    );

    const select = container.querySelector("select");
    expect(select).toHaveAttribute("disabled");

    expect(container.querySelectorAll("option").length).toEqual(1);
    expect(container.querySelectorAll("button").length).toEqual(3);
  });

  test("disabled prop", () => {
    const { container, getByText } = render(
      <ValuePicker
        disabled={true}
        title="Age"
        selectable={[
          { key: "red", value: "Red" },
          { key: "yellow", value: "Yellow" }
        ]}
        selected={[
          { key: "blue", value: "Blue" },
          { key: "green", value: "Green" },
          { key: "black", value: "Black" }
        ]}
        onAddValue={jest.fn()}
        onRemoveValue={jest.fn()}
      />
    );

    // Verify select is disabled.
    expect(container.querySelector("select")).toHaveAttribute("disabled");

    // Verify all buttons are disabled.
    expect(getByText("Blue")).toHaveAttribute("disabled");
    expect(getByText("Green")).toHaveAttribute("disabled");
    expect(getByText("Black")).toHaveAttribute("disabled");
  });

  test("selecting value from selectable fires onAddValue", () => {
    const onAddValue = jest.fn();
    const { container } = render(
      <ValuePicker
        title="Age"
        selectable={[
          { key: "red", value: "Red" },
          { key: "yellow", value: "Yellow" }
        ]}
        selected={[
          { key: "blue", value: "Blue" },
          { key: "green", value: "Green" },
          { key: "black", value: "Black" }
        ]}
        onAddValue={onAddValue}
        onRemoveValue={jest.fn()}
      />
    );
    Simulate.change(container.querySelector("select"), {
      target: { value: "red" }
    });
    expect(onAddValue).toHaveBeenCalledTimes(1);
    expect(onAddValue).toHaveBeenCalledWith("red");
  });

  test("clicking button from selected fires onRemoveValue", () => {
    const onRemoveValue = jest.fn();
    const { container } = render(
      <ValuePicker
        title="Age"
        selectable={[
          { key: "red", value: "Red" },
          { key: "yellow", value: "Yellow" }
        ]}
        selected={[
          { key: "blue", value: "Blue" },
          { key: "green", value: "Green" },
          { key: "black", value: "Black" }
        ]}
        onAddValue={jest.fn()}
        onRemoveValue={onRemoveValue}
      />
    );
    Simulate.click(container.querySelector('button[value="blue"]'));
    expect(onRemoveValue).toHaveBeenCalledTimes(1);
    expect(onRemoveValue).toHaveBeenCalledWith("blue");
  });
});
