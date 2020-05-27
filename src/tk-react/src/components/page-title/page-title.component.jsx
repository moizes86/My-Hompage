import React from "react";
import "./page-title.styles.scss";

const PageTitle = props => {
  return (
    <div className="page-title mt-1 mt-md-3">
      <h1>
        {props.title}
      </h1>
      <hr className="my-lg-3" />
    </div>
  );
};

export default PageTitle;
