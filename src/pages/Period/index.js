import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PeriodPage, SuggestedInstallments, OtherPeriod } from "./styles"; 
import PeriodCard from "../../components/PeriodCard";
import Button from "../../components/Button";
import DataContext from "../../contexts/DataContext";
import { useHistory } from "react-router";

export default function Period() {
	const [period, setPeriod] = useState([]);
	const [otherPeriod, setOtherPeriod] = useState("");
	const { chosenPeriod, setChosenPeriod } = useContext(DataContext);
	const history = useHistory();

	useEffect(() => {
		axios.get("https://demo7273790.mockable.io/suggestedperiods")
			.then(resp => {
				setPeriod(resp.data.suggestedInstallments);
			});
	},[]);

	function handleChoosing(choosedPeriod) {
		setChosenPeriod(parseInt(choosedPeriod));
		setOtherPeriod(parseInt(choosedPeriod));
	}

	function sendPeriod(e) {
		e.preventDefault();
		history.push("/result");
		console.log(chosenPeriod);
		console.log(typeof(chosenPeriod));
	}

	return (
		<PeriodPage onSubmit={e => sendPeriod(e)}>
			<h1>Em quanto tempo você quer pagar?</h1>
			<SuggestedInstallments>
				{period.map((p, i) => <PeriodCard key={i} period={p}/>)}
			</SuggestedInstallments>
			<OtherPeriod>
				<input
					id="otherPeriod"
					type="number"
					min="1"
					placeholder="00"
					value={otherPeriod}
					onChange={(e) => handleChoosing(e.target.value)}
				/>
				<label htmlFor="otherPeriod">meses</label>
			</OtherPeriod>
			<Button />
		</PeriodPage>
	);
}
