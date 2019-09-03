import React from "react";
import { shallow } from "enzyme";
import ArticleList from "./ArticleList";

const props = {
  onFilter: jest.fn(),
  defaultFilter: {
    type: "author",
    author: "name 1"
  }
};

describe("ArticleList component", () => {
  it("should match snapshot", () => {
    expect(shallow(<ArticleList {...props} />)).toMatchSnapshot();
  });
});
