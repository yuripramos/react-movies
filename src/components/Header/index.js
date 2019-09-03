import Header from "./Header";
import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";

import moviesActions from "../../actions/Movies";

export default connect(
  ({ getAuthors, getArticles, authorsList }) => ({
    getAuthors,
    getArticles,
    authorsList
  }),
  moviesActions
)(withRouter(Header));
