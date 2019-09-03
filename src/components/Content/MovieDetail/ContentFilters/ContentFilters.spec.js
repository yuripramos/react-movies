import React from "react";
import { mount } from "enzyme";
import ContentFilters from "./ContentFilters";

const props = {
  onFilter: jest.fn(),
  defaultFilter: {
    type: "author",
    author: "no name"
  }
};

describe("Dashboard Filters component", () => {
  it("should match snapshot", () => {
    expect(mount(<ContentFilters {...props} />)).toMatchSnapshot();
  });
});
