import React from "react";
import { Progress, Container, Label } from "./styles";

const RangeInput = React.forwardRef((props, ref) => (
  <Container styling={props.styling}>
    <Label>{props.label}</Label>
    <Progress progress={props.progress} />
  </Container>
));

export default RangeInput;
