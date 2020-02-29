import React, { Component } from "react";
import Overview from "./Overview";
import Detail from "./Detail";
import NoHistory from "./NoHistory";
import Aux from "../../../Aux";
import { selectBlockchainHeight } from "../../../../../platforms/web/reducers/chain";
import { getTransfers } from "../../../../../platforms/web/actions";
import { connect } from "react-redux";

class History extends Component {
  state = {
    page: "Overview",
    txid: ""
  };

  routing = (input, hash) => {
    this.setState({ page: input });
    this.setState({ txid: hash });
  };

  History = txid => {
    if (this.props.transferList.txs !== null) {
      switch (this.state.page) {
        case "Overview":
          return (
            <Overview
              data={this.props.data}
              linking={this.props.routing}
              routing={this.routing.bind(this)}
              transactions={this.props.transferList.txs}
            />
          );
        case "Detail":
          return (
            <Detail
              data={this.props.data}
              linking={this.props.routing}
              routing={this.routing.bind(this)}
              txid={this.state.txid}
              price={this.props.price}
              transactions={this.props.transferList.txs}
            />
          );
      }
    } else {
      return (
        <NoHistory
          data={this.props.data}
          linking={this.props.routing}
          routing={this.routing.bind(this)}
        />
      );
    }
  };
  render() {
    return <Aux>{this.History()}</Aux>;
  }
}

export const mapStateToProps = state => ({
  transferList: state.transferList,
  height: selectBlockchainHeight(state),
  price: state.simplePrice.price
});

export default connect(mapStateToProps, { getTransfers })(History);
