import React from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const StudyCase = () => {
  let { clientSlug } = useParams();
  const slug = clientSlug.split("-")[0];

  return (
    <div className="mt-5">
      <h1>
        <FormattedMessage id={slug + ".title"} />
      </h1>
      <p>
        <FormattedMessage id={slug + ".description"} />
      </p>
    </div>
  );
};

export default StudyCase;
