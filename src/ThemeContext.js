import React, { createContext, useContext, useState } from "react";

// 1. Erstelle den Kontext
const ThemeContext = createContext(undefined);

// 2. Erstelle den ThemeProvider, der den Kontext bereitstellt
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Standardwert: "light"

  // Funktion, die zwischen "light" und "dark" wechselt
  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Eigener Hook, um den ThemeContext einfacher zu verwenden
export const useTheme = () => useContext(ThemeContext);
