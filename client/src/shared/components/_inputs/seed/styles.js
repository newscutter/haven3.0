import styled from "styled-components";

export const Error = styled.div`
  font-size: 14px;
  color: #f04747;
  text-align: right;
`;

export const Paste = styled.button`
  height: auto;
  padding: 14px 0px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border: none;
  border-top: 1px solid #363638;
  color: #5c75e5;
  outline: none;
  transition: 500ms;
  background-color: transparent;
  &:hover {
    color: #506be5;
    cursor: pointer;
    transition: 500ms;
  }
  ${props => props.styling}
`;

export const Container = styled.div`
  width: auto;
  height: auto
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px
  display: flex;
  flex-direction: column;
  grid-column: ${props => (props.width ? "1 / 3" : null)};

`;

export const Field = styled.textarea.attrs(props => ({
  type: "password",
  rows: props.rows ? props.rows : "4"
}))`
  font-family: SF Mono, monospace;
  height: 140px;
  display: flex;
  align-items: flex-start;
  border: none;
  border-radius: 10px 10px 2px 2px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 1.8;
  resize: none;
  outline: none;
  transition: 500ms;
  -webkit-appearance: none;
  background-color: transparent;
  color: white;

  &::placeholder {
    font-size: 16px;
    color: #7f7f7f;
    line-height: 26px;
  }
  ${props => props.styling}
`;

export const Labels = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
`;
