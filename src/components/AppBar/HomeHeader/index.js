import axios from "axios";
import { VscBell } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderMessage } from "./styles";
import logo from "../../../../public/images/tudo-logo-1.png";

export default function HomeHeader() {
  const [availableCredit, setAvailableCredit] = useState(0);

  useEffect(() => {
    axios.get(`https://demo7273790.mockable.io/margins`, )
    .then(resp => {
      setAvailableCredit(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resp.data.totalMaxValue));
    });
  },[]);

  return (
    <HeaderContainer>
      <div className="logo"><img src={logo}/></div>
      <HeaderMessage>
        <h1>Olá, José Carlos</h1>
        <p>Seu crédito disponível é de</p>
        <p className="total-credit">{availableCredit}</p>
      </HeaderMessage>
      <VscBell className="bell-icon"/>
      <div className="expand"><IoIosArrowDown className="arrow-icon"/></div>
    </HeaderContainer>
  );
}