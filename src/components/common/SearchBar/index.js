import SearchBar from "./SearchBar";

import { connect } from "redux-zero/react";

import searchActions from "../../../actions/Search";

export default connect(
  ({
    handleUserSearch,
    searchData,
    getQueryListBySearch,
    ClearSearchBar,
    ClearFilterOnSearch
  }) => ({
    handleUserSearch,
    searchData,
    getQueryListBySearch,
    ClearSearchBar,
    ClearFilterOnSearch
  }),
  searchActions
)(SearchBar);
