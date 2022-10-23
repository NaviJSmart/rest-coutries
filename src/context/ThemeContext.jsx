import React, { useContext } from "react";
import { useLocalStorage } from '@rehooks/local-storage';
const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme ? 'dark':'light' );

  const toggleHandler = (switcher) => {
    switcher ? setTheme('dark') : setTheme('light')
  }
  
  const value = [theme, toggleHandler];
  
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if(!context) {
    throw Error (`There is no context`)
  }

  return context
}

export default ThemeContextProvider;
