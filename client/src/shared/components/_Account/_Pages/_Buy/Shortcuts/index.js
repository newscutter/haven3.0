import React, { Component } from "react";
import { Wrapper } from "./styles";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Default";
import Content from "../../../UI/Content";
import Button from "../../../../_buttons/button";
import Shortcut from "../../../../Shortcut";
import { throws } from "assert";

class BuyShortcuts extends Component {
  render() {
    const shortcutValues = [100, 500, 1000, 5000, 10000];

    const shortcuts = (
      <Aux>
        {shortcutValues.map(shortcut => {
          return (
            <Shortcut
              key={shortcut}
              value={shortcut}
              amount={
                shortcut / this.props.data.price + " " + this.props.data.ticker
              }
              onClick={() =>
                this.props.amount(
                  shortcut / this.props.data.price,
                  "AmountShortcut"
                )
              }
            />
          );
        })}
      </Aux>
    );
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Get " + this.props.data.ticker}
          P={"Pick amount:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <Wrapper>{shortcuts}</Wrapper>
          <Button
            onClick={() => this.props.routing("Amount")}
            label={"ENTER AMOUNT"}
            highlight
            styling={
              "width: 100%; background-color: transparent; color: #5c75e5; &:hover {background-color: transparent; color: #5c75e5;}"
            }
          />
        </Content>
      </Aux>
    );
  }
}
export default BuyShortcuts;
