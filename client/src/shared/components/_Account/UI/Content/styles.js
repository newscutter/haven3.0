import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  max-height: 384px
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0px;
  padding: 0px 20px 20px 20px;
  &::-webkit-scrollbar {
    display: none;
  }

  ${props => props.styling}
`;
