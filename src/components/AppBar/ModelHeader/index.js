import React from "react";
import { useLocation } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import ModelContainer from "./styles";

export default function ModelHeader() {
  const currentRoute = useLocation();
  
  return (
    <ModelContainer>
      <IoIosArrowBack className="arrow-icon"/>
      { currentRoute.pathname.includes("values") 
        ? <h1>Valores</h1>
        : ( currentRoute.pathname.includes("period") 
          ? <h1>Período</h1>
          : <h1>Opções</h1>
        )
      }
    </ModelContainer>
  );
}