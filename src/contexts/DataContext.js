import React, { createContext, useState } from 'react';

const DataContext = createContext();
export default DataContext;

export function DataProvider({ children }) {
  const [margins, setMargins] = useState({});

  return (
    <DataContext.Provider value={
      { margins, setMargins }
    }>
      {children}
    </DataContext.Provider>
  );
}
