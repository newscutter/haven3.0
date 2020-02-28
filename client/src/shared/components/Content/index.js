import React from "react";
import { Container } from "./styles";
import { refresh } from "platforms/desktop/actions";

const Content = props => {
  return <Container styling={props.styling}>{props.children}</Container>;
};

export default Content;
