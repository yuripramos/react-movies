import ContentFilters from "./ContentFilters";

import { connect } from "redux-zero/react";

import searchActions from "../../../../actions/Search";

export default connect(
  ({ ClearFilterOnSearch, setActiveRating, rating }) => ({
    ClearFilterOnSearch,
    setActiveRating,
    rating
  }),
  searchActions
)(ContentFilters);
