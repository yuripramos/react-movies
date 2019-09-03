import Content from "./Content";

import { connect } from "redux-zero/react";

import contentActions from "../../actions/Articles";

export default connect(
  ({ articlesList, authorsList, getAuthors, getArticles }) => ({
    articlesList,
    authorsList,
    getAuthors,
    getArticles
  }),
  contentActions
)(Content);
