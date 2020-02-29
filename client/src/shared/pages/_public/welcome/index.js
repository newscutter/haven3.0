// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { xhvVsCurrenciesFetch } from "../../../../platforms/web/actions/xhvVsCurrencies.js";

// Relative Imports
import { Container, Page, Content } from "./styles";

import Footer from "../../../components/footer";

import Link from "../../../components/_buttons/link/index";
import Logo from "../../../components/Logo/index";
import H1 from "../../../components/_Text/H1";
import H4 from "../../../components/_Text/H4";

class Welcome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page>
        <Container>
          <Logo styling={"margin: 0px 0px 7px 2px; width: 30px"} />
          <H1 styling="margin: 10px 0px;">Private money.</H1>
          <H4 styling={"color: #7f7f7f; line-height: 1.5"}>
            Store and transact money in privacy with xUSD: The first untraceable
            decentralized US Dollar stablecoin.
          </H4>
          <H4 styling={"margin: 40px 0px -5px 0px; font-weight: 500;"}>
            Create a wallet.
          </H4>
          <Link
            to="/create"
            label="CREATE WALLET"
            highlight
            styling={"margin: 20px 0px; "}
          />
          <Link
            to="/login"
            label="LOG IN"
            styling="background-color: #363638;
        &:hover {background-color: #363638}"
          />
        </Container>
        <Footer />
      </Page>
    );
  }
}

export default Welcome;
