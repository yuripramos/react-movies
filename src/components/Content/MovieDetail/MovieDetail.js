import React, { Component } from "react";
import { array, oneOfType, object, func } from "prop-types";
import ContentFilters from "./ContentFilters";
import SearchBar from "../../common/SearchBar";
import { filterContentByRating } from "../../../utils/filters";

import {
  Wrapper,
  Title,
  Content,
  FooterInfo,
  FooterWrapper,
  Spacer,
  Article
} from "./styles";

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        type: "Rating",
        rating: 5
      }
      // isFilled: false
    };
    this.onFilter = this.onFilter.bind(this);
    this.ClearFilterOnSearch = this.ClearFilterOnSearch.bind(this);
  }

  onFilter(filter) {
    const { moviesList, filteringResultsByRating } = this.props;
    this.setState({
      filter
    });
    filteringResultsByRating(filterContentByRating(moviesList, filter.rating));
  }

  ClearFilterOnSearch(bool) {
    console.log("called on searchbar submit");
    return bool;
  }
  // componentDidMount() {

  //   isFilled &&
  //     this.setState({
  //       isFilled: true
  //     });
  // }

  render() {
    const { filter } = this.state;
    const { movieDisplayed } = this.props;
    const isFilled = movieDisplayed && movieDisplayed.length > 0;
    return (
      <Wrapper large>
        <ContentFilters
          // moviesList={moviesList}
          onFilter={this.onFilter}
          defaultFilter={filter}
          ClearFilterOnSearch={this.ClearFilterOnSearch(false)}
        />
        <SearchBar ClearFilterOnSearch={this.ClearFilterOnSearch(true)} />
        {!!isFilled ? (
          movieDisplayed.map((e, i) => (
            <Article
              key={`article-${i}`}
              last={i + 1 === movieDisplayed.length}
            >
              <Title>{e.original_title}</Title>
              <Content>{e.overview}</Content>
              <FooterWrapper>
                <FooterInfo>Release Date: {e.release_date}</FooterInfo>
                <FooterInfo>Score: {e.vote_average}</FooterInfo>
              </FooterWrapper>
            </Article>
          ))
        ) : (
          <Spacer>
            No content to display, select some movie, search or filter
          </Spacer>
        )}
      </Wrapper>
    );
  }
}

export default MovieDetail;

MovieDetail.propTypes = {
  moviesList: array,
  moviesMap: array,
  movieDisplayed: oneOfType([object, array]),
  filteringResultsByRating: func
};
