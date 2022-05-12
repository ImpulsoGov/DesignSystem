import React from "react";
import { render, Simulate } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Tags from "./Tags";

describe("Tags", () => {
  test("non-empty tags", () => {
    const { container, getByText } = render(
      <Tags
        tags={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" },
          { key: "yellow", value: "Yellow" },
          { key: "orange", value: "Orange" }
        ]}
        onClick={jest.fn()}
      />
    );

    expect(container.querySelectorAll("button").length).toEqual(5);

    const redTag = getByText("Red");
    expect(redTag).toBeInstanceOf(HTMLButtonElement);
    expect(redTag).toHaveAttribute("value", "red");
    expect(redTag).not.toHaveAttribute("disabled");

    const greenTag = getByText("Green");
    expect(greenTag).toBeInstanceOf(HTMLButtonElement);
    expect(greenTag).toHaveAttribute("value", "green");
    expect(greenTag).not.toHaveAttribute("disabled");

    const blueTag = getByText("Blue");
    expect(blueTag).toBeInstanceOf(HTMLButtonElement);
    expect(blueTag).toHaveAttribute("value", "blue");
    expect(blueTag).not.toHaveAttribute("disabled");

    const yellowTag = getByText("Yellow");
    expect(yellowTag).toBeInstanceOf(HTMLButtonElement);
    expect(yellowTag).toHaveAttribute("value", "yellow");
    expect(yellowTag).not.toHaveAttribute("disabled");

    const orangeTag = getByText("Orange");
    expect(orangeTag).toBeInstanceOf(HTMLButtonElement);
    expect(orangeTag).toHaveAttribute("value", "orange");
    expect(orangeTag).not.toHaveAttribute("disabled");
  });

  test("disabled prop", () => {
    const { getByText } = render(
      <Tags
        disabled
        tags={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" },
          { key: "yellow", value: "Yellow" },
          { key: "orange", value: "Orange" }
        ]}
        onClick={jest.fn()}
      />
    );
    expect(getByText("Red")).toHaveAttribute("disabled");
    expect(getByText("Green")).toHaveAttribute("disabled");
    expect(getByText("Blue")).toHaveAttribute("disabled");
    expect(getByText("Yellow")).toHaveAttribute("disabled");
    expect(getByText("Orange")).toHaveAttribute("disabled");
  });

  test("click on tag fires onClick callback", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Tags
        tags={[
          { key: "red", value: "Red" },
          { key: "green", value: "Green" },
          { key: "blue", value: "Blue" },
          { key: "yellow", value: "Yellow" },
          { key: "orange", value: "Orange" }
        ]}
        onClick={onClick}
      />
    );
    Simulate.click(getByText("Blue"));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("blue");
  });
});
