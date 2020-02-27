// Library Imports
import React from "react";

// Relative Imports
import {
  Container,
  Header,
  Content,
  Symbol,
  Information,
  Balance,
  History
} from "./styles";
import Default from "../_Account/_Content/Default/index";

const Cell = ({
  tokenName,
  ticker,
  action,
  symbol,
  balance,
  price,
  change,
  fullwidth
}) => {
  return (
    <Container>
      <Default
        tokenName={tokenName}
        ticker={ticker}
        symbol={symbol}
        balance={balance}
      />
    </Container>
  );
};

export default Cell;
