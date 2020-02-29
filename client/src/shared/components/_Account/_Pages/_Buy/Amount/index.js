import React, { Component } from "react";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import Button from "../../../../_buttons/button";
import NumberInput from "shared/components/_Input/Number";
import P from "../../../../_Text/P";

class BuyAmount extends Component {
  ref = React.createRef();
  componentDidMount() {
    this.refs.BuyAmountInput.focus();
  }

  keyPress = event => {
    if (event.key === "Enter") {
      this.refs.BuyAmountButton.onClick();
    }
  };

  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Get " + this.props.data.ticker}
          P={"Enter amount:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Shortcuts")}
        />
        <Content>
          <NumberInput
            placeholder="0.00"
            value={this.props.buy.amount}
            onChange={event => this.props.amount(event, "AmountInput")}
            onKeyPress={this.keyPress}
            ref="BuyAmountInput"
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
            onClick={() => this.props.routing("Method")}
            label="NEXT"
            styling={"width: 100%; "}
            disabled={this.props.buy.amount === 0.0}
            ref="BuyAmountButton"
          />
        </Content>
      </Aux>
    );
  }
}
export default BuyAmount;
