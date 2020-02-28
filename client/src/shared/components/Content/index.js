import React from "react";
import { Container, Wrapper } from "./styles";

const Content = props => (
  <Container styling={props.styling}>
    <Wrapper>{props.children}</Wrapper>
  </Container>
);

export default Content;
