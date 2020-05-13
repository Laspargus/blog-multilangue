import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LanguageChoice from "./languagechoice";

const Navbar = () => {
  return (
    <div className="row">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <LanguageChoice />
    </div>
  );
};

export default Navbar;
