import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LanguageContext, { withLanguage } from "../Context/LanguageContext";
import fr from "../../assets/img/fr.png";
import en from "../../assets/img/uk.png";
import "./languagechoice.css";

const LanguageChoice = ({ lanProps }) => {
  return (
    <>
      {lanProps.language === "fr" ? (
        // <button onClick={lanProps.setEN}>
        <img onClick={lanProps.setEN} src={en} alt="EN" />
      ) : (
        // </button>
        // <button onClick={lanProps.setFR}>
        <img onClick={lanProps.setFR} src={fr} alt="FR" />
        // </button>
      )}
    </>
  );
};
export default withLanguage(LanguageChoice);
