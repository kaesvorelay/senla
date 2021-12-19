import React, { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext({ isDark: false });

interface ITheme {
  isDark: boolean;
  setIsDark: any;
}

const ThemProvider = ({ children }: any) => {
  const [isDark, setIsDark] = React.useState<ITheme | any>(false);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemProvider;
