import React, { Component } from "react";
import history from "./services/history";
import { Provider } from "redux-zero/react";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import Routes from "./components/Routes";
import { rem } from "./styles/tools";
import store from "./utils/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider
            theme={{
              space: [0, rem(5), rem(10), rem(15), rem(20)],
              breakpoints: [rem(767), rem(992), rem(1179)]
            }}
          >
            <div className="App">
              <Routes />
            </div>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
