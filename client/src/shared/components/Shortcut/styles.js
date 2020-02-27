import styled from "styled-components";
import H4 from "../_Text/H4";

export const Container = styled.div`
  padding: 20px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.075);
  display: inline-block;
  animation: 3s ease-in-out 3s 1 normal none running eqtdLp;

  &:first-of-type {
    margin: 0px 0px 0px 62px;
  }

  &:last-of-type {
    margin: 0p 20px 0px 0px;
  }
`;

export const Value = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
  color: #000;
  text-align: center;
  display: block;
`;
