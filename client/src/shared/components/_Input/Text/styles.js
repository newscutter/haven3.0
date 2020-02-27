import styled from "styled-components";

export const Input = styled.input`
width: 100%;
padding: 12px 20px;
color: rgba(0, 0, 0, 1);
background-color: rgba(0, 0, 0, 0.075);
border-radius: 10px;
border: none;
font-size: 13px;
font-weight: 500;
float: left;
}

&:focus {
outline: none;
}

${props => props.styling}
`;
