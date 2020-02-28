import React, { Component } from "react";
import { Container, Symbol, Names, Information, Chevron } from "./styles";
import S from "../../_Text/S";
import P from "../../_Text/P";
import H4 from "../../_Text/H4";

const List = props => {
  return (
    <Container styling={props.styling} onClick={props.onClick}>
      <Symbol>
        <S styling={"text-align: center;"}>{props.symbol}</S>
      </Symbol>
      <Names>
        <H4 styling={" opacity: 1"}>{props.name}</H4>
        <P styling={""}>{props.subname}</P>
      </Names>
      <Information>{props.info}</Information>
    </Container>
  );
};
export default List;
