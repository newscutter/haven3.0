import React, { Component } from "react";
import Aux from "../../../../Aux";
import Header from "../../../UI/_Header/Centered";
import Content from "../../../UI/Content";
import Detail from "../../../../Detail/Default";
import DetailContainer from "../../../../Detail/Container";
import A from "../../../../_Text/A";
import P from "../../../../_Text/P";

class HistoryDetail extends Component {
  render() {
    return (
      <Aux>
        <Header
          back={() => this.props.routing("Overview")}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          H4={"Sent " + this.props.data.ticker}
          P={"Transaction"}
        />
        <Content>
          <A>{"5,033.32 x" + this.props.data.ticker}</A>
          <P
            styling={
              "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
            }
          >
            {"≈ $" + " 5,033.32"}
          </P>

          <DetailContainer>
            <Detail name="Status:" info={"Completed"} />
            <Detail name="To:" info={"kfn4rgt04it3gi43h0fg4ni3hg0g4"} />
            <Detail name="Fee:" info={this.props.data.ticker} />
          </DetailContainer>
        </Content>
      </Aux>
    );
  }
}

export default HistoryDetail;
