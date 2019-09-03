import * as CONTENT_API from "../../services/Content";

export default () => ({
  getAuthors: async () => {
    const authorsResponse = await CONTENT_API.getAuthors();
    return {
      authorsList: authorsResponse
    };
  },
  getArticles: async () => {
    const articlesResponse = await CONTENT_API.getArticles();
    return {
      articlesList: articlesResponse
    };
  }
});
