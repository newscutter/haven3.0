import styled from "styled-components";
import { keyframes } from "styled-components";

const scale = keyframes`
  0% { -webkit-transform: scale(1); }
  50% { -webkit-transform: scale(.7); }
  100% { -webkit-transform: scale(1); }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${scale} 1s ease infinite;
  font-size: 0.1rem;
`;

const rotate360 = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  50% { -webkit-transform: rotate(180deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const RotateDiv = styled.span`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 1px solid ${props => props.color};
  border-right: 1px solid ${props => props.color};
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  background: transparent;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;
