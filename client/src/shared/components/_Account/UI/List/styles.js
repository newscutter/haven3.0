import styled from "styled-components";
import ChevronIcon from "../../../../../assets/icons/right.png";

export const Container = styled.div`
  width: calc(100% - 40px);
  margin: 0px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.075);
  cursor: pointer;
  transition-duration: 0.5s;
  box-sizing: content-box;
  display: flex;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.125);
  }
`;

export const Icon = styled.div`
  width: 34px;
  height: 34px;
  background-image: url(${props => props.icon});
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Names = styled.div`
  width: 150px;
  margin: 0px 0px 0px 20px;
`;

export const Information = styled.div`
  width: calc(100% - 177px);
`;

export const Amount = styled.p`
margin: 0px;
  padding: 8px 16px;
  font-size: 13px;
  color: #000;
  font-weight: 500;
  background-color: #eaeaea;
  border-radius: 20px
  width: fit-content;
  float: right;
`;

export const Chevron = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${ChevronIcon});
  background-size: 11px;
  opacity: 0.5;
  background-position: center;
  background-repeat: no-repeat;
`;

// .Account-List-Header {
//     opacity: 1;
//     margin-bottom: 10px;
//   }

//   .Account-List-Header-First {
//     margin-top: 0px;
//   }

//

//   .Account-List-Symbol {
//     width: 24px;
//     margin: 0px;
//     text-align: center;
//     margin-top: -2px;
//     font-size: 30px;
//     opacity: 1;
//     color: rgba(0, 0, 0, 0.5);
//     font-weight: 200;
//     float: left;
//   }

//   .Account-List-Info-Container {
//     width: calc(100% - 176px);
//     float: left;
//   }

//
//   .Account-List-Button-Container {
//     width: 00px;
//     display: inline-block;
//   }

//   .Account-List-Button {
//     height: 10px;
//     width: 0px;
//     margin-left: 0px;
//     margin-top: -2px;
//     opacity: 0.5;
//   }

//   @media (max-width: 576px) {
//     .Account-List:active {
//       background-color: rgba(0, 0, 0, 0.125);
//     }
//     .Account-List:hover {
//       background-color: rgba(0, 0, 0, 0.075);
//     }
//   }
