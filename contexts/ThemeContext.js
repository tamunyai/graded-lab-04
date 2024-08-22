import { createContext, useContext, useState } from 'react';
import { Colors } from '../constants';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Colors.light);

  const toggleTheme = () => {
    setTheme(theme === Colors.light ? Colors.dark : Colors.light);
  };

  const updateTheme = (newTheme) => {
    setTheme({ ...theme, ...newTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
