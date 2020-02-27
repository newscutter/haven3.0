import styled from "styled-components";

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  margin: 1px 5px 0px 0px;
  background-image: url(${props => props.icon});
  background-size: 29px;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0px auto;
  display: flex;
`;
