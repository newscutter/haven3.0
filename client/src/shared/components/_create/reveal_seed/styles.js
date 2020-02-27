import styled from "styled-components";

import AttentionIcon from "../../../../assets/icons/attention.png";

export const Content = styled.div`
width: calc(100% - 40px);
margin: 0px 20px;
height: 215px;
border-radius: 10px
display: flex;
position: absolute;
left: calc(50% - 20px); 
background-color: #242426B3;
transform: translate(-50%, 0%);
flex-direction: column;
z-index: 1000;
grid-column: ${props => (props.width ? "1 / 3" : null)};
`;

export const Disclaimer = styled.div`
width: inherit;
margin: 0px 20px;
padding: 20px;
height: fit-content;
border-radius: 10px
display: flex;
position: absolute;
left: calc(50% - 20px); 
top: 50%;
transform: translate(-50%, -50%);
flex-direction: column;
grid-column: ${props => (props.width ? "1 / 3" : null)};
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0px auto;
  background-image: url(${AttentionIcon});
  background-size: contain;
`;
