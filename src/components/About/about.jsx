import React from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <>
      <h1>
        <FormattedMessage id="about.title" />
      </h1>
      <p>
        <FormattedMessage id="about.description" />
      </p>
    </>
  );
};

export default About;
