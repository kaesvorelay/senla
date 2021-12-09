import "../style.css";
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class All extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Main />
        <Aside />
        <Footer />
        <Link to="hello">Go</Link>
      </div>
    );
  }
}

export default All;
