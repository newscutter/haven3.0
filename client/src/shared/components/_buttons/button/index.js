// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const Button = props => {
  return (
    <Container
      highlight={props.highlight}
      detail={props.detail}
      settings={props.settings}
      styling={props.styling}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </Container>
  );
};

export default Button;
