import { Details } from "shared/pages/_wallet/Onboarding";
import React, { Component } from "react";
import TxHistoryWeb from "../../../components/TxHistory";
import { connect } from "react-redux";
import Accounts from "../../../../../constants/assets";

import { WebAppState } from "platforms/web/reducers";
import { selectSimplePrice } from "shared/reducers/simplePrice";
import Page from "../../../../../shared/components/_layout/page";
import Header from "../../../../../shared/components/Header/Animated";
import Content from "../../../../../shared/components/Content";

import List from "../../../../../shared/components/_Lists/Onboarding";
import ListContainer from "../../../../../shared/components/_Settings/UI/List/Container";
import P from "../../../../,./../../shared/components/_Text/P";

class DetailsWebContainer extends Component<any, any> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let nationalCurrencies = Accounts.filter(
      row =>
        row.symbol !== "G" &&
        row.symbol !== "S" &&
        row.symbol !== "₿" &&
        row.symbol !== "H"
    );
    let nationalCurrenciesList = nationalCurrencies.map(account => {
      return (
        <ListContainer>
          <List
            key={account.ticker}
            name={account.token}
            subname={account.ticker + " Wallet"}
            // <Button
            //   // type={[
            //   //   "Button-Small",
            //   //   account.visible ? "Button-Default" : "Button-Highlight"
            //   // ].join(" ")}
            //   label="ADDED"
            //   onClick={() => this.props.visibleaccounts(account.ticker)}
            //   styling={"float: right"}
          />
        </ListContainer>
      );
    });

    let preciousMetals = Accounts.filter(
      row => row.symbol === "G" || row.symbol === "S"
    );
    let preciousMetalsList = preciousMetals.map(account => {
      return (
        <ListContainer>
          <List
            key={account.ticker}
            name={account.token}
            subname={account.ticker + " Wallet"}
          />
        </ListContainer>
      );
    });

    let digitalCurrencies = Accounts.filter(
      row => row.symbol === "₿" || row.symbol === "H"
    );
    let digitalCurrenciesList = digitalCurrencies.map(account => {
      return (
        <ListContainer>
          <List
            key={account.ticker}
            name={account.token}
            subname={account.ticker + " Wallet"}
          />
        </ListContainer>
      );
    });

    return (
      <Page>
        <Header H1={"Pick wallets"} P="Add 1 or more currency wallets:" />
        <Content>
          <P styling={"margin: 40px 0px 10px 0px"}>National Currencies:</P>
          {nationalCurrenciesList}
          <P styling={"margin: 40px 0px 10px 0px"}>Precious Metals:</P>
          {preciousMetalsList}
          <P styling={"margin: 40px 0px 10px 0px"}>Digital Currencies:</P>
          {digitalCurrenciesList}
        </Content>
      </Page>
    );
  }
}

export const mapStateToProps = (state: WebAppState) => ({
  balances: state.xBalance,
  lastPrice: selectSimplePrice(state)
});

export const DetailsWeb = connect(mapStateToProps, {})(DetailsWebContainer);
