import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultContainer from "./styles";
import OptionBox from "../../components/OptionBox";

export default function Result() {
	const [results, setResults] = useState({});

	useEffect(() => {
		axios.get("https://demo7273790.mockable.io/simulation")
			.then(resp => {
				setResults(resp.data);
			});
	},[]);

	return (
		<ResultContainer>
			<h1>Escolha um banco.</h1>
			<OptionBox 
				contractValue={results.contractValue} 
				installments={results.numberOfInstallments}
				nominalRate={results.nominalRate}
			/>
		</ResultContainer>
	);
}
