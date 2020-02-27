// Library Imports
import React from "react";

// Relative Imports
import { Logo } from "./styles";
import Icon from "../../../assets/haven.svg";

const HavenLogo = ({ styling }) => {
  return <Logo styling={styling} src={Icon} />;
};

export default HavenLogo;
