import MovieList from "./MovieList";

import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";
import SearchActions from "../../../actions/Search";
import contentActions from "../../../actions/Movies";

export default connect(
  ({ displayMovieDetails, ClearFilterOnSearch }) => ({
    displayMovieDetails,
    ClearFilterOnSearch
  }),
  combineActions(contentActions, SearchActions)
)(MovieList);
