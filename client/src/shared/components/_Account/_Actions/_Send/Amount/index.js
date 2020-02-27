import React, { Component } from "react";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import Button from "../../../../_buttons/button";
import NumberInput from "shared/components/_Input/Number";
import P from "../../../../_Text/P";

class SendAmount extends Component {
  ref = React.createRef();
  componentDidMount() {
    this.refs.SendAmountInput.focus();
  }

  keyPress = event => {
    if (event.key === "Enter") {
      this.refs.SendAmountButton.onClick();
    }
  };

  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Send " + this.props.data.ticker}
          P={"Enter amount:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Address")}
        />
        <Content>
          <NumberInput
            placeholder="0.00"
            value={this.props.send.amount}
            onChange={event => this.props.amount(event, "AmountInput")}
            onKeyPress={this.keyPress}
            ref="SendAmountInput"
          />
          <P
            styling={
              "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
            }
          >
            {this.props.data.ticker}
          </P>
          <Button
            highlight
            onClick={() => this.props.routing("Overview")}
            label="NEXT"
            styling={"width: 100%; "}
            disabled={!(this.props.send.amount > 0)}
            ref="SendAmountButton"
          />
        </Content>
      </Aux>
    );
  }
}
export default SendAmount;
