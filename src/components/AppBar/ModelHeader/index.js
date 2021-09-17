import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import ModelContainer from "./styles";
import { Link } from "react-router-dom";

export default function ModelHeader() {
  const currentRoute = useLocation();
  const [lastRoute, setLastRoute] = useState("/");

  useEffect(() => {
    if (currentRoute.pathname === "/values") {
      setLastRoute("/");
    } else if (currentRoute.pathname === "/period") {
      setLastRoute("/values");
    } else if (currentRoute.pathname === "/result") {
      setLastRoute("/period");
    }
  },[currentRoute.pathname]);
  
  return (
    <ModelContainer>
      <Link to={lastRoute}><IoIosArrowBack className="arrow-icon"/></Link>
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