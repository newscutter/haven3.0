import {
  EmptyState,
  History,
  Message,
  NoTransactions
} from "../../../../shared/pages/_wallet/details/styles";
import { Spinner } from "../../../../shared/components/spinner";
import {
  convertBalanceForReading,
  getCurrentValueInUSD
} from "../../../../utility/utility";
import empty from "../../../../assets/illustration/no_transactions.svg";
import React, { Component } from "react";
import { selectBlockchainHeight } from "../../reducers/chain";
import { getTransfers } from "../../actions";
import { connect } from "react-redux";
import { core } from "../../declarations/open_monero.service";
import AccountList from "../../../../shared/components/_Account/UI/List";
import Header from "../../../../shared/components/_layout/header/index.js";
import { withRouter } from "react-router-dom";
import { Ticker } from "../../../../shared/reducers/types";
import SentIcon from "../../../../assets/icons/withdrawal.png";
import ReceivedIcon from "../../../../assets/icons/deposit.png";
import Aux from "../../../../shared/components/Aux";

class TxHistoryContainer extends Component {
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

  getTransactionStatus(tx) {
    if (
      tx.mempool ||
      tx.height > this.props.height - core.monero_config.txMinConfirms
    ) {
      return "pending";
    } else {
      return "completed";
    }
  }

  render() {
    const assetId = this.props.match.id;
    const { txs, isFetching } = this.props.transferList;

    return (
      <>
        {isFetching && txs == null ? (
          <EmptyState>
            <Spinner />
            <Message>Loading transaction history...</Message>
          </EmptyState>
        ) : (
          <Aux>
            {txs.map((transaction, index) => {
              return (
                <AccountList
                  key={index}
                  icon={
                    this.getTransactionType(transaction) === "Sent"
                      ? SentIcon
                      : ReceivedIcon
                  }
                  name={this.getTransactionType(transaction)}
                  subname={new Date(transaction.timestamp).toLocaleDateString()}
                  info={
                    (this.getTransactionType(transaction) === "Sent"
                      ? "-"
                      : "") +
                    convertBalanceForReading(Math.abs(transaction.amount)) +
                    " XHV"
                  }
                  onClick={this.routing}
                />
              );
            })}
          </Aux>
        )}
      </>
    );
  }
}

export const mapStateToProps = state => ({
  transferList: state.transferList,
  height: selectBlockchainHeight(state),
  price: state.simplePrice.price
});

export default withRouter(
  connect(mapStateToProps, { getTransfers })(TxHistoryContainer)
);
