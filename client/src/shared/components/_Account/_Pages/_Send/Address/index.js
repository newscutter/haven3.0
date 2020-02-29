import React, { Component } from "react";
import * as clipboard from "clipboard-polyfill";

import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Default";
import Content from "../../../UI/Content";
import Button from "../../../../_buttons/button";
import TextInput from "../../../../_Input/Text";

class SendAddress extends Component {
  state = {
    address: ""
  };

  ref = React.createRef();
  componentDidMount() {
    this.refs.SendAddressInput.focus();
  }

  keyPress = event => {
    if (event.key === "Enter" && this.props.send.address.length > 97) {
      this.ref.current.onClick();
    }
  };

  paste = () => {
    clipboard.readText().then(response => {
      this.setState({
        address: response
      });
      if (this.state.address.length > 97) {
        this.props.address(this.state.address, "AddressPaste");
      }
    });
  };

  render() {
    let isHavenAddress = this.props.send.address.length > 97;

    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Send " + this.props.data.ticker}
          P={"Enter recipient:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <TextInput
            placeholder="Enter receiving address"
            value={this.props.send.address}
            onChange={event => this.props.address(event, "AddressInput")}
            onKeyPress={this.keyPress}
            styling={[
              isHavenAddress
                ? "width: calc(100% - 114px);"
                : "width: calc(100% - 120px); ",
              " border-radius: 10px 0px 0px 10px;"
            ].join("")}
            ref="SendAddressInput"
          />
          {isHavenAddress ? (
            <Button
              onClick={() => this.props.routing("Amount")}
              label="NEXT"
              highlight
              styling={"border-radius: 0px 10px 10px 0px"}
              ref="SendAddressButton"
            />
          ) : (
            <Button
              onClick={() => this.paste()}
              label="PASTE"
              styling={
                "border-radius: 0px 10px 10px 0px; font-weight: 500; background-color: rgba(0,0,0,0.075); &:hover {background-color: rgba(0,0,0,0.075)}"
              }
            />
          )}
        </Content>
      </Aux>
    );
  }
}
export default SendAddress;
