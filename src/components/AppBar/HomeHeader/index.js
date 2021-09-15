import axios from "axios";
import { VscBell } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderMessage } from "./styles";

export default function HomeHeader() {
  const [availableCredit, setAvailableCredit] = useState(0);

  // console.log(process.env.API_BASE_URL);

  useEffect(() => {
    axios.get(`https://demo7273790.mockable.io/margins`)
    .then(resp => {
      console.log(resp.data);
      setAvailableCredit(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resp.data.totalMaxValue));
    });
  },[]);

  return (
    <HeaderContainer>
      <div><img id="logo" src="/public/images/tudo-logo-1.png"/></div>
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