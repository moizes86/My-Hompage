import React from "react";

const SettlersNamesPassedAway = props => {
  return (
    <div className="d-flex flex-wrap">
      {props.namesPassedAway.map((el, idx) => (
        <div
          key={idx}
          className="col-6 col-md-4 col-lg-3 card text-center p-2"
        >
          <p className="m-auto">{el.name}</p>
          <p className="m-auto">אב: {el.father}</p>
        </div>
      ))}
    </div>
  );
};
export default SettlersNamesPassedAway;
