import styled from "styled-components";

export const Container = styled.div`
  height: calc(100%);
  position: relative;
  top: 0px;
  z-index: 1100;
  background-color: #363638e6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${props => props.show}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 690px;
  margin: 0px 20px;
  padding: 0px 0px 40px 0px;
  height: auto;
  overflow: scroll;
  position: relative;
  top: 121px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
