import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../common/NotFound";
import Content from "../Content";

import Layout from "../common/Layout";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route>
            <Switch>
              <Route exact path="/" component={Content} />
              <Route exact path="/movies" component={NotFound} />
              <Route exact path="/series" component={NotFound} />
              <Route exact path="/categories" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
