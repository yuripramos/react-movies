import React, { Component } from "react";
import { object, func, shape, string, any } from "prop-types";
import Icon from "../Icon";
import Button from "../Button";

import {
  FilterWrapper,
  FilterIcon,
  FilterLabel,
  FilterGroup,
  FilterShowHide,
  FilterContentMobileWrapper,
  FilterDescription,
  FilterContent
} from "./styles";

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleShowHide = this.handleShowHide.bind(this);
    this.onChangeFilters = this.onChangeFilters.bind(this);

    this.state = {
      isShown: false,
      filter: this.props.defaultFilterState || {}
    };
  }

  handleShowHide() {
    this.setState({
      isShown: !this.state.isShown
    });
  }

  onChangeFilters(val, name) {
    const stateNewProp = name;
    const stateNewValue = val;

    this.setState({
      filter: {
        ...this.state.filter,
        [stateNewProp]: stateNewValue
      }
    });
  }

  handleFormSubmit(e) {
    const { filter } = this.state;
    const { onFilter } = this.props;

    e.preventDefault();
    this.handleShowHide();

    onFilter(filter);
  }

  render() {
    const {
      mobileFilterDescriptionRenderer,
      children,
      componentLabels,
      setMovieDetailAction
    } = this.props;
    const { isShown, filter } = this.state;
    return (
      <FilterWrapper onSubmit={this.handleFormSubmit} isShown={isShown}>
        <FilterGroup onClick={this.handleShowHide}>
          <FilterIcon hasFilter={filter !== {}}>
            <Icon name="Filter" />
          </FilterIcon>
          <FilterLabel>
            {componentLabels.filterLabel}:
            <FilterDescription>
              {mobileFilterDescriptionRenderer &&
                mobileFilterDescriptionRenderer()}
            </FilterDescription>
          </FilterLabel>
          <FilterShowHide isShown={isShown}>
            <Icon name="Arrow" />
          </FilterShowHide>
        </FilterGroup>
        {/* if in mobile context wrapper init */}
        <FilterContentMobileWrapper isShown={isShown}>
          {/* if in mobile context wrapper end */}

          <FilterContent>
            {children(this.onChangeFilters, this.state)}
          </FilterContent>

          <Button
            isCallToAction
            small
            width={110}
            type="submit"
            onClick={() => setMovieDetailAction()}
          >
            {componentLabels.filterButton}
          </Button>
          {/* if in mobile context wrapper init */}
        </FilterContentMobileWrapper>
        {/* if in mobile context wrapper end */}
      </FilterWrapper>
    );
  }
}

Filter.propTypes = {
  onFilter: func.isRequired,
  children: any.isRequired,
  mobileFilterDescriptionRenderer: func,
  defaultFilterState: object,
  componentLabels: shape({
    filterButton: string,
    filterLabel: string
  }).isRequired,
  setMovieDetailAction: func
};

export default Filter;
