import styled from "styled-components";

export const Text = styled.h1`
  padding: 9px 18px;
  margin: 0px;
  color: white;
  width: fit-content;
  line-height: 1;
  font-size: 16px;
  font-weight: 400;
  background-color: #242426;
  border-radius: 30px;
  float: right;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  ${props => props.styling}
`;
