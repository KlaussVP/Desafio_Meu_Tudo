import styled from "styled-components";

const ValuesPage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;

  h1 {
    align-self: flex-start;
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  & > p {
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    color: #D22688;
    text-decoration: underline;
    margin-top: 15px;
  }
`;

const SuggestedValues = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const OtherValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  label {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    margin-right: 10px;
  }

  input {
    width: 106px;
    padding: 10px 0;
    text-align: center;
    border: none;
    background: none;
    border-bottom: 1px solid #7070708F;
    font-family: inherit;
    font-size: 16px;
    line-height: 19px;

    ::placeholder {
      color: #000;
    }
  }
`;

export {
  ValuesPage,
  SuggestedValues,
  OtherValue
};