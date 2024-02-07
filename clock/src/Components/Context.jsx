// importing required components
import React, { createContext, useState } from "react";

// exporitng context
export const AppContext = createContext();

// declaring a parent context
const ParentContext = ({ children }) => {
  const [focus, setFocus] = useState(false);
  const [dark, setDark] = useState(true);

  //   returning the context with required
  return (
    <AppContext.Provider
      value={{
        dark,
        setDark,
        focus,
        setFocus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
