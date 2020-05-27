import React from "react";
import "./history-paragraph-item.styles.scss";

const HistoryParagraph = props => {
  return (
    <div>
      <div className="history-paragraph d-flex">
        {/** PARAGRAPH */}
        <div className=" text-lg-right pl-md-5">
          <h3> {props.title} </h3>
          <p> &nbsp; {props.text} </p>
        </div>

        {/** Qoute Container*/}
        <div className="quote notepaper d-none d-md-flex col-4 px-4 text-right align-items-center font-italic">
          <blockquote>
            {/** Qoute Start */}
            <div className="icon mx-n2 pt-3">
              <ion-icon name="quote"></ion-icon>
            </div>

            {/** Qoute Content */}
            <p> &nbsp; {props.qoute}</p>

            {/** Qoute End */}
            <div className="d-flex justify-content-end icon mx-n2">
              <ion-icon name="quote"></ion-icon>
            </div>
          </blockquote>
        </div>
      </div>
      <hr className="my-lg-3" />
    </div>
  );
};

export default HistoryParagraph;
