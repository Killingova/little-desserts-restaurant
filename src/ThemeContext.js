// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Diese Funktion schaltet zwischen "light" und "dark" um
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Benutzerdefinierter Hook, um ThemeContext zu verwenden
export const useTheme = () => {
  return useContext(ThemeContext);
};
