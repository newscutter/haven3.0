// Library Imports
import React from "react";

// Relative Imports

import { Container, Buttons, Body } from "./styles";
import { Spinner } from "../../spinner";
import H2 from "../../_Text/H2/index";
import Logo from "../../Logo/index";
import Button from "../../_buttons/button/index";

const Auth = ({ title, children, onClick, loading, disable }) => {
  return (
    <Container>
      <Logo styling={" width: 20px"} />
      <H2 styling={"margin: 17px 0px 20px 0px"}>{title}</H2>
      <Body>{children}</Body>
      <Buttons>
        <Button
          disabled={disable}
          onClick={onClick}
          highlight
          label={loading ? <Spinner color={"white"} /> : "LOGIN"}
          styling="width: 100%"
        />
      </Buttons>
    </Container>
  );
};

export default Auth;
