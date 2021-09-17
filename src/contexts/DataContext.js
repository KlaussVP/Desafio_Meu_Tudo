import React, { createContext, useState } from 'react';

const DataContext = createContext();
export default DataContext;

export function DataProvider({ children }) {
  const [margins, setMargins] = useState({});
  const [chosenValue, setChosenValue] = useState(0);

  return (
    <DataContext.Provider value={
      { 
        margins,
        setMargins,
        chosenValue,
        setChosenValue
      }
    }>
      {children}
    </DataContext.Provider>
  );
}
