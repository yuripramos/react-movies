import * as CONTENT_API from "../../services/Content";

export default () => ({
  getMovies: async () => {
    const moviesResponse = await CONTENT_API.getMovies();
    return {
      moviesList: moviesResponse.results
    };
  },
  displayMovieDetails: async (state, id) => {
    console.log(state.moviesList);
    const movie = state.moviesList.find(movie => movie.id === id);
    console.log("movie", movie);
    return {
      movieDisplayed: movie
    };
  }
});
