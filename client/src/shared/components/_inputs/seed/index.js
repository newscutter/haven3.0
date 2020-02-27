// Library Imports
import React from "react";

// Relative Imports
import { Container, Field, Labels, Error, Paste } from "./styles";

const Seed = ({
  error,
  width,
  onClick,
  ref,
  type,
  actionEvent,
  action,
  styling,
  ...rest
}) => {
  return (
    <Container width={width}>
      <Labels>
        <Error>{error}</Error>
      </Labels>
      <Field ref={ref} {...rest} styling={styling} />
      <Paste onClick={actionEvent} styling={styling}>
        {action}
      </Paste>
    </Container>
  );
};

export default Seed;
