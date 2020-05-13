import React from "react";
import { FormattedMessage } from "react-intl";

const Works = () => {
  return (
    <>
      <h1>
        <FormattedMessage id="works.title" />
      </h1>
      <p>
        <FormattedMessage id="works.description" />
      </p>
    </>
  );
};

export default Works;
