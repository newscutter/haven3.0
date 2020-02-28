// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";

class Content extends Component {
  state = {
    border: false
  };

  addBorder = () => {
    this.setState({ border: true });
  };

  render() {
    return (
      <Container
        onScroll={() => this.addBorder()}
        styling={
          this.state.border ? "border-top: 1px solid rgba(0,0,0,0.2);" : ""
        }
      >
        {this.props.children}
      </Container>
    );
  }
}

export default Content;
