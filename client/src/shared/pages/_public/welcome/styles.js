import styled from "styled-components";
import media from "../../../../assets/styles/media.js";
import { border } from "../../../../assets/styles/colors.js";

export const Page = styled.div`  
width: 100%
height: 100%;
background-color: #242426;
`;

export const Container = styled.div`
  height: auto;
  width: calc(100% - 40px);
  max-width: 426px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.mobile`
  position: static;
  transform: translate(0%, 0%);
  margin: 40px auto;
  
`}
`;
