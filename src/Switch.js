// Switch.js
import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: "#2D2D2D", // dunkler Hintergrund
        color: "#F7EDE2",           // helle Schrift
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
      }}
      onClick={toggleTheme}
    >
      {theme === "dark" ? "ON" : "OFF"}
    </button>
  );
}

export default ThemeSwitch;
