import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { OptionBoxContainer, UpperBox, LowerBox, Hire } from "./styles";
import logo from "../../../public/images/tudo-logo-1.png";
import { Link } from "react-router-dom";

export default function OptionBox({ contractValue, installments, nominalRate }) {
  const parcialAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(contractValue);
  
  return (
    <OptionBoxContainer>
      <UpperBox>
        <div className="logo"><img src={logo}/></div>
        <div className="general-data">
          <p className="installments">{installments} parcelas de</p>
          <h2>{parcialAmount}</h2>
          <p className="total-amount">Total de R$ 5.030,00</p>
        </div>
        <div className="v-line"></div>
        <div className="rate">
          <p>com taxa de</p>
          <p className="rate-amount">{(nominalRate) * 100}% a.m.</p>
        </div>
      </UpperBox>
      <div className="h-line"></div>
      <LowerBox>
        <div className="forecast">
          <p>Previsão de pagamento</p>
          <AiOutlineQuestionCircle className="question-icon"/>
        </div>
        <p>19 de maio a 01 de junho de 2020</p>
      </LowerBox>
      <Link to="/">
        <Hire>
          <p>Contratar</p>
          <IoIosArrowForward className="arrow-icon"/>
        </Hire>
      </Link>
    </OptionBoxContainer>
  );
}