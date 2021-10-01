import styled from "styled-components";

const LoanCardContainer = styled.div`
  height: 162px;
  width: 163px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ limit }) => limit === 0 ? "center" : "space-around"};
  align-items: flex-start;
  padding: 17px;
  margin-bottom: 15px;
  background: #FFF;
  border-radius: 20px;
  box-shadow: 0px 5px 10px #5B5B5B33;

  .icon {
    height: 43.5px;
    width: 43.5px;
    margin-top: 11px;
    margin-bottom: ${({ limit }) => limit === 0 ? "10px" : "5px"};
  }

  h2 {
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    line-height: 15px;
    color: #D22688;
    margin-bottom: 10px;
  }

  .blocked {
    display: ${({ limit }) => limit === 0 ? "block" : "none"};
    position: absolute;
    top: 0;
    right: 0;
    height: 162px;
    width: 163px;
    background: #FFF;
    border-radius: 20px;
    opacity: 85%;
  }
`;

export default LoanCardContainer;
