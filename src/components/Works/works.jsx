import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Works = () => {
  const projects = ["platon", "sedal", "solan"];
  return (
    <>
      <h1>
        <FormattedMessage id="works.title" />
      </h1>
      <p>
        <FormattedMessage id="works.description" />
      </p>
      <div className="row">
        {projects.map((project, index) => (
          <div className="card col-md-4">
            <h3>{project}</h3>
            <p>
              <Link
                key={index}
                className="btn btn-info"
                to={"/works/" + project + "-study-case"}
              >
                See Detail
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;
