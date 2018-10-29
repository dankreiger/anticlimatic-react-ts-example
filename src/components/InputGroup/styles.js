import styled from 'styled-components';

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  label {
    margin-bottom: 0;
  }
  input {
    box-sizing: border-box;
    letter-spacing: 1px;
    border: 0;
    border-bottom: 1px solid #ccc;
    ~ .focus-border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #4caf50;
      transition: 0.4s;
    }
    &:focus {
      outline: none;
    }
    &:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
    }
  }
`;
