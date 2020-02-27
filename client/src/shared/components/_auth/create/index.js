// Library Imports
import React from "react";

// Relative Imports
import { Container, Buttons, Body } from "./styles";
import { Spinner } from "../../spinner";
import H2 from "../../_Text/H2/index";
import Logo from "../../Logo/index";
import Button from "../../_buttons/button/index";

const Create = ({
  title,
  step,
  disabled,
  nextStep,
  prevStep,
  children,
  loading
}) => {
  return (
    <Container>
      <Logo styling={" width: 20px"} />
      <H2 styling={"margin: 17px 0px 20px 0px"}>{title}</H2>
      <Body>{children}</Body>
      <Buttons>
        {step === 1 || step === 2 ? null : (
          <Button onClick={prevStep} label={"BACK"} />
        )}
        {!loading ? (
          <Button
            disabled={disabled}
            onClick={nextStep}
            highlight
            label={
              (step === 1 && "REVEAL PASSWORD") ||
              (step === 2 && "NEXT") ||
              (step === 3 && "DONE")
            }
            styling={
              step === 3
                ? "width: calc(100% - 94px); transition: none"
                : "width: 100%; transition: none"
            }
          />
        ) : (
          <Button
            disabled={true}
            highlight
            onClick={nextStep}
            styling="width: calc(100% - 94px); transition: none"
            label={<Spinner color={"white"} />}
          />
        )}
      </Buttons>
    </Container>
  );
};

export default Create;
