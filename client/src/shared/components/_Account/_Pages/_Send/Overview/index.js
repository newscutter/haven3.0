import React, { Component } from "react";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import NumberInput from "shared/components/_Input/Number";
import DetailContainer from "shared/components/Detail/Container";
import Detail from "shared/components/Detail/Default";
import DetailInput from "shared/components/Detail/Input";
import P from "../../../../_Text/P";
import PaymentID from "../../../../_Input/PaymentID";
import Slider from "../../../../_Input/Slider";

class SendAddress extends Component {
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.refs.Button.onClick();
    }
  };

  render() {
    return (
      <Aux>
        <Header
          H4={"Review " + this.props.data.ticker + " Send"}
          P={"Confirm transaction:"}
          back={() => this.props.routing("Amount")}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <NumberInput value={this.props.send.amount} readOnly={true} />
          <P
            styling={
              "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
            }
          >
            {this.props.data.ticker}
          </P>
          <DetailContainer>
            <DetailInput
              name="Payment ID:"
              info={
                <PaymentID
                  onChange={event =>
                    this.props.paymentid(event, "PaymentIDInput")
                  }
                />
              }
            />
          </DetailContainer>
          <DetailContainer styling={"margin: 20px 0px"}>
            <Detail name="Recipient:" info={this.props.send.address} />
            <Detail name="Fee:" info={this.props.data.ticker} />
            <Detail name="You pay:" info={this.props.data.ticker} />
          </DetailContainer>
          <Slider
            type="SEND"
            onChange={event => this.props.confirm(event, "Confirmation")}
          />
        </Content>
      </Aux>
    );
  }
}
export default SendAddress;
