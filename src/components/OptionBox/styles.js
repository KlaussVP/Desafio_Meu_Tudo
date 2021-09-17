import styled from "styled-components";

const OptionBoxContainer = styled.div`
  height: 203px;
  width: 345px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-left: 5px solid #D22688;
  border-radius: 10px;
  box-shadow: 0px 5px 10px #5B5B5B33;
  background: #FFF;

  .h-line {
    height: 0.5px;
    width: 310px;
    background: #7070708F;
    margin: 8px 0 0 7px;
  }
`;

const UpperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px 0 0 4px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 63px;
    width: 63px;
    border-radius: 10px;
    border: 1px solid #7070708F;

    img {
      height: 38.5px;
      width: 38.5px;
    }
  }

  .general-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    .installments {
      font-size: 12px;
      line-height: 15px;
      font-weight: 600;
    }

    h2 {
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
      color: #D22688;
      margin: 3px 0;
    }

    .total-amount {
      font-size: 12px;
      line-height: 15px;
    }
  }

  .v-line {
    height: 63px;
    width: 0.5px;
    background: #7070708F;
  }

  .rate {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    p {
      font-size: 12px;
      line-height: 15px;
    }

    .rate-amount {
      font-size: 13px;
      line-height: 16px;
      font-weight: 700;
    }
  }
`;

const LowerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 7px;

  .forecast {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 3px;
    
    p {
      font-size: 12px;
      line-height: 15px;
      margin-right: 3px;
    }

    .question-icon {
      font-size: 15px;
      color: #D22688;
    }
  }

  & > p {
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
  }
`;

const Hire = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #D22688;

  p {
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    margin-right: 3px;
  }

  .arrow-icon {
    font-size: 15px;
  }
`;

export {
  OptionBoxContainer,
  UpperBox,
  LowerBox,
  Hire
};