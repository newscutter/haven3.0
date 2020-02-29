// Library Imports
import React, { Component, Suspense, lazy } from "react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { history } from "../../utility/history.js";

// Relative Imports
import { Route } from "react-router";
import Status from "../../shared/components/_layout/status";
import Loader from "../../shared/components/loader";
import PublicRoutesWeb from "./routes/public";
const PrivateRoutesWeb = lazy(() => import("./routes/private"));

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <HashRouter history={history}>
          <Status />
          <PublicRoutesWeb />
          <Suspense fallback={<Loader />}>
            <Route path="/wallet" component={PrivateRoutesWeb} />
          </Suspense>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export const mapStateToProps = state => ({
  theme: state.theme
});

export const AppWeb = connect(mapStateToProps)(App);
