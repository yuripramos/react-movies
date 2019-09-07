import React, { Component, Fragment } from "react";

import { Container } from "../../styles/grid";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { arrayOf, object, func, oneOfType, array } from "prop-types";
import Hide from "../common/Hide";
import { isResponsive } from "../../utils/getResolution";

import { ContentWrapper, Column } from "./styles";

class Content extends Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
  }

  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  render() {
    const { moviesList, movieDisplayed } = this.props;
    const isFilled = moviesList && moviesList.length > 0;
    return (
      <Container>
        <ContentWrapper>
          {isFilled && (
            <Fragment>
              <Column width={isResponsive() ? 0 : 30}>
                <Hide below="lg">
                  <MovieList
                    moviesList={moviesList}
                    // articlesList={articlesList}
                  />
                </Hide>
              </Column>
              <Column width={isResponsive() ? 100 : 70}>
                <MovieDetail
                  moviesList={moviesList}
                  movieDisplayed={movieDisplayed}
                  // articlesList={articlesList}
                  innerRef={this.innerRef}
                />
              </Column>
            </Fragment>
          )}
        </ContentWrapper>
      </Container>
    );
  }
}

Content.defaultProps = {};

Content.propTypes = {
  getMovies: func,
  movieDisplayed: oneOfType([object, array]),
  moviesList: arrayOf(object)
};

export default Content;
