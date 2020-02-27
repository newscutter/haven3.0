import React from "react";
import { Container, Value } from "./styles";
import Button from "../_buttons/button";
import P from "../_Text/P";

const Shortcut = props => (
  <Container>
    <Value>{props.value}</Value>
    <P styling={"color: #000; text-align: center; margin: 0px 0px 20px 0px;"}>
      {props.amount}
    </P>
    <Button
      label="GET"
      highlight
      onClick={props.onClick}
      styling={"margin: 0px auto;"}
    />
  </Container>
);

export default Shortcut;
