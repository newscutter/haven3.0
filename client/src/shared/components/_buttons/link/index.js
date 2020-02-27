// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const Link = ({ label, to, highlight, styling }) => {
  return (
    <Container to={to} highlight={highlight} styling={styling}>
      {label}
    </Container>
  );
};

export default Link;
