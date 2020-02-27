import React, { Component } from "react";
import * as clipboard from "clipboard-polyfill";
import { connect } from "react-redux";

import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";

class Receive extends Component {
  state = {
    address: this.props.address,
    label: "COPY ADDRESS"
  };

  copyAddress = () => {
    this.setState({
      label: "COPIED ADDRESS"
    });

    clipboard.writeText(this.props.address);
    console.log(this.props.address);

    setTimeout(() => {
      this.setState({
        label: "COPY ADDRESS"
      });
    }, 1000);
  };

  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Receive " + this.props.data.ticker}
          P={"Your " + this.props.data.ticker + " address:"}
          close={() => this.props.routing(this.props.data.ticker, "Default")}
        />
        <Content>
          <Button
            label={this.state.label}
            highlight
            styling={"width: 100%"}
            onClick={() => this.copyAddress()}
          />
        </Content>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  address: state.address.main
});

export default connect(mapStateToProps)(Receive);
