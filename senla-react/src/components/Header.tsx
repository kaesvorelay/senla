import React from "react";
import { NavLink } from "react-router-dom";
import classNam from "classnames";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <header className={classNam("header", { dark: isDark })}>
      <h1 className="header-title">html document</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list_link">
            <NavLink to="#">html structure</NavLink>
          </li>
          <li className="nav-list_link">
            <NavLink to="#">inputs</NavLink>
          </li>
          <li className="nav-list_link">
            <NavLink to="#">table</NavLink>
          </li>
        </ul>
      </nav>
      <button className="toggle-theme" onClick={() => setIsDark(!isDark)}>
        Change theme
      </button>
    </header>
  );
};

export default Header;
