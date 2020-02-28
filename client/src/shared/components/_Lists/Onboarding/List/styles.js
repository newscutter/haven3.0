import styled from "styled-components";
import ChevronIcon from "../../../../../assets/icons/right-white.png";

// export const Container = styled.div`
//   width: calc(100% - 40px);
//   padding: 20px;
//   background-color: #363638;
//   z-index: 200;
//   height: 38px;
//   box-sizing: content-box;
// `;

export const Container = styled.div`
  width: calc(100% - 80px);
  margin: 0px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
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
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  ${props => props.styling}
`;

export const Icon = styled.div`
  width: 34px;
  height: 34px;
  background-image: url(${props => props.icon});
  background-size: 28px;
  opacity: 0.5;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Names = styled.div`
  width: 190px;
  margin: 0px 0px 0px 20px;
`;

export const Information = styled.div`
  width: calc(100% - 217px);
`;

export const Chevron = styled.div`
  width: 34px;
  height: 34px;
  margin: 0px -10px 0px 0px;
  background-image: url(${ChevronIcon});
  background-size: 13px;
  opacity: 0.5;
  background-position: center;
  background-repeat: no-repeat;
`;
