import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input component", () => {
  it("should match snapshot", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with label", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      label: "label"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with success validation", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: true
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with icon", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: true,
      icon: "Icon"
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with error validation", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: false
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with no validation", () => {
    const props = {
      onChange: () => {},
      type: "submit",
      name: "input",
      placeholder: "My input",
      valid: null
    };
    expect(shallow(<Input {...props} />)).toMatchSnapshot();
  });
});
