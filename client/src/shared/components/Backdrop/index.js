// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const Backdrop = props => {
  return <Container show={props.show}>{props.children}</Container>;
};

export default Backdrop;
