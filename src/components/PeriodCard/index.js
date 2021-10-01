/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import DataContext from "../../contexts/DataContext";
import PeriodCardContainer from "./styles";

export default function PeriodCard ({ period }) {
	const { setChosenPeriod } = useContext(DataContext);
	const [clicked, setClicked] = useState(false);

	function handleClick(selectedPeriod) {
		setChosenPeriod(parseInt(selectedPeriod));
		setClicked(true);
	}

	function handleClickAway() {
		setClicked(false);
	}

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<PeriodCardContainer clicked={clicked}>
				<input 
					type="button" 
					value={period} 
					onClick={e => handleClick(e.target.value)}
				/>
			</PeriodCardContainer>
		</ClickAwayListener>
	);
}