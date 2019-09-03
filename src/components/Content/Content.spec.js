import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";
import ArticleDetail from "./ArticleDetail";

const props = {
  getAuthors: jest.fn(),
  getArticles: jest.fn(),
  authorsList: [
    {
      name: "Jemma Chadwick",
      id: 1
    },
    {
      name: "Nicholas Jordan",
      id: 2
    }
  ],
  articlesList: [
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
  ]
};

describe("Content", () => {
  it("should match snapshot", () => {
    expect(shallow(<Content {...props} />)).toMatchSnapshot();
  });
  it("should render ArticlesDetail", () => {
    expect(shallow(<Content {...props} />).find(ArticleDetail).length).toBe(1);
  });
});
