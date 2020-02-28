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

export const Button = styled.div`
  background-image: url(${props => props.icon});
  background-color: rgba(0, 0, 0, 0.2);
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  float: right;
`;
