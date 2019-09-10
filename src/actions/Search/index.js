import * as CONTENT_API from "../../services/Content";

export default () => ({
  handleUserSearch: (state, e) => {
    const { name, value } = e.target;
    return {
      searchData: {
        ...state.searchData,
        error: null,
        [name]: value
      }
    };
  },
  getQueryListBySearch: async (state, query) => {
    const moviesResponse = await CONTENT_API.getQueryMovies(query);
    return {
      movieDisplayed: [...moviesResponse.results],
      isMovieDetailAction: false
    };
  },
  ClearSearchBar: () => {
    return {
      searchData: {},
      isMovieDetailAction: false
    };
  },
  ClearFilterOnSearch: () => {
    return {
      rating: 0
    };
  },
  setActiveRating: (state, rating) => {
    return {
      rating: state.rating === rating ? 0 : rating
    };
  }
});
