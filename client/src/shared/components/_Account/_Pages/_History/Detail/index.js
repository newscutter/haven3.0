import React, { Component } from "react";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import Detail from "../../../../Detail/Default";
import DetailContainer from "../../../../Detail/Container";
import A from "../../../../_Text/A";
import P from "../../../../_Text/P";

import {
  convertBalanceForReading,
  getCurrentValueInUSD
} from "../../../../../../utility/utility";
import { core } from "../../../../../../platforms/web/declarations/open_monero.service";
import { Ticker } from "../../../../../reducers/types";

class HistoryDetail extends Component {
  state = {
    transaction: {}
  };
  componentDidMount() {
    this.findTransaction();
  }

  findTransaction = () => {
    let TXIndex = this.props.transactions.findIndex(p => {
      return p.hash === this.props.txid;
    });
    this.setState({ transaction: this.props.transactions[TXIndex] });
  };

  getTransactionStatus(tx) {
    if (
      tx.mempool ||
      tx.height > this.props.height - core.monero_config.txMinConfirms
    ) {
      return "Pending";
    } else {
      return "Completed";
    }
  }

  getTransactionType(tx) {
    if (tx.coinbase) {
      return "Mined";
    } else if (tx.approx_float_amount > 0) {
      return "Received";
    } else if (tx.approx_float_amount < 0) {
      return "Sent";
    } else {
      return null;
    }
  }

  render() {
    return (
      <Aux>
        <Header
          back={() => this.props.routing("Overview")}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          H4={
            this.getTransactionType(this.state.transaction) +
            " " +
            this.props.data.ticker
          }
          P={"Transaction"}
        />
        <Content>
          <A>
            {(this.getTransactionType(this.state.transaction) === "Sent"
              ? "-"
              : "") +
              convertBalanceForReading(
                Math.abs(this.state.transaction.amount)
              ) +
              " " +
              this.props.data.ticker}
          </A>
          <P
            styling={
              "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
            }
          >
            {"≈ " +
              (this.getTransactionType(this.state.transaction) === "Sent"
                ? "-"
                : "") +
              this.props.nativeCurrency.symbol +
              getCurrentValueInUSD(
                this.state.transaction.amount,
                Ticker.XHV,
                this.props.price
              ).toFixed(2)}
          </P>

          <DetailContainer>
            <Detail
              name="Status:"
              info={this.getTransactionStatus(this.state.transaction)}
            />
            <Detail
              name="Date:"
              info={new Date(
                this.state.transaction.timestamp
              ).toLocaleDateString()}
            />
            <Detail name="Transaction ID:" info={this.state.transaction.hash} />
          </DetailContainer>
        </Content>
      </Aux>
    );
  }
}

export default HistoryDetail;
