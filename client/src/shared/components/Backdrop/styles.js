import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0);
  z-index: 1001;
  transition: 500ms;

  ${props => props.show}
`;
