import * as CONTENT_API from "../../services/Content";
import { sortByPopularity } from "../../utils/filters";

export default () => ({
  getMovies: async () => {
    const moviesResponse = await CONTENT_API.getMovies();
    const moviesByPop = sortByPopularity(moviesResponse.results);
    return {
      moviesList: moviesByPop
    };
  },
  displayMovieDetails: async (state, id, bool) => {
    const movie =
      state.movieDisplayed.length > 1
        ? state.movieDisplayed.find(movie => movie.id === id)
        : state.moviesList.find(movie => movie.id === id);
    return {
      movieDisplayed: [movie],
      isMovieDetailAction: bool
    };
  },
  filteringResultsByRating: (state, array) => {
    return {
      movieDisplayed: array,
      rating: 0
    };
  },
  setMovieDetailAction: () => {
    return {
      isMovieDetailAction: false
    };
  }
});
