import React, { Component, Fragment } from "react";

import { Container } from "../../styles/grid";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import { arrayOf, object, func } from "prop-types";
import Hide from "../common/Hide";
import { isResponsive } from "../../utils/getResolution";

import { ContentWrapper, Column } from "./styles";

class Content extends Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
  }

  componentDidMount() {
    const { getArticles, getAuthors } = this.props;
    getAuthors();
    getArticles();
  }

  render() {
    const { articlesList, authorsList } = this.props;
    const isFilled = articlesList && articlesList.length > 0;
    return (
      <Container>
        <ContentWrapper>
          {isFilled && (
            <Fragment>
              <Column width={isResponsive() ? 0 : 30}>
                <Hide below="lg">
                  <MovieList
                    authorsList={authorsList}
                    articlesList={articlesList}
                  />
                </Hide>
              </Column>
              <Column width={isResponsive() ? 100 : 70}>
                <MovieDetail
                  authorsList={authorsList}
                  articlesList={articlesList}
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
  getArticles: func,
  getAuthors: func,
  articlesList: arrayOf(object),
  authorsList: arrayOf(object)
};

export default Content;
