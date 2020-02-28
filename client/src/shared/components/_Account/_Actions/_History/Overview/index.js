import React, { Component } from "react";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Default";
import Content from "../../../UI/Content";
import ListContainer from "shared/components/_Account/UI/List/Container";
import P from "../../../../_Text/P";
import List from "../../../UI/List/index";
import SentIcon from "../../../../../../assets/icons/withdrawal.png";
import ReceivedIcon from "../../../../../../assets/icons/deposit.png";
import ExchangedIcon from "../../../../../../assets/icons/exchanged.png";
import BoughtIcon from "../../../../../../assets/icons/bought.png";
import PendingIcon from "../../:./../../../../../assets/icons/pending.png";
import { convertBalanceForReading } from "../../../../../../utility/utility";
import { core } from "../../../../../../platforms/web/declarations/open_monero.service";

class HistoryOverview extends Component {
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
    let transactionList = (
      <ListContainer>
        {this.props.transactions.map((transaction, index) => {
          return (
            <List
              key={index}
              icon={
                this.getTransactionType(transaction) === "Sent"
                  ? SentIcon
                  : ReceivedIcon
              }
              name={this.getTransactionType(transaction)}
              subname={new Date(transaction.timestamp).toLocaleDateString()}
              info={
                (this.getTransactionType(transaction) === "Sent" ? "-" : "") +
                convertBalanceForReading(Math.abs(transaction.amount)) +
                " XHV"
              }
              onClick={() => this.props.routing("Detail", transaction.hash)}
            />
          );
        })}
      </ListContainer>
    );

    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={this.props.data.ticker + " History"}
          P={"All " + this.props.data.ticker + " transactions:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>{transactionList}</Content>
      </Aux>
    );
  }
}

export default HistoryOverview;

// const Transactions = [
//   {
//     symbol: "",
//     amount: -2432.32,
//     type: "Sent",
//     icon: SentIcon,
//     dated: "12 Dec 19"
//   },
//   {
//     symbol: "",
//     amount: 243.32,
//     type: "Received",
//     icon: ReceivedIcon,
//     dated: "6 Dec 19"
//   },
//   {
//     symbol: "",
//     amount: 4248.7,
//     type: "Bought",
//     icon: BoughtIcon,
//     dated: "1 Dec 19"
//   },
//   {
//     symbol: "",
//     amount: 42348.7,
//     type: "Converted",
//     icon: ExchangedIcon,
//     dated: "1 Dec 19"
//   }
// ];

// let pendingList = null;

// pendingList = (
//   <div>
//     <List
//       className="List-Transaction"
//       key={""}
//       icon={PendingIcon}
//       name={"Converting to xGBP"}
//       subname={"2:20:29 left"}
//       info={-32.32 + " " + this.props.data.ticker}
//       onClick={() => this.props.routing("Detail")}
//     />
//   </div>
// );

// let transactionList = null;

// transactionList = (
//   <div>
//     {Transactions.map(transaction => {
//       return (
//         <List
//           className="List-History"
//           key={transaction.amount + transaction.date}
//           icon={transaction.icon}
//           name={transaction.type}
//           subname={transaction.dated}
//           info={
//             transaction.amount
//               .toString()
//               .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
//             " " +
//             this.props.data.ticker
//           }
//           onClick={() => this.props.routing("Detail")}
//         />
//       );
//     })}
//   </div>
// );
// let transaction2List;

// transaction2List = (
//   <div>
//     <List
//       className="List-History"
//       icon={ExchangedIcon}
//       name={"Converted"}
//       subname={"12 Nov 19"}
//       info={
//         (32320.3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
//         " " +
//         this.props.data.ticker
//       }
//       onClick={() => this.props.routing("Detail")}
//     />
//     <List
//       className="List-History"
//       icon={ExchangedIcon}
//       name={"Converted"}
//       subname={"4 Nov 19"}
//       info={
//         (3420.3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
//         " " +
//         this.props.data.ticker
//       }
//       onClick={() => this.props.routing("Detail")}
//     />
//   </div>
