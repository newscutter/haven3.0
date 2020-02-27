import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  ${props => props.styling};
`;

export const Label = styled.p`
  width: auto;
  font-weight: 400;
  font-size: 13px;
  opacity: 1;
  color: #fff;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0%, -50%);
`;

export const Progress = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  -webkit-appearance: none;
  appearance: none;
  width: ${props => [String(props.progress + 25), "%"].join("")};
  height: 40px;
  background-color: #5c75e5;
  outline: none;
  border: none;
  border-radius: 10px;
  z-index: 100;
`;
