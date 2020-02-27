import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: #24242680;
  top: 0%;
  backdrop-filter: blur(20px);
  z-index: 1000;
  ${props => props.styling}
`;

export const Wrapper = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0px auto;
  display: flex;
`;

export const Title = styled.div`
  width: 200px;
`;

export const Buttons = styled.div`
  width: calc(100% - 150px);
  height: auto;
`;
