import MovieDetail from "./MovieDetail";

import { connect } from "redux-zero/react";

import contentActions from "../../../actions/Movies";

export default connect(
  ({
    filteringResultsByRating,
    displayMovieDetails,
    isMovieDetailAction,
    setMovieDetailAction
  }) => ({
    filteringResultsByRating,
    displayMovieDetails,
    isMovieDetailAction,
    setMovieDetailAction
  }),
  contentActions
)(MovieDetail);
