import styled from "styled-components";
import ComingSoonIcon from "../../../../../assets/icons/comingsoon.png";

export const Icon = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${ComingSoonIcon});
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  ${props => props.styling}
`;

export const Wrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 0px auto;
`;

export const SocialMedia = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px 20px 40px 20px;
  display: inline-block;
  border-radius: 20px;
  background-image: url(${props => props.icon});
  background-color: #5c75e5;
  background-size: 17px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 500ms;

  &:hover {
    background-color: #506be5;
    cursor: pointer;
  }

  ${props => props.styling}
`;
