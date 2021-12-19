import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemProvider";

const useTheme = () => {
  const value: { isDark: boolean; setIsDark?: any } = useContext(ThemeContext);
  return value;
};

export default useTheme;
