import React from "react";
import { shallow, mount } from "enzyme";
import Filter from "./Filter";

const e = {
  target: {
    name: "mock",
    value: 15
  },
  preventDefault: jest.fn()
};

const props = {
  mobileFilterDescriptionRenderer: jest.fn(),
  onFilter: jest.fn(),
  componentLabels: {
    filterButton: "mock",
    filterLabel: "mock_2"
  }
};

describe("Filter component", () => {
  let shallowComponent;
  let spyStateChange;

  beforeEach(() => {
    shallowComponent = shallow(<Filter {...props}>{() => "mock"}</Filter>);
    spyStateChange = jest.spyOn(shallowComponent.instance(), "setState");
  });

  it("should match snapshot", () => {
    expect(mount(<Filter {...props}>{() => "mock"}</Filter>)).toMatchSnapshot();
  });

  it("should show filter content in mobile context", () => {
    shallowComponent.instance().handleShowHide();
    expect(spyStateChange).toBeCalledWith({
      isShown: true
    });
  });

  it("should change filter state after change any filter field context", () => {
    shallowComponent.instance().onChangeFilters(e);
    expect(spyStateChange).toBeCalledWith({
      filter: {
        mock: 15
      }
    });
  });

  it("should submit form filter", () => {
    const spyHandleShowHide = jest.spyOn(
      shallowComponent.instance(),
      "handleShowHide"
    );

    shallowComponent.instance().handleFormSubmit(e);
    expect(spyHandleShowHide).toHaveBeenCalled();
    expect(e.preventDefault).toHaveBeenCalled();
    expect(props.onFilter).toHaveBeenCalled();
  });
});
