// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import {
  Header,
  Symbol,
  Information,
  Balance,
  Buttons,
  History
} from "./styles";
import H4 from "../../../_Text/H4";
import S from "../../../_Text/S";
import P from "../../../_Text/P";
import B from "../../../_Text/B";
import Button from "../../../_buttons/button";
import Content from "../../UI/Content";
import Aux from "../../../Aux";

import { convertToMoney, convertToPrice } from "utility/utility";
import { Ticker } from "../../../../reducers/types";
import { selectSimplePrice } from "shared/reducers/simplePrice";

class Default extends Component {
  render() {
    let amount;
    let price;
    let value;

    if (this.props.data.ticker === "XHV") {
      amount = convertToMoney(
        this.props.balances[this.props.data.ticker].balance
      );
      price = this.props.lastPrice;
      value = convertToPrice(amount * price);
    } else {
      amount = 0.0;
      value = 0.0;
    }

    return (
      <Aux>
        <Header>
          <Symbol>
            <S>{this.props.data.symbol}</S>
          </Symbol>
          <Information>
            <H4>{this.props.data.token}</H4>
            <P>{amount + " " + this.props.data.ticker}</P>
          </Information>
          <Balance>
            <B>{this.props.nativeCurrency.symbol + value}</B>
          </Balance>
        </Header>
        <Content>
          <Buttons>
            <Button
              highlight
              label="GET"
              onClick={() => this.props.routing(this.props.data.ticker, "Buy")}
            />
            <Button
              label="SEND"
              onClick={() => this.props.routing(this.props.data.ticker, "Send")}
              styling="margin: 0px 2px 0px 10px; border-radius: 10px 2px 2px 10px"
            />
            <Button
              label="RECEIVE"
              onClick={() =>
                this.props.routing(this.props.data.ticker, "Receive")
              }
              styling="border-radius: 2px 10px 10px 2px"
            />
            <History
              onClick={() =>
                this.props.routing(this.props.data.ticker, "History")
              }
            />
          </Buttons>
        </Content>
      </Aux>
    );
  }
}
const mapStateToProps = state => ({
  getSimplePrice: state.simplePrice,
  getForex: state.forex,
  balances: state.xBalance,
  lastPrice: selectSimplePrice(state),
  nativeCurrency: state.NativeCurrency
});

export default connect(mapStateToProps)(Default);
