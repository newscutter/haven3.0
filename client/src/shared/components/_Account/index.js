// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { getForex, getSimplePrice } from "../../actions";

// Relative Imports

import { NO_PRICE } from "../../reducers/priceHistory";
import { calcValue, convertToMoney, convertToPrice } from "utility/utility";

import Aux from "../Aux";
import Header from "../Header/Animated";
import Content from "../Content";
import { Account } from "./styles";
import Default from "./_Pages/Default/index";
import Send from "./_Pages/_Send/index";
import Receive from "./_Pages/Receive";
import Buy from "./_Pages/_Buy/index";
import History from "./_Pages/_History";
import ComingSoon from "./_Pages/ComingSoon";
import MoreIcon from "../../../assets/icons/settings.svg";
import Button from "../../components/_buttons/button";
import { selectSimplePrice } from "../../reducers/simplePrice";

class Wallet extends Component {
  state = {
    forexPriceFetched: false,
    action: "",
    ticker: ""
  };

  routing = (ticker, action) => {
    if (action !== "Default") {
      this.setState({ ticker: ticker });
      this.setState({ action: action });
    } else {
      this.setState({ ticker: "" });
      this.setState({ action: "" });
    }

    console.log(this.state);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.price === NO_PRICE) {
      this.props.getSimplePrice();
      this.props.getForex();
    }
  }

  Accounts = () => {
    return this.props.accounts.map(data => {
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

  Page = (ticker, data, available) => {
    if (this.state.ticker !== ticker) {
      return <Default data={data} routing={this.routing.bind(this)} />;
    }
    if (available) {
      switch (this.state.action) {
        case "Send":
          return <Send data={data} routing={this.routing.bind(this)} />;
        case "Receive":
          return <Receive data={data} routing={this.routing.bind(this)} />;
        case "Buy":
          return <Buy data={data} routing={this.routing.bind(this)} />;
        case "History":
          return <History data={data} routing={this.routing.bind(this)} />;
      }
    } else {
      return <ComingSoon data={data} routing={this.routing.bind(this)} />;
    }
  };

  render() {
    let totalBalance = convertToPrice(
      convertToMoney(this.props.balances["XHV"].balance) * this.props.price
    ).toFixed(2);

    return (
      <Aux>
        <Header
          H1={this.props.nativeCurrency.symbol + totalBalance}
          P="Total Balance in USD"
          icon={MoreIcon}
          buttons={
            <Button
              icon
              iconSrc={MoreIcon}
              onClick={() => this.props.routing("Settings")}
              styling={"float:right;"}
            />
          }
        />
        <Content>{this.Accounts()}</Content>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  ...state.simplePrice,
  ...state.forex,
  balances: state.xBalance,
  lastPrice: selectSimplePrice(state),
  nativeCurrency: state.NativeCurrency,
  accounts: state.Accounts
});

export default connect(mapStateToProps, { getForex, getSimplePrice })(Wallet);
