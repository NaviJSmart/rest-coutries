import React from "react";

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTeme] = React.useState("");
  const value = [theme, setTeme];
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
