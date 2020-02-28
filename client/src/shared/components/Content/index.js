import React from "react";
import { Container, Wrapper } from "./styles";

const Content = props => (
  <Container styling={props.styling}>{props.children}</Container>
);

export default Content;
