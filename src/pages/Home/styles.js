import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;

  h1 {
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
  }
`;

const Loans = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 7px;
  padding-left: 1px;
`;

export { 
	Container,
	Loans
};