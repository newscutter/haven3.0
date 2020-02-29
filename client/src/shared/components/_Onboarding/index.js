import { Details } from "shared/pages/_wallet/Onboarding";
import React, { Component } from "react";
import { connect } from "react-redux";

import { WebAppState } from "platforms/web/reducers";
import { selectSimplePrice } from "shared/reducers/simplePrice";
import Aux from "../Aux";
import Header from "../Header/Animated";
import Content from "../Content";
import List from "./UI/List";
import ListContainer from "./UI/List/Container";
import P from "../_Text/P";
import Button from "../_buttons/button";
import Link from "../_buttons/link";

class Onboarding extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.accounts !== nextProps.accounts;
  }
  render() {
    let nationalCurrencies = this.props.accounts.filter(
      row =>
        row.symbol !== "G" &&
        row.symbol !== "S" &&
        row.symbol !== "₿" &&
        row.symbol !== "H"
    );

    let nationalCurrenciesList = nationalCurrencies.map(account => {
      return (
        <List
          key={account.ticker}
          symbol={account.symbol}
          name={account.token}
          subname={account.ticker + " Wallet"}
          info={
            <Button
              highlight={!account.visible}
              small
              label={!account.visible ? "ADD" : "ADDED"}
              onClick={() => this.props.visibleaccounts(account.ticker)}
              styling={"float: right"}
            />
          }
        />
      );
    });

    let preciousMetals = this.props.accounts.filter(
      row => row.symbol === "G" || row.symbol === "S"
    );
    let preciousMetalsList = preciousMetals.map(account => {
      return (
        <List
          key={account.ticker}
          symbol={account.symbol}
          name={account.token}
          subname={account.ticker + " Wallet"}
          info={
            <Button
              highlight={!account.visible}
              small
              label={!account.visible ? "ADD" : "ADDED"}
              onClick={() => this.props.visibleaccounts(account.ticker)}
              styling={"float: right"}
            />
          }
        />
      );
    });

    let digitalCurrencies = this.props.accounts.filter(
      row => row.symbol === "₿" || row.symbol === "H"
    );
    let digitalCurrenciesList = digitalCurrencies.map(account => {
      return (
        <List
          key={account.ticker}
          symbol={account.symbol}
          name={account.token}
          subname={account.ticker + " Wallet"}
          info={
            <Button
              highlight={!account.visible}
              small
              label={!account.visible ? "ADD" : "ADDED"}
              onClick={() => this.props.visibleaccounts(account.ticker)}
              styling={"float: right"}
            />
          }
        />
      );
    });

    return (
      <Aux>
        <Header
          H1={"Pick wallets"}
          P="Add 1 or more currency wallets:"
          buttons={
            <Aux>
              <Link
                label="NEXT"
                highlight
                to="/wallet/assets"
                disabled={
                  !(
                    this.props.accounts
                      .map(account => {
                        if (account.visible === true) {
                          return false;
                        } else return "0";
                      })
                      .filter(word => word === false).length > 0
                  )
                }
                styling={"float:right;"}
              />
            </Aux>
          }
        />
        <Content>
          <P styling={"margin: 40px 0px 10px 0px"}>National Currencies:</P>
          <ListContainer> {nationalCurrenciesList} </ListContainer>
          <P styling={"margin: 40px 0px 10px 0px"}>Precious Metals:</P>
          <ListContainer> {preciousMetalsList} </ListContainer>
          <P styling={"margin: 40px 0px 10px 0px"}>Digital Currencies:</P>
          <ListContainer styling={"margin: 0px 0px 40px 0px"}>
            {" "}
            {digitalCurrenciesList}{" "}
          </ListContainer>
        </Content>
      </Aux>
    );
  }
}

export const mapStateToProps = state => ({
  balances: state.xBalance,
  lastPrice: selectSimplePrice(state),
  accounts: state.Accounts
});

export const mapDispatchToProps = dispatch => ({
  visibleaccounts: ticker =>
    dispatch({
      type: "ACCOUNTS_CHANGE_VISIBILITY",
      ticker: ticker
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
