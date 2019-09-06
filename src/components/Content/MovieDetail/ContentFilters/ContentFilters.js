import React, { Fragment, Component } from "react";
import { func, object, array } from "prop-types";

import Filter from "../../../common/Filter";
import Dropdown from "../../../common/Dropdown";
import { Label, Wrapper, FormItem } from "./styles";
import Icon from "../../../common/Icon";
import { yellow } from "../../../../styles/settings";

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
  }

  setActiveRating(rating) {
    this.setState({
      rating
    });
  }
  render() {
    const { onFilter, defaultFilter } = this.props;
    const { rating } = this.state;
    return (
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
                        name: "popularity",
                        value: "popularity"
                      }
                    ]}
                    value={state && state.filter["type"]}
                    width={100}
                    noEmptySelection
                  />
                </FormItem>
                {state && state.filter["type"] === "popularity" && (
                  <FormItem>
                    <Label>Rating</Label>
                    <div onClick={() => this.setActiveRating(1)}>
                      <Icon
                        name="Star"
                        width="15px"
                        height="15px"
                        color={rating >= 1 && yellow}
                      />
                    </div>
                    <div onClick={() => this.setActiveRating(2)}>
                      <Icon
                        name="Star"
                        width="15px"
                        height="15px"
                        color={rating >= 2 && yellow}
                      />
                    </div>
                    <div onClick={() => this.setActiveRating(3)}>
                      <Icon
                        name="Star"
                        width="15px"
                        height="15px"
                        color={rating >= 3 && yellow}
                      />
                    </div>
                    <div onClick={() => this.setActiveRating(4)}>
                      <Icon
                        name="Star"
                        width="15px"
                        height="15px"
                        color={rating >= 4 && yellow}
                      />
                    </div>
                    <div onClick={() => this.setActiveRating(5)}>
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
        )
      </Wrapper>
    );
  }
}

ContentFilters.propTypes = {
  onFilter: func.isRequired,
  defaultFilter: object,
  moviesList: array
};

export default ContentFilters;
