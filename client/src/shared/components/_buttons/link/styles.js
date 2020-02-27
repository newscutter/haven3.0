import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background-color: ${props =>
    props.highlight ? "#5c75e5" : "rgba(0, 0, 0, 0.2)"}}
  color: ${props => (props.highlight ? "#fff" : "#5c75e5")}}
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  padding: 12px 20px
  border: none;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: 500ms;
  
  &:hover {
    background-color: ${props =>
      props.highlight ? "#506be5" : "rgba(0, 0, 0, 0.3)"}}
    color: ${({ type }) =>
      (type === "Highlight" && "#fff") || (type === "Default" && "#506be5")}}
    cursor: pointer;
    transition: 500ms;
  }
  ${props => props.styling}
`;
