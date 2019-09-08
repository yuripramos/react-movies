import React, { Fragment, Component } from "react";
import { func, object, array } from "prop-types";

import Filter from "../../../common/Filter";
import Dropdown from "../../../common/Dropdown";
import { Label, Wrapper, FormItem } from "./styles";
import Icon from "../../../common/Icon";
import { yellow } from "../../../../styles/settings";
import SearchBar from "../../../common/SearchBar";

const componentLabels = {
  filterButton: "APPLY",
  filterLabel: "FILTER BY"
};

class ContentFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
    this.setActiveRating = this.setActiveRating.bind(this);
    this.ClearFilterOnSearch = this.ClearFilterOnSearch.bind(this);
  }

  setActiveRating(rating) {
    this.setState({
      rating
    });
  }
  ClearFilterOnSearch() {
    this.setState({
      rating: 0
    });
  }

  render() {
    const { onFilter, defaultFilter } = this.props;
    const { rating } = this.state;
    return (
      <Fragment>
        <SearchBar ClearFilterOnSearch={() => this.ClearFilterOnSearch()} />
        <Wrapper>
          <Filter
            onFilter={onFilter}
            defaultFilterState={defaultFilter}
            componentLabels={componentLabels}
          >
            {(changeFunc, state) => {
              return (
                <Fragment>
                  <FormItem>
                    <Label>TYPE</Label>
                    <Dropdown
                      onChange={changeFunc}
                      name="type"
                      list={[
                        {
                          name: "Popularity",
                          value: "Popularity"
                        },
                        {
                          name: "Rating",
                          value: "Rating"
                        }
                      ]}
                      value={state && state.filter["type"]}
                      width={140}
                      noEmptySelection
                    />
                  </FormItem>
                  {state && state.filter["type"] === "Rating" && (
                    <FormItem>
                      <Label>Rating</Label>
                      <div
                        onClick={() => {
                          this.setActiveRating(1);
                          changeFunc(1, "rating");
                        }}
                      >
                        <Icon
                          name="Star"
                          width="15px"
                          height="15px"
                          color={rating >= 1 && yellow}
                        />
                      </div>
                      <div
                        onClick={() => {
                          this.setActiveRating(2);
                          changeFunc(2, "rating");
                        }}
                      >
                        <Icon
                          name="Star"
                          width="15px"
                          height="15px"
                          color={rating >= 2 && yellow}
                        />
                      </div>
                      <div
                        onClick={() => {
                          this.setActiveRating(3);
                          changeFunc(3, "rating");
                        }}
                      >
                        <Icon
                          name="Star"
                          width="15px"
                          height="15px"
                          color={rating >= 3 && yellow}
                        />
                      </div>
                      <div
                        onClick={() => {
                          this.setActiveRating(4);
                          changeFunc(4, "rating");
                        }}
                      >
                        <Icon
                          name="Star"
                          width="15px"
                          height="15px"
                          color={rating >= 4 && yellow}
                        />
                      </div>
                      <div
                        onClick={() => {
                          this.setActiveRating(5);
                          changeFunc(5, "rating");
                        }}
                      >
                        <Icon
                          name="Star"
                          width="15px"
                          height="15px"
                          color={rating >= 5 && yellow}
                        />
                      </div>
                    </FormItem>
                  )}
                </Fragment>
              );
            }}
          </Filter>
        </Wrapper>
      </Fragment>
    );
  }
}

ContentFilters.propTypes = {
  onFilter: func.isRequired,
  defaultFilter: object,
  moviesList: array,
  ClearFilterOnSearch: func
};

export default ContentFilters;
