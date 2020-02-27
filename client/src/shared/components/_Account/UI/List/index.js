import React from "react";
import { Container, Amount, Names, Information, Icon, Chevron } from "./styles";
import P from "../../../_Text/P";

const AccountList = props => (
  <Container onClick={props.onClick}>
    <Icon icon={props.icon} />
    <Names>
      <P styling={"color: #000; opacity: 1"}>{props.name}</P>
      <P styling={"color: #000"}>{props.subname}</P>
    </Names>
    <Information>
      <Amount>{props.info}</Amount>
    </Information>
  </Container>
);
export default AccountList;
