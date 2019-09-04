import MovieList from "./MovieList";

import { connect } from "redux-zero/react";

import contentActions from "../../../actions/Movies";

export default connect(
  ({ displayMovieDetails }) => ({
    displayMovieDetails
  }),
  contentActions
)(MovieList);
