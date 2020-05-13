import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LanguageContext, { withLanguage } from "../Context/LanguageContext";

const LanguageChoice = ({ lanProps }) => {
  return (
    <>
      <button onClick={lanProps.setEN}>EN</button>
      <button onClick={lanProps.setFR}>FR</button>
    </>
  );
};
export default withLanguage(LanguageChoice);
