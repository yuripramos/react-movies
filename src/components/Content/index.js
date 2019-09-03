import Content from "./Content";

import { connect } from "redux-zero/react";

import contentActions from "../../actions/Movies";

export default connect(
  ({ moviesList, authorsList, getMovies, getArticles }) => ({
    moviesList,
    authorsList,
    getMovies,
    getArticles
  }),
  contentActions
)(Content);
