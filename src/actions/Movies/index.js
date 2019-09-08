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
