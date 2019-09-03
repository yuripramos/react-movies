import Header from "./Header";
import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";

import articlesActions from "../../actions/Articles";

export default connect(
  ({ getAuthors, getArticles, authorsList }) => ({
    getAuthors,
    getArticles,
    authorsList
  }),
  articlesActions
)(withRouter(Header));
