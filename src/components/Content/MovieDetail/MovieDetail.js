import React, { Component } from "react";
import { array } from "prop-types";
import moment from "moment";
import ContentFilters from "./ContentFilters";
import { findById, filterContentByType } from "../../../utils/filters";

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
      articlesDisplayed: []
    };
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(filter) {
    const { authorsList, articlesList } = this.props;
    this.setState({
      filter,
      articlesDisplayed: filterContentByType(
        authorsList,
        articlesList,
        filter.range,
        filter.type
      )
    });
  }

  componentDidMount() {
    const { authorsList, articlesList } = this.props;

    const isFilled = articlesList && authorsList && authorsList.length > 0;
    isFilled &&
      this.setState({
        articlesDisplayed: articlesList,
        isFilled: true
      });
  }

  render() {
    const { authorsList } = this.props;
    const { filter, articlesDisplayed, isFilled } = this.state;
    return (
      <Wrapper large>
        <ContentFilters
          authorsList={authorsList}
          onFilter={this.onFilter}
          defaultFilter={filter}
        />
        {!!isFilled ? (
          articlesDisplayed.map((e, i) => (
            <Article
              key={`article-${i}`}
              last={i + 1 === articlesDisplayed.length}
            >
              <Title>{e.title}</Title>
              <Content>{e.body}</Content>
              <FooterWrapper>
                <FooterInfo>
                  Published at: {moment(e.metadata.publishedAt).format("L")}
                </FooterInfo>
                <FooterInfo>
                  Author : {findById(authorsList, e.metadata.authorId).name}
                </FooterInfo>
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
  authorsList: array,
  articlesList: array
};
