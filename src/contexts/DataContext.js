/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const DataContext = createContext();
export default DataContext;

export function DataProvider({ children }) {
	const [margins, setMargins] = useState({});
	const [chosenValue, setChosenValue] = useState(0);
	const [chosenPeriod, setChosenPeriod] = useState(0);

	return (
		<DataContext.Provider value={
			{ 
				margins,
				setMargins,
				chosenValue,
				setChosenValue,
				chosenPeriod,
				setChosenPeriod
			}
		}>
			{children}
		</DataContext.Provider>
	);
}
