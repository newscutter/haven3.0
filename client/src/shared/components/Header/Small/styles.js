import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  height: auto;
  position: fixed;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  top: 0%;
  z-index: 1000;

  ${props => props.styling}
`;

export const Button = styled.div`
  background-image: url(${props => props.icon});
  background-color: rgba(0, 0, 0, 0.2);
  background-size: 13px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  float: right;
  display: flex;
  transform: rotate(90deg);
  transition: 500ms;

  &:hover {
  }
`;
