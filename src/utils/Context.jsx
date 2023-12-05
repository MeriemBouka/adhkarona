import { createContext, useState } from "react";

export const ThemeContexte = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContexte.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContexte.Provider>
  );
};
