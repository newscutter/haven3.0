// Library Imports
import React, { Component } from "react";

// Relative Imports

import Page from "../../../components/_layout/page";
import Accounts from "../../../components/_Account";
import Settings from "../../../components/_Settings";

class AssetsPage extends Component {
  state = {
    forexPriceFetched: false,
    action: "Default",
    ticker: "",
    page: "Accounts"
  };

  routing = (page: String) => {
    this.setState({ page: page });
  };

  render() {
    return (
      <Page>
        <Settings
          show={this.state.page === "Settings" ? "top: 0px" : "top: 100%"}
          close={() => this.routing("Accounts")}
        />
        <Accounts />
      </Page>
    );
  }
}

export const Assets = AssetsPage;
