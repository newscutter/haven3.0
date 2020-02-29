import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  height: auto;
  position: fixed;
  background-color: #242426cc;
  top: 0%;
  backdrop-filter: blur(20px);
  z-index: 1000;
  ${props => props.styling}
`;

export const Button = styled.div``;
