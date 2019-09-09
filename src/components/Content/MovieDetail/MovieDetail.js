import React, { Component } from "react";
import { array, oneOfType, object, func, bool } from "prop-types";
import { filterContentByRating } from "../../../utils/filters";
import { yellow } from "../../../styles/settings";
import { BASE_URL_IMG } from "../../../utils/constants";
import ContentFilters from "./ContentFilters";
import Icon from "../../common/Icon";
import moment from "moment";

import {
  Wrapper,
  Title,
  Content,
  FooterInfo,
  FooterWrapper,
  Movie,
  MainTitle,
  Image
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
    this.getRatingScore = this.getRatingScore.bind(this);
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

  getRatingScore(rating) {
    let arrStar = [];
    for (let i = 0; i < 5; i++) {
      arrStar.push(
        <Icon
          key={i}
          name="Star"
          width="15px"
          height="15px"
          color={i + 1 <= rating && yellow}
        />
      );
    }
    return arrStar;
  }

  render() {
    const { filter } = this.state;
    const {
      movieDisplayed,
      moviesList,
      displayMovieDetails,
      isMovieDetailAction
    } = this.props;
    const isFilled = movieDisplayed && movieDisplayed.length > 0;
    return (
      <Wrapper large>
        <ContentFilters onFilter={this.onFilter} defaultFilter={filter} />
        <MainTitle>MOVIES</MainTitle>
        {!!isFilled
          ? movieDisplayed.map((e, i) => (
              <Movie
                onClick={() => displayMovieDetails(e.id, true)}
                key={`movie-${i}`}
                last={i + 1 === movieDisplayed.length}
                detailed={isMovieDetailAction}
              >
                <Title>{e.original_title}</Title>
                <Image
                  src={`${BASE_URL_IMG}${e.poster_path}`}
                  detailed={isMovieDetailAction}
                />
                <Content detailed={isMovieDetailAction}>
                  {e.overview.length > 179 && !isMovieDetailAction
                    ? e.overview.substring(0, 180).concat("...")
                    : e.overview}
                  {isMovieDetailAction && e.overview}
                </Content>
                <FooterWrapper detailed={isMovieDetailAction}>
                  <FooterInfo>
                    Release Date: {moment(e.release_date).format("L")}
                  </FooterInfo>
                  <FooterInfo>
                    Score: {this.getRatingScore(parseInt(e.vote_average / 2))}
                  </FooterInfo>
                </FooterWrapper>
              </Movie>
            ))
          : moviesList.map((e, i) => (
              <Movie
                onClick={() => displayMovieDetails(e.id, true)}
                key={`movie-${i}`}
                last={i + 1 === movieDisplayed.length}
              >
                <Title>{e.original_title}</Title>
                <Image src={`${BASE_URL_IMG}${e.poster_path}`} />
                <Content>
                  {e.overview.length > 179
                    ? e.overview.substring(0, 180).concat("...")
                    : e.overview}
                </Content>
                <FooterWrapper>
                  <FooterInfo>
                    Release Date: {moment(e.release_date).format("L")}
                  </FooterInfo>
                  <FooterInfo>
                    Score: {this.getRatingScore(parseInt(e.vote_average / 2))}
                  </FooterInfo>
                </FooterWrapper>
              </Movie>
            ))}
      </Wrapper>
    );
  }
}

export default MovieDetail;

MovieDetail.propTypes = {
  moviesList: array,
  moviesMap: array,
  movieDisplayed: oneOfType([object, array]),
  filteringResultsByRating: func,
  displayMovieDetails: func,
  isMovieDetailAction: bool
};
