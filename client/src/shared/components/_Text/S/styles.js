import styled from "styled-components";

export const Text = styled.h1`
  padding: 0px;
  margin: 0px;
  color: white;
  line-height: 1;
  opacity: 0.5;
  font-weight: 300;
  font-size: 34px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  ${props => props.styling}
`;
