import * as CONTENT_API from "../../services/Content";

export default () => ({
  getMovies: async () => {
    const moviesResponse = await CONTENT_API.getMovies();
    return {
      moviesList: moviesResponse.results
    };
  },
  displayMovieDetails: async (state, id) => {
    const movie = state.moviesList.find(movie => movie.id === id);
    return {
      movieDisplayed: [movie]
    };
  },
  filteringResultsByRating: (state, array) => {
    return {
      movieDisplayed: array
    };
  }
});
