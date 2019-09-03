import React from "react";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";
import ArticleDetail from "./ArticleDetail";
import { Article } from "./styles";

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

const newProps = [
  {
    title: "text 1",
    body: "We will mesh the buzzword. Our feature set is unparallele",
    metadata: {
      publishedAt: 1492004832000,
      authorId: 2
    }
  },
  {
    title: "text 2",
    body: "There's success without effort",
    metadata: {
      publishedAt: 1431006432000,
      authorId: 1
    }
  },
  {
    title: "text 3",
    body: "Get busy living or get busy dying",
    metadata: {
      publishedAt: 1431006432000,
      authorId: 2
    }
  },
  {
    title: "text 4",
    body: "Focus on the long term and avoid all the noises from mediocre world",
    metadata: {
      publishedAt: 1431006432000,
      authorId: 2
    }
  }
];
describe("Content", () => {
  it("should match snapshot", () => {
    expect(shallow(<ArticleDetail {...props} />)).toMatchSnapshot();
  });
  it("should render new content after setState for articlesDisplayed is called", () => {
    spy(ArticleDetail.prototype, "componentDidMount");
    const wrapper = mount(<ArticleDetail {...props} />);
    wrapper.setState({ articlesDisplayed: newProps }, () => {
      wrapper.update();
      expect(ArticleDetail.prototype.componentDidMount.calledOnce);
      expect(wrapper.find(Article).length).toBe(4);
    });
  });
});
