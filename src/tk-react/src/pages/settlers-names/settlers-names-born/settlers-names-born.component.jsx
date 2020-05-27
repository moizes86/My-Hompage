import React from "react";

const SettlersNamesBorn = props => {
  return (
      <div className="d-flex flex-wrap">
        {props.namesBorn.map((el, idx) => (
          <div
            key={idx}
            className="col-6 col-md-4 col-lg-3 card text-center p-2"
          >
            <p className="mb-0">{el.name}</p>
            <p className="mb-0">
              <b>אב: {` `} </b>
              {el.father}
              <br />
              <b>שנה: {` `} </b>
              {el.year}
            </p>
          </div>
        ))}
    </div>
  );
};
export default SettlersNamesBorn;
