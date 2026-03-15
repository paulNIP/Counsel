import React, { createContext, useState, useContext } from 'react';

export type Theme = 'light' | 'dark';

const ThemeContext = createContext({
  theme: 'light' as Theme,
  setTheme: (theme: Theme) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
