import React, { Component } from "react";
import { array, oneOfType, object, func } from "prop-types";
import ContentFilters from "./ContentFilters";
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
    };
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(filter) {
    const { moviesList, movieDisplayed, filteringResultsByRating } = this.props;
    const movieArray =
      movieDisplayed && movieDisplayed.length > 0 ? movieDisplayed : moviesList;
    this.setState({
      filter
    });
    filteringResultsByRating(filterContentByRating(movieArray, filter.rating));
  }

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
        />
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
