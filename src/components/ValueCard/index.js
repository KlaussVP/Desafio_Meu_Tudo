/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import DataContext from "../../contexts/DataContext";
import ValueCardContainer from "./styles";
import { currencyToNumber } from "../../utils/helpers";

export default function ValueCard ({ value }) {
	const { setChosenValue } = useContext(DataContext);
	const [clicked, setClicked] = useState(false);
	const convertedValue = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

	function handleClick(selectedValue) {
		const numberValue = currencyToNumber(selectedValue);
		setChosenValue(numberValue);
		setClicked(true);
	}

	function handleClickAway() {
		setClicked(false);
	}

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<ValueCardContainer clicked={clicked}>
				<input 
					type="button" 
					value={convertedValue} 
					onClick={e => handleClick(e.target.value)}
				/>
			</ValueCardContainer>
		</ClickAwayListener>
	);
}
