import React from "react";

const SettlersNamesOlim = props => {
  return (
    <div className="d-flex flex-wrap">
      {props.namesOlim.map((el, idx) => (
        <div
          key={idx}
          className="col-6 col-sm-4 col-md-3 p-2 card text-center"
        >
          <p className="m-auto">{el}</p>
        </div>
      ))}
    </div>
  );
};
export default SettlersNamesOlim;
