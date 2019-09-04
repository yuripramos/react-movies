import React, { Component } from "react";
import { array, oneOfType, object } from "prop-types";
import ContentFilters from "./ContentFilters";
import { filterContentByType } from "../../../utils/filters";

import {
  Wrapper,
  Title,
  Content,
  FooterInfo,
  FooterWrapper,
  Article
} from "./styles";

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        type: "author",
        range: 5
      },
      isFilled: false,
      moviesMap: []
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

  componentDidMount() {
    const { movieDisplayed } = this.props;

    console.log("movie did mount", movieDisplayed);
    const isFilled = movieDisplayed && movieDisplayed.length > 0;
    isFilled &&
      this.setState({
        isFilled: true,
        moviesMap: movieDisplayed
      });
  }

  render() {
    // const { movieDisplayed } = this.props;
    const { filter, moviesMap, isFilled } = this.state;
    return (
      <Wrapper large>
        <ContentFilters
          // moviesList={moviesList}
          onFilter={this.onFilter}
          defaultFilter={filter}
        />
        {!!isFilled ? (
          moviesMap.map((e, i) => (
            <Article key={`article-${i}`} last={i + 1 === moviesMap.length}>
              <Title>{e.title}</Title>
              <Content>{e.body}</Content>
              <FooterWrapper>
                <FooterInfo>Release Date: mm/dd/yyyy</FooterInfo>
                <FooterInfo>Author : namenameanme</FooterInfo>
              </FooterWrapper>
            </Article>
          ))
        ) : (
          <span>
            No content to display, please refresh the page and try again
          </span>
        )}
      </Wrapper>
    );
  }
}

export default MovieDetail;

MovieDetail.propTypes = {
  moviesList: array,
  movieDisplayed: oneOfType([object, array])
};
