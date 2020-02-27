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
      <Container styling={[this.props.styling].join(" ")}>
        <Wrapper>
          <Title>
            <H1 styling={"font-size: 120%;"}>{this.props.H1}</H1>
            <P>{this.props.P}</P>
          </Title>
          <Buttons>
            <Button icon={this.props.icon} onClick={this.props.close} />
          </Buttons>
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
