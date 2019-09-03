import React from "react";
import { shallow } from "enzyme";

import SidebarMenu from "./SidebarMenu";

jest.mock("../../../utils/redirect");
const redirectMock = require("../../../utils/redirect").redirect;

const closeMenuMock = jest.fn();

const props = {
  currentLocation: "",
  closeMenu: closeMenuMock
};

describe("SidebarMenu component", () => {
  it("should match snapshot", () => {
    expect(shallow(<SidebarMenu {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot for desktop", () => {
    expect(shallow(<SidebarMenu {...props} desktop />)).toMatchSnapshot();
  });

  describe("redirect", () => {
    beforeEach(() => {
      const instance = shallow(<SidebarMenu {...props} />).instance();
      instance.redirectTo("/path");
    });

    it("should invoke closeMenu", () => {
      expect(closeMenuMock).toHaveBeenCalledWith();
    });

    it("should invoke redirect", () => {
      expect(redirectMock).toHaveBeenCalledWith("/path");
    });
  });

  describe("isActive", () => {
    it("should return true if currentLocation includes the path", () => {
      const instance = shallow(
        <SidebarMenu {...props} currentLocation={"/path"} />
      ).instance();
      expect(instance.isActive("path")).toBe(true);
    });

    it("should return false if currentLocation doesnt include the path", () => {
      const instance = shallow(<SidebarMenu {...props} />).instance();
      instance.isActive("lalalalala");
      expect(instance.isActive("path")).toBe(false);
    });
  });
});
