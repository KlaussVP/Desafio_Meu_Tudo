import styled from "styled-components";

const ButtonContainer = styled.div`
  height: 40px;
  width: 166px;
  border-radius: 30px;
  cursor: pointer;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #D22688;
    border: none;
    cursor: pointer;
  }
  
  p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    color: #FFF;
  }
`;

export default ButtonContainer;