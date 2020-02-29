import styled from "styled-components";
import HistoryIcon from "../../../../../assets/icons/history.svg";

export const Header = styled.div`
  display: flex;
  padding: 20px;
  width: calc(100% - 40px);
`;

export const Symbol = styled.div`
  margin: 0px 20px 0px 0px;
`;

export const Information = styled.div`
  width: 150px;
`;

export const Balance = styled.div`
  width: calc(100% - 185px);
`;

export const Buttons = styled.div`
  display: flex;
`;

export const History = styled.div`
  background-image: url(${HistoryIcon});
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  margin-left: calc(100% - 280px);
  cursor: pointer;
`;
