import Content from "./Content";

import { connect } from "redux-zero/react";

import contentActions from "../../actions/Movies";

export default connect(
  ({ moviesList, movieDisplayed, getMovies, getArticles }) => ({
    moviesList,
    movieDisplayed,
    getMovies,
    getArticles
  }),
  contentActions
)(Content);
