import React, { Component } from "react";
import { array, oneOfType, object } from "prop-types";
import ContentFilters from "./ContentFilters";
import SearchBar from "../../common/SearchBar";
import { filterContentByType } from "../../../utils/filters";

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
        type: "popularity",
        range: 5
      }
      // isFilled: false
    };
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(filter) {
    const { moviesList } = this.props;
    this.setState({
      filter,
      articlesDisplayed: filterContentByType(
        moviesList,
        filter.range,
        filter.type
      )
    });
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
    console.log("movies", movieDisplayed);
    return (
      <Wrapper large>
        <ContentFilters
          // moviesList={moviesList}
          onFilter={this.onFilter}
          defaultFilter={filter}
        />
        <SearchBar />
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
  movieDisplayed: oneOfType([object, array])
};
