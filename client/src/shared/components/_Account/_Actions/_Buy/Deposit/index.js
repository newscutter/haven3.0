import React, { Component } from "react";
import { Icon, Wrapper } from "./styles";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import Detail from "../../../../Detail/Default";
import DetailInput from "../../../../Detail/Input";
import Button from "../../../../_buttons/button";
import P from "../../../../_Text/P";
import H4 from "../../../../_Text/H4";
import A from "../../../../_Text/A";
import DetailContainer from "shared/components/Detail/Container";
import Countdown from "../../../../Countdown";

class BuyDeposit extends Component {
  Timer = () => {
    var time1 = "01:00:00";
    var time2 = "00:30:00";
    var time3 = "00:30:00";

    var minute = 0;
    var second = 0;

    var splitTime1 = time1.split(":");
    var splitTime2 = time2.split(":");
    var splitTime3 = time3.split(":");

    minute =
      parseInt(splitTime1[1]) +
      parseInt(splitTime2[1]) +
      parseInt(splitTime3[1]);
    minute = minute % 60;
    second =
      parseInt(splitTime1[2]) +
      parseInt(splitTime2[2]) +
      parseInt(splitTime3[2]);
    minute = minute + second / 60;
    second = second % 60;

    return minute + minute + ":" + second + second;
  };
  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Deposit " + this.props.buy.paymentcurrency.ticker}
          P={"Receive " + this.props.data.ticker}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Method")}
        />
        <Content>
          <Wrapper>
            <Icon icon={this.props.buy.paymentcurrency.icon} />
            <A styling={"width: fit-content; display: inline-block"}>
              {this.props.buy.paymentcurrency.amount}
            </A>
          </Wrapper>
          <P
            styling={
              "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
            }
          >
            Deposit Amount
          </P>
          <DetailContainer>
            <DetailInput
              name={"Deposit to:"}
              info={
                <Aux>
                  <Button
                    highlight
                    label={"COPY"}
                    styling={
                      "font-size: 11px; padding: 6px 12px; margin: -5px 0px -5px 20px; float: right;"
                    }
                  />
                  <P
                    styling={
                      "overflow-x: hidden; color: #000; text-align: right;"
                    }
                  >
                    1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
                  </P>
                </Aux>
              }
            />
          </DetailContainer>
          <DetailContainer styling={"margin: 20px 0px 0px 0px"}>
            <Detail
              name={"Receive:"}
              info={this.props.buy.amount + " " + this.props.data.ticker}
            />
            <Detail
              name={"Rate:"}
              info={
                "1 " +
                this.props.buy.paymentcurrency.ticker +
                " = " +
                this.props.buy.paymentcurrency.price
                  //     / this.props.data.price
                  .toFixed(2) +
                " " +
                this.props.data.ticker
              }
            />
          </DetailContainer>
          <Countdown
            label={"29:55 LEFT TO DEPOSIT"}
            progress={0}
            styling={"margin: 20px 0px 0px 0px"}
          />
        </Content>
      </Aux>
    );
  }
}
export default BuyDeposit;
