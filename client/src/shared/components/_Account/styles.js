import styled from "styled-components";
import HistoryIcon from "../../../assets/icons/history.svg";

export const Container = styled.div`
  height: auto;
  max-height: 530px;
  width: calc(100% - 40px);
  margin: 0px 20px 20px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.85);
  transition: 500ms;
  position: relative;
  ${props => props.styling}
`;
