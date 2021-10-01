import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ValuesPage, SuggestedValues, OtherValue } from "./styles"; 
import ValueCard from "../../components/ValueCard";
import Button from "../../components/Button";
import DataContext from "../../contexts/DataContext";
import { currencyToNumber } from "../../utils/helpers";
import { useHistory } from "react-router";

export default function Values() {
	const [values, setValues] = useState([]);
	const [otherValue, setOtherValue] = useState("");
	const { setChosenValue } = useContext(DataContext);
	const history = useHistory();

	useEffect(() => {
		axios.get("https://demo7273790.mockable.io/suggestedvalues")
			.then(resp => {
				setValues(resp.data.suggestedValues);
			});
	},[]);

	function handleChoosing(choosedValue) {
		const numberValue = currencyToNumber(choosedValue);
		setChosenValue(numberValue);
		setOtherValue(numberValue);
	}

	function sendValue(e) {
		e.preventDefault();
		history.push("/period");
	}

	return (
		<ValuesPage onSubmit={e => sendValue(e)}>
			<h1>De quanto você precisa?</h1>
			<SuggestedValues>
				{values.map((v, i) => <ValueCard key={i} value={v}/>)}
			</SuggestedValues>
			<OtherValue>
				<label htmlFor="otherValue">Outro valor</label>
				<input
					id="otherValue"
					placeholder="R$ 00,00"
					value={otherValue}
					onChange={(e) => handleChoosing(e.target.value)}
				/>
			</OtherValue>
			<Button />
			<p>Simule pela parcela</p>
		</ValuesPage>
	);
}
