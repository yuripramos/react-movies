import actions from "./index";
jest.mock("../../services/Content");

const {
  getAuthors: getAuthorsAPI,
  getArticles: getArticlesAPI
} = require("../../services/Content");

const getAuthorsAPIResponse = [
  {
    name: "Jemma Chadwick",
    id: 1
  },
  {
    name: "Nicholas Jordan",
    id: 2
  }
];

const getArticlesAPIResponse = [
  {
    title: "AssCo has revamped the theory of versioning",
    body: "We will mesh the buzzword. Our feature set is unparallele",
    metadata: {
      publishedAt: 1492004832000,
      authorId: 2
    }
  },
  {
    title: "Matleh",
    body: "she is no take arms and to take arms.",
    metadata: {
      publishedAt: 1431006432000,
      authorId: 1
    }
  }
];

describe("Articles Actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(Object.keys(actions())).toEqual(["getAuthors", "getArticles"]);
  });

  describe("getAuthors", () => {
    it("Should getAuthors with success", async () => {
      getAuthorsAPI.mockImplementation(() =>
        Promise.resolve({
          data: getAuthorsAPIResponse
        })
      );
      const { getAuthors } = actions();

      const response = await getAuthors();
      expect(response).toEqual({
        authorsList: { data: getAuthorsAPIResponse }
      });
    });
  });
  describe("getArticles", () => {
    it("Should getArticles with success", async () => {
      getArticlesAPI.mockImplementation(() =>
        Promise.resolve({
          data: getArticlesAPIResponse
        })
      );
      const { getArticles } = actions();

      const response = await getArticles();
      expect(response).toEqual({
        articlesList: { data: getArticlesAPIResponse }
      });
    });
  });
});
