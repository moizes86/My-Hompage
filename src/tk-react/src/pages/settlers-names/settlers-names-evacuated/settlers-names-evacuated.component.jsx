import React from "react";

const SettlersNamesEvacuated = props => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {/* Map Evacuated List */}
        {props.namesEvacuated.map((el, idx) => (
          <div key={idx} className="col-sm-6 col-lg-4 text-center card mt-2">
            <img src={el.imgSRC} className=" p-1" alt="" />
            <p>
              <b>{el.name}</b>
            </p>

            {/* Map Siblings List Inside EvacuatedList Object */}
            <div>
              {el.siblings.map((el, idx) => (
                <div key={idx}>
                  <p>
                    <b>{el.name}</b>
                    {` `} {el.relation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/** Others */}
      <div className="container p-2 my-4">
        <p>
          <b>נחמה בת זכריה</b>- עברה לפתח תקווה
        </p>
        <p>
          <b>מרים בת יהודה</b>- עברה לפתח תקווה
        </p>
        <p>
          <b>מרים בת מעודד</b>- עברה
        </p>
      </div>
    </div>
  );
};
export default SettlersNamesEvacuated;
