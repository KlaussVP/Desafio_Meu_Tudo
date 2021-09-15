import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 83px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px 30px 30px;
  background: #FFF;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -3px 6px #B8B8B824;
`;

const MenuOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ isSelected }) => isSelected ? "#D22688" : "#000000"};

  .contracts {
    transform: rotate(180deg);
  }

  .icon {
    margin-top: 2px;
    margin-bottom: 4.5px;
    font-size: 23.5px;
    font-weight: 600;
  }

  .home, .doubts {
    font-size: 25.5px;
    margin-top: 0;
  }

  p {
    font-size: 10px;
    line-height: 13px;
    font-weight: 500;
  }
`;

export {
  FooterContainer,
  MenuOption
};