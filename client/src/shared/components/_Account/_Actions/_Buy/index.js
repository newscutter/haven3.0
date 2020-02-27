import React, { Component } from "react";
import Aux from "../../../Aux";
import BuyShortcuts from "./Shortcuts";
import BuyAmount from "./Amount/index";
import BuyMethod from "./Method/index";
import BuyExchange from "./Exchange/index";
import BuyDeposit from "./Deposit/index";
import BuyExchangeConfirmation from "./Exchange/Confirmation";

import BitcoinLogo from "../../../../../assets/icons/bitcoin.svg";

class Buy extends Component {
  state = {
    page: "Shortcuts",
    buy: {
      ticker: "",
      amount: 0,
      slider: 0,
      paymentcurrency: {
        ticker: "",
        symbol: "",
        name: "",
        icon: BitcoinLogo,
        amount: 0,
        price: 134
      }
    }
  };

  routing = input => {
    this.setState({ page: input });
  };

  buy = (event, type) => {
    const updatedBuy = {
      ...this.state.buy
    };
    switch (type) {
      case "AmountInput":
        updatedBuy.ticker = this.props.data.ticker;
        updatedBuy.amount = event.target.value;
        break;
      case "AmountShortcut":
        updatedBuy.ticker = this.props.data.ticker;
        updatedBuy.amount = event;
        return this.routing("Method");
      case "PaymentMethod":
        updatedBuy.paymentcurrency.ticker = event[0];
        updatedBuy.paymentcurrency.name = event[1];
        updatedBuy.paymentcurrency.symbol = event[2];
        updatedBuy.paymentcurrency.icon = event[3];
        updatedBuy.paymentcurrency.amount =
          Math.round(event[4] * 10000000) / 10000000;
        return this.routing(event[5]);
      case "Confirmation":
        updatedBuy.slider = event.target.value;
        break;
      default:
        return null;
    }
    this.setState({ buy: updatedBuy });
    console.log(this.state.buy.amount.length);
    if (updatedBuy.slider > 99) {
      this.routing("ExchangeConfirmation");
    }
  };

  BuyFunnel = () => {
    switch (this.state.page) {
      case "Shortcuts":
        return (
          <BuyShortcuts
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            amount={this.buy.bind(this)}
            buy={this.state.buy}
          />
        );
      case "Amount":
        return (
          <BuyAmount
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            amount={this.buy.bind(this)}
            buy={this.state.buy}
          />
        );
      case "Method":
        return (
          <BuyMethod
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            paymentmethod={this.buy.bind(this)}
            buy={this.state.buy}
          />
        );
      case "Exchange":
        return (
          <BuyExchange
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            confirm={this.buy.bind(this)}
            buy={this.state.buy}
          />
        );
      case "ExchangeConfirmatio":
        return (
          <BuyExchangeConfirmation
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            buy={this.state.buy}
          />
        );
      case "Deposit":
        return (
          <BuyDeposit
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            buy={this.state.buy}
          />
        );
    }
  };

  render() {
    return <Aux>{this.BuyFunnel()}</Aux>;
  }
}

export default Buy;
