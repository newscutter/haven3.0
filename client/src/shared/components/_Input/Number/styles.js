import styled from "styled-components";

export const Input = styled.input`
width: 100%;
  padding: 0px;
  font-size: 39px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 0 #5c75e5;
  cursor: text;
}

&::placeholder {
    color: transparent;
  text-shadow: 0 0 0 #5c75e5;
  opacity: 1;
}



&:focus {
    outline: none;
    
}




`;
