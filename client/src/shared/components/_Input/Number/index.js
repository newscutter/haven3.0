import React from "react";
import { Input } from "./styles";
import "./styles.css";

const NumberInput = React.forwardRef((props, ref) => (
  <Input
    type="number"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onKeyPress={props.onKeyPress}
    ref={ref}
    readOnly={props.readOnly}
  />
));

export default NumberInput;
