// Library Imports
import React, { Component, Props } from "react";
import * as clipboard from "clipboard-polyfill";
// Relative Imports

import { connect } from "react-redux";
import { WebAppState } from "platforms/web/reducers";

import Aux from "../../../Aux";
import SendAddress from "./Address/index";
import SendAmount from "./Amount/index";
import SendOverview from "./Overview/index";
import SendConfirmation from "./Confirmation";
import SendEmptyWallet from "./EmptyWallet";

import {
  sendFunds,
  resetTransferProcess
} from "../../../../../platforms/web/actions/index";
import { transferSucceed } from "../../../../../platforms/web/reducers/transferProcess";

class Send extends Component {
  state = {
    send: {
      amount: Number,
      address: "",
      paymentid: "",
      ticker: this.props.data.ticker,
      slider: 0
    },
    page: "Address"
  };

  routing = input => {
    this.setState({ page: input });
  };

  send = (event, type) => {
    const send = {
      ...this.state.send
    };
    switch (type) {
      case "AddressInput":
        send.address = event.target.value;
        break;
      case "AddressPaste":
        send.address = event;
        break;
      case "AmountInput":
        send.amount = event.target.value;
        break;
      case "PaymentIDInput":
        send.paymentid = event.target.value;
        break;
      case "Confirmation":
        send.slider = event.target.value;
        break;

      default:
        return null;
    }

    this.setState({ send: send });

    if (send.slider > 99) {
      this.props.sendFunds(
        this.state.send.address,
        this.state.send.amount,
        this.state.send.paymentid,
        this.props.data.ticker
      );
      this.routing("Confirmation");
      if (this.props.transferSucceed) {
        this.props.resetTransferProcess();
        //history.push("/wallet/assets/XHV");
      }
    }
  };

  SendFunnel = () => {
    if (this.props.balance === 0) {
      return (
        <SendEmptyWallet data={this.props.data} linking={this.props.routing} />
      );
    } else {
      switch (this.state.page) {
        case "Address":
          return (
            <SendAddress
              routing={this.routing.bind(this)}
              data={this.props.data}
              linking={this.props.routing}
              address={this.send.bind(this)}
              send={this.state.send}
            />
          );
        case "Amount":
          return (
            <SendAmount
              routing={this.routing.bind(this)}
              data={this.props.data}
              linking={this.props.routing}
              amount={this.send.bind(this)}
              send={this.state.send}
            />
          );
        case "Overview":
          return (
            <SendOverview
              routing={this.routing.bind(this)}
              data={this.props.data}
              linking={this.props.routing}
              paymentid={this.send.bind(this)}
              confirm={this.send.bind(this)}
              send={this.state.send}
            />
          );
        case "Confirmation":
          return (
            <SendConfirmation
              data={this.props.data}
              linking={this.props.routing}
              send={this.state.send}
            />
          );
      }
    }
  };

  render() {
    return <Aux>{this.SendFunnel()}</Aux>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  xBalances: state.xBalance,
  address: state.address.main,
  tx: state.transferProcess,
  transferSucceed: transferSucceed(state)
});

export default connect(mapStateToProps, {
  sendFunds,
  resetTransferProcess
})(Send);
