import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

let props;

beforeEach(() => {
  props = {
    history: {
      push: jest.fn(),
      location: {
        pathname: ""
      }
    }
  };
});

describe("Header component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Header {...props} />)).toMatchSnapshot();
  });

  describe("onToggleMenu", () => {
    it("should update the state", () => {
      const instance = shallow(<Header {...props} />).instance();

      instance.onToggleMenu({ isOpen: true });

      expect(instance.state.menuOpen).toBe(true);
    });
  });

  describe("closeMenu", () => {
    it("should update the state", () => {
      const instance = shallow(<Header {...props} />).instance();

      instance.closeMenu();

      expect(instance.state.menuOpen).toBe(false);
    });
  });
});
