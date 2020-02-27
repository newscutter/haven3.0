// Library Imports
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

// Relative Imports

import { AssetsDesktop } from "../../pages/_wallet/assets";
import { DetailsDesktop } from "../../pages/_wallet/details";
import { ExchangePage } from "../../../../shared/pages/_wallet/exchange";
import { TransferDesktop } from "../../pages/_wallet/transfer";
import { SettingsDesktop } from "../../pages/_wallet/settings";
import { connect } from "react-redux";
import { selectIsLoggedIn } from "../../reducers/walletSession";
import { refresh, updateApp } from "../../actions";
import Page from "../../../../shared/components/_layout/page";
import Menu from "../../../../shared/components/_layout/menu";

/**
 *root component for private wallet
 */
class PrivateRoutes extends Component {
  componentDidMount() {
    this.props.refreshApp();
    this.addTimer();
  }

  addTimer() {
    this.updateTimer = setInterval(this.props.updateApp, 15000);
  }

  removeTimer() {
    clearInterval(this.updateTimer);
    this.updateTimer = null;
  }

  componentWillUnmount() {
    this.removeTimer();
  }

  render() {
    const { match } = this.props;

    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Page>
          <Menu />
          <Route path={`${match.url}/assets`} exact component={AssetsDesktop} />
          <Route
            path={`${match.url}/assets/:id`}
            exact
            component={DetailsDesktop}
          />
          <Route
            path={`${match.url}/transfer`}
            exact
            component={TransferDesktop}
          />
          <Route
            path={`${match.url}/settings`}
            exact
            component={SettingsDesktop}
          />
          <Route
            path={`${match.url}/exchange`}
            exact
            component={ExchangePage}
          />
        </Page>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

export const PrivateRoutesDesktop = connect(mapStateToProps, {
  refreshApp: refresh,
  updateApp
})(PrivateRoutes);
