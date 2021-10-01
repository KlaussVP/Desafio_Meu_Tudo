/* eslint-disable react/prop-types */
import React from "react";
import LoanCardContainer from "./styles";

export default function LoanCard({image, text, limit}) {
	const convertedLimit = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(limit);

	return (
		<LoanCardContainer limit={limit}>
			<img className="icon" src={image}/>
			<h2>{text}</h2>
			{ limit !== 0 
				? <p>Até {convertedLimit}</p>
				: <></>
			}
			<div className="blocked"></div>
		</LoanCardContainer>
	);
}
