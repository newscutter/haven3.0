// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Information } from "../../../../assets/styles/type.js";
import Seed from "../../_inputs/seed";
import * as clipboard from "clipboard-polyfill";

class CreateSeed extends Component {
  state = {
    action: "COPY PASSWORD"
  };

  copySeed = () => {
    const seed = this.props.value;
    this.setState({
      action: "PASSWORD COPIED"
    });
    clipboard.writeText(seed);

    setTimeout(() => {
      this.setState({
        action: "COPY PASSWORD"
      });
    }, 1000);
  };

  render() {
    const {
      value,
      name,
      rows,
      action,
      actionEvent,
      readOnly,
      ...rest
    } = this.props;
    return (
      <>
        <Seed
          label="Wallet Password"
          value={value}
          placeholder=""
          name={name}
          rows={rows}
          readOnly={readOnly}
          action={this.state.action}
          actionEvent={this.copySeed}
          rest={rest}
        />
      </>
    );
  }
}

export default CreateSeed;
