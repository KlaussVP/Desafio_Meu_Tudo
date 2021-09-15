import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-right-radius: 45px;
  background: #000;
  height: 164px;
  width: 100%;
  color: #FFF;

  .bell-icon {
    align-self: flex-start;
  }

  .expand {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -17.5px;
    left: 45%;
    background: #D22688;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    color: white;
  }

  .arrow-icon {
    font-size: 30px;
  }
`;

const HeaderMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 18px;
    line-height: 23px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 2px;
    -webkit-text-stroke: 0.4px black;
  }

  .total-credit {
    color: #D22688;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
  }
`;

export {
  HeaderContainer,
  HeaderMessage
}