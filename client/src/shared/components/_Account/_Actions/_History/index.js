import React, { Component } from "react";
import Overview from "./Overview";
import Detail from "./Detail";
import Aux from "../../../Aux";

class History extends Component {
  state = {
    page: "Overview",
    txid: ""
  };

  routing = input => {
    this.setState({ page: input });
  };

  History = txid => {
    switch (this.state.page) {
      case "Overview":
        return (
          <Overview
            data={this.props.data}
            linking={this.props.routing}
            routing={this.routing.bind(this)}
          />
        );
      case "Detail":
        return (
          <Detail
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

export default History;
