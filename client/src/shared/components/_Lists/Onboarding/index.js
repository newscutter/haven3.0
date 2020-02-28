import React, { Component } from "react";
import { Container, Icon, Names, Information, Chevron } from "./styles";
import P from "../../_Text/P";
import H4 from "../../_Text/H4";

const List = props => {
  return (
    <Container styling={props.styling} onClick={props.onClick}>
      <Icon icon={props.icon} />
      <Names>
        <H4 styling={" opacity: 1"}>{props.name}</H4>
        <P styling={""}>{props.subname}</P>
      </Names>
      <Information>{props.info}</Information>
      <Chevron />
    </Container>
  );
};
export default List;
