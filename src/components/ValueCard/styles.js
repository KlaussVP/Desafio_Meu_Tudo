import styled from "styled-components";

const ValueCardContainer = styled.div`
  height: 58px;
  width: 165px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #5B5B5B33;
  cursor: pointer;

  input {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ clicked }) => clicked ? "#7070708F" : "#FFF"};
    border-radius: 10px;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
  }
`;

export default ValueCardContainer;