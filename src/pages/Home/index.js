import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoanCard from "../../components/LoanCard";
import DataContext from "../../contexts/DataContext";
import icon1 from "../../../public/images/newLoan-2.png";
import icon2 from "../../../public/images/portability-2.png";
import icon3 from "../../../public/images/refinancing-2.png";
import icon4 from "../../../public/images/creditCard-2.png";
import { Container, Loans } from "./styles";

export default function Home() {
  const { margins, setMargins } = useContext(DataContext);

  useEffect(() => {
    axios.get(`https://demo7273790.mockable.io/margins`)
    .then(resp => setMargins(resp.data));
  },[]);

  return (
    <Container>
      <h1>Oportunidades</h1>
      <Loans>
        <Link to="/values"><LoanCard image={icon1} text={"Novo Empréstimo"} limit={6432.29}/></Link>
        <Link to="#"><LoanCard image={icon2} text={"Portabilidade"} limit={1419.54}/></Link>
        <Link to="#"><LoanCard image={icon3} text={"Refinanciamento"} limit={0}/></Link>
        <Link to="#"><LoanCard image={icon4} text={"Cartão de Crédito Consignado"} limit={0}/></Link>
      </Loans>
    </Container>
  );
}