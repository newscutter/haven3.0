import styled from "styled-components";
import ChevronIcon from "../../../../assets/icons/right-white.png";

// export const Container = styled.div`
//   width: calc(100% - 40px);
//   padding: 20px;
//   background-color: #363638;
//   z-index: 200;
//   height: 38px;
//   box-sizing: content-box;
// `;

export const Container = styled.div`
  width: calc(100% - 40px);
  margin: 0px 0px 1px 0px;
  padding: 20px;

  background-color: #363638;
  transition: 500ms;
  box-sizing: content-box;
  display: flex;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: 0px;
  }

  ${props => props.styling}
`;

export const Symbol = styled.div`
  width: 34px;
  opacity: 0.5;
`;

export const Names = styled.div`
  width: 190px;
  margin: 0px 0px 0px 20px;
`;

export const Information = styled.div`
  width: calc(100% - 217px);
`;
