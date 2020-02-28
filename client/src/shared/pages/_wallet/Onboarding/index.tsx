// Library Imports
import React, { Component } from "react";
// Relative Imports
import Page from "../../../components/_layout/page";
import Header from "../../../components/Header/Animated";
import Content from "../../../components/Content";

interface DetailsProps {
  amount: number;
  price: number;
  value: number;
  assetId: string;
}

export class Details extends Component<DetailsProps, any> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page>
        <Header H1={"Pick your wallets"} P="Add 1 or more wallets:" />
        <Content></Content>
      </Page>
    );
  }
}
