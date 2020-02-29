// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Wrapper, Buttons, Title } from "../styles";
import { Container, Button } from "./styles";
import H1 from "../../_Text/H1";
import P from "../../_Text/P";

class Header extends Component {
  state = {
    size: 130
  };

  render() {
    let newSize;

    window.onscroll = () => {
      if (window.scrollY < 80) {
        newSize = 129 - window.scrollY;
        if (newSize > 150) {
          newSize = 170;
        }
        this.setState({ size: newSize });
      } else {
        newSize = 50;
        this.setState({ size: newSize });
      }
    };

    return (
      <Container
        styling={[
          "padding: ",
          (this.state.size / 13) * 3 + 10,
          "px 20px; ",
          window.scrollY > 0
            ? "border-bottom: 1px solid rgba(255,255,255,0.05); "
            : "background-color: #242426;"
        ].join("")}
      >
        <Wrapper>
          <Title>
            <H1 styling={["font-size: ", this.state.size + 70, "%;"].join("")}>
              {this.props.H1}
            </H1>
            <P>{this.props.P}</P>
          </Title>
          <Buttons>{this.props.buttons}</Buttons>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
