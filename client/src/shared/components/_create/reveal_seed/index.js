// Library Imports
import React from "react";

// Relative Imports
import Seed from "../../_inputs/seed";
import H4 from "../../_Text/H4/index";
import { Content, Disclaimer, Icon } from "./styles";

const RevealSeed = props => {
  const { value, name, rows, action, actionEvent, readOnly, ...rest } = props;

  return (
    <div>
      <Content>
        <Disclaimer>
          <Icon />
          <H4
            styling={
              "text-align: center; margin: 20px 0px 0px 0px;  font-family: SF Mono, monospace; line-height: 1.8"
            }
          >
            This password is the <strong>ONLY</strong> way to access your
            wallet. Keep it safe and secret! It's <strong>NOT</strong>{" "}
            recoverable!.
          </H4>
        </Disclaimer>
      </Content>
      <Seed
        label="Wallet Password"
        value={value}
        placeholder=""
        name={name}
        rows={rows}
        readOnly={readOnly}
        action="COPY PASSWORD"
        rest={rest}
        styling={"filter: blur(3px);"}
      />
    </div>
  );
};

export default RevealSeed;
