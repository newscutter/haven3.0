import React, { Component } from "react";
import { Container, Icon, Names, Information, Chevron } from "./styles";
import P from "../../../_Text/P";

const List = props => {
  return (
    <Container styling={props.styling} onClick={props.onClick}>
      <Icon icon={props.icon} />
      <Names>
        <P styling={" opacity: 1"}>{props.name}</P>
        <P styling={""}>{props.subname}</P>
      </Names>
      <Information>{props.info}</Information>
      <Chevron />
    </Container>
  );
};
export default List;
