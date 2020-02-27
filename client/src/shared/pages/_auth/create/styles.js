import styled from "styled-components";
import { NavLink } from "react-router-dom";
import media from "../../../../assets/styles/media.js";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  overflow: scroll;
  justify-content: center;
  align-items: center;

  ${media.mobile`
    padding-top: 70px;
  `}
`;
