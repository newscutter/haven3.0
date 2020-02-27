import styled from "styled-components";

export const NavigationIcon = styled.div`
  background-image: url(${props => props.icon});
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: content-box;
  padding: 2px;
  opacity: 0.5;
  width: 30px;
  height: 30px;
  border-radius: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    transition-duration: 0.4s;
    opacity: 0.75;
    cursor: pointer;
  }
`;
