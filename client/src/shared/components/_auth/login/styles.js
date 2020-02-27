import styled from "styled-components";
import media from "../../../../assets/styles/media.js";

export const Container = styled.div`
height: auto;
width: 426px;
max-width: calc(100% - 40px);
padding: 20px
border-radius: 10px;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #363638;

${media.mobile`
  top: calc(50% + 40px);
  height: 100%;
`};
`;

export const Header = styled.div`
  height: auto;
  width: auto;
  padding: 20px;
  background: #36393f;
  border-bottom: 1px solid #3a4048;
`;

export const Progress = styled.div`
  display: grid;
  background: #2b2e34;
  height: 4px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Step = styled.div`
  width: ${props =>
    (props.width === 1 ? "10%" : null) ||
    (props.width === 2 ? "50%" : null) ||
    (props.width === 3 ? "100%" : null)}
  background: #7289DA;
  height: auto;
  border-radius: 4px;
`;

export const Body = styled.div`
  width: auto;
`;

export const Buttons = styled.div`
  height: auto;
  margin: 20px 0px 0px 0px
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-family: Inter-Regular;
  font-size: 14px;
  color: #8a8d90;
  text-decoration: none;
`;
