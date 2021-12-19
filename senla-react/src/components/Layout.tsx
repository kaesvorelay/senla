import React, { useEffect } from "react";
import useTheme from "../hooks/useTheme";
import classNam from "classnames";

const Layout = ({ children }: any) => {
  const { isDark }: { isDark: boolean; setIsDark?: any } = useTheme();

  return <div className={classNam("layout", { dark: isDark })}>{children}</div>;
};

export default Layout;
