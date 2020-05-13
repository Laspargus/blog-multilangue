import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LanguageChoice from "./languagechoice";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/">Home</Link>
        </div>
        <ul className="nav row">
          <li className="mr-5">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <LanguageChoice />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
