import React, { Component } from "react";
import { Amount, Icon, Wrapper } from "./styles";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import Button from "../../../../_buttons/button";
import Detail from "../../../../Detail/Default";
import DetailInput from "../../../../Detail/Input";
import Slider from "../../../../_Input/Slider";

import DetailContainer from "shared/components/Detail/Container";
import P from "../../../../_Text/P";
import A from "../../../../_Text/A";

class BuyExchange extends Component {
  state = {
    fee: 0.0002,
    time: 18,
    priority: "Default"
  };

  priority = input => {
    let newFee;
    let newTime;
    let newPriority;
    switch (input) {
      case "Free":
        newFee = 0;
        newTime = 48;
        newPriority = input;
        break;
      case "Default":
        newFee = 0.002;
        newTime = 18;
        newPriority = input;
        break;
      case "Express":
        newFee = 0.02;
        newTime = 2;
        newPriority = input;
        break;
      default:
        newFee = 0.002;
        newTime = 18;
        newPriority = input;
    }
    this.setState({ fee: newFee });
    this.setState({ time: newTime });
    this.setState({ priority: newPriority });
  };

  render() {
    let paymentcurrencyAmountwithFees =
      this.props.buy.paymentcurrency.amount +
      this.props.buy.paymentcurrency.amount * this.state.fee;

    const highlightStyling =
      "color: #fff; background-color: #506be5; &:hover {background-color: #506be5}";

    const priorityButtonExpress = [
      this.state.priority === "Express" ? highlightStyling : null
    ];
    const priorityButtonDefault = [
      this.state.priority === "Default" ? highlightStyling : null
    ];
    const priorityButtonFree = [
      this.state.priority === "Free" ? highlightStyling : null
    ];

    return (
      <Aux>
        <Header
          H4={
            "x" +
            this.props.buy.paymentcurrency.ticker +
            " → x" +
            this.props.data.ticker
          }
          P={"Review exchange:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Method")}
        />
        <Content>
          <Wrapper>
            <Amount>
              <A>
                {this.props.buy.paymentcurrency.symbol +
                  paymentcurrencyAmountwithFees.toFixed(2)}
              </A>
              <P
                styling={
                  "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
                }
              >
                from {this.props.buy.paymentcurrency.ticker} wallet
              </P>
            </Amount>
            <Icon />
            <Amount>
              <A>
                {this.props.data.symbol +
                  this.props.buy.amount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </A>
              <P
                styling={
                  "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
                }
              >
                to {this.props.data.ticker} wallet
              </P>
            </Amount>
          </Wrapper>
          <DetailContainer>
            <DetailInput
              name="Priority:"
              info={
                <Aux>
                  <Button
                    styling={[
                      "border-radius: 2px 10px 10px 2px;",
                      priorityButtonExpress
                    ].join(" ")}
                    detail
                    label="EXPRESS"
                    onClick={() => this.priority("Express")}
                  />
                  <Button
                    styling={[
                      "border-radius: 2px; margin: -6px 2px;",
                      priorityButtonDefault
                    ].join(" ")}
                    detail
                    label="DEFAULT"
                    onClick={() => this.priority("Default")}
                  />
                  <Button
                    styling={[
                      "border-radius: 10px 2px 2px 10px;",
                      priorityButtonFree
                    ].join(" ")}
                    detail
                    label="FREE"
                    onClick={() => this.priority("Free")}
                  />
                </Aux>
              }
            />
          </DetailContainer>
          <DetailContainer styling={"margin: 20px 0px"}>
            <Detail
              name="Fee:"
              info={
                (
                  this.props.buy.paymentcurrency.amount * this.state.fee
                ).toFixed(2) +
                " " +
                this.props.buy.paymentcurrency.ticker +
                " (" +
                this.state.fee * 100 +
                "%)"
              }
            />
            <Detail name="Speed:" info={this.state.time + " hours"} />
          </DetailContainer>
          <Slider
            type="CONVERT"
            onChange={event => this.props.confirm(event, "Confirmation")}
          />
        </Content>
      </Aux>
    );
  }
}
export default BuyExchange;
