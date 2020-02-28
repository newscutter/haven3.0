// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { getForex, getSimplePrice } from "../../../actions";

// Relative Imports
import token from "../../../../constants/assets.js";
import { NO_PRICE } from "shared/reducers/priceHistory";
import { calcValue, convertToMoney, convertToPrice } from "utility/utility";
import { Ticker } from "shared/reducers/types";
import { OFFSHORE_ENABLED } from "constants/env";
import { DesktopAppState } from "platforms/desktop/reducers";
import { XBalances } from "shared/reducers/xBalance";
import balances from "shared/components/_layout/balances";

import Page from "../../../components/_layout/page";
import Header from "../../../components/Header/Animated";
import Content from "../../../components/Content";
import Settings from "../../../components/_Settings";
import Account from "../../../components/_Account/index";
import Default from "../../../components/_Account/_Actions/Default/index";
import Send from "../../../components/_Account/_Actions/_Send/index";
import Receive from "../../../components/_Account/_Actions/Receive";
import Buy from "../../../components/_Account/_Actions/_Buy/index";
import History from "../../../components/_Account/_Actions/_History";
import ComingSoon from "../../../components/_Account/_Actions/ComingSoon";
import MoreIcon from "../../../../assets/icons/settings.svg";
import { WebAppState } from "platforms/web/reducers";
import { selectSimplePrice } from "../../../../shared/reducers/simplePrice";
import { currentPrice } from "shared/reducers/currentPrice";
import { throws } from "assert";

interface AssetsProps {
  balances: XBalances;
  price: number;
  rates: { [key: string]: any };
  getSimplePrice: () => void;
  getForex: () => void;
}

interface AssetsState {}

const Enabled_TICKER = [Ticker.xUSD, Ticker.XHV];

class AssetsPage extends Component<AssetsProps, any> {
  state = {
    forexPriceFetched: false,
    action: "Default",
    ticker: "",
    page: "Accounts"
  };

  routing1 = (page: String) => {
    this.setState({ page: page });
  };

  Routing = (ticker: String, action: String) => {
    if (action !== "Default") {
      this.setState({ ticker: ticker });
      this.setState({ action: action });
    } else {
      this.setState({ ticker: "" });
      this.setState({ action: "" });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.price === NO_PRICE) {
      this.props.getSimplePrice();
      this.props.getForex();
    }

    console.log(this.props.balances.xUSD.balance);
  }

  Accounts = () => {
    return token.map(data => {
      const { token, ticker, symbol, balance, available, visible } = data;

      const rates = this.props.rates;
      let price = rates[ticker] ? rates[ticker] : 0;
      price = symbol + price.toFixed(2);

      if (visible) {
        return (
          <Account
            key={token}
            styling={
              this.state.ticker !== ticker ? "background-color: #363638;" : null
            }
          >
            {this.Page(ticker, data, available)}
          </Account>
        );
      }
    });
  };

  Page = (ticker: String, data: Object, available: boolean) => {
    if (this.state.ticker !== ticker) {
      return <Default data={data} routing={this.Routing.bind(this)} />;
    }
    if (available) {
      switch (this.state.action) {
        case "Send":
          return <Send data={data} routing={this.Routing.bind(this)} />;
        case "Receive":
          return <Receive data={data} routing={this.Routing.bind(this)} />;
        case "Buy":
          return <Buy data={data} routing={this.Routing.bind(this)} />;
        case "History":
          return <History data={data} routing={this.Routing.bind(this)} />;
      }
    } else {
      return <ComingSoon data={data} routing={this.Routing.bind(this)} />;
    }
  };

  render() {
    let totalBalance = convertToPrice(
      convertToMoney(this.props.balances["XHV"].balance) * this.props.price
    ).toFixed(2);

    return (
      <Page>
        <Settings
          show={this.state.page === "Settings" ? "top: 0px" : "top: 100%"}
          close={() => this.routing1("Accounts")}
        />
        <Header
          H1={"$" + totalBalance}
          P="Total Balance in USD"
          icon={MoreIcon}
          onClick={() => this.routing1("Settings")}
        />
        <Content>{this.Accounts()}</Content>
      </Page>
    );
  }
}

const mapStateToProps = (state: WebAppState) => ({
  ...state.simplePrice,
  ...state.forex,
  balances: state.xBalance,
  lastPrice: selectSimplePrice(state)
});

export const Assets = connect(mapStateToProps, { getForex, getSimplePrice })(
  AssetsPage
);
