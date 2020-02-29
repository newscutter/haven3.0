import styled from "styled-components";
import ExchangeToIcon from "../../../../../../assets/icons/exchangeto.png";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Icon = styled.div`
  width: 50px;
  height: 62px;
  background-image: url(${ExchangeToIcon});
  background-size: 50px;
  opacity: 0.5;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
`;

export const Amount = styled.div`
  width: calc(50% - 25px);
  margin: 0px;
`;
