import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "../../../assets/styles/media.js";

export const Container = styled.div`
  height: auto;
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding: 15px 0px;
  background-color: rgba(0, 0, 0, 0.2);

  ${media.mobile`
  display: none;
`}
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0px auto;
`;

export const Internal = styled(Link)`
  padding: 0px 10px;
  height: 13px
  font-size: 12px;
  font-weight: 500;
  color: white;
  opacity: 0.2;
  text-decoration: none;
  transition: 500ms;
  float:left;

  &:hover {
    opacity: 1;
    transition: 500ms;
    cursor: pointer;
  }
`;

export const Social = styled.img`
  width: 15px;
  opacity: 0.2;
  padding: 0px 10px;
  transition: 500ms;
  float: left;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
