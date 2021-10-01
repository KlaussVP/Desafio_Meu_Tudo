import styled from "styled-components";

const ModelContainer = styled.header`
  height: 56px;
  background: #000;
  border-bottom-right-radius: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #FFF;
  padding: 10px 35px 10px 10px;
  margin-bottom: 30px;

  .arrow-icon {
    font-size: 27px;
    margin: 2px 0 0 5px;
  }

  h1 {
    flex-grow: 1;
    margin-top: 1px;
    font-size: 17px;
    line-height: 20px;
    -webkit-text-stroke: 0.4px black;
    display: flex;
    justify-content: center;
  }
`;

export default ModelContainer;
