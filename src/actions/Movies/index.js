import * as CONTENT_API from "../../services/Content";

export default () => ({
  getMovies: async () => {
    const moviesResponse = await CONTENT_API.getMovies();
    return {
      moviesList: moviesResponse
    };
  },
  getArticles: async () => {
    const articlesResponse = await CONTENT_API.getArticles();
    return {
      articlesList: articlesResponse
    };
  }
});
