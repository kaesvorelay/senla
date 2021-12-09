import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
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
      </header>
    );
  }
}

export default Header;
