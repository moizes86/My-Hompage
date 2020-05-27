import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import './photos-topics.styles.scss';

 function PhotosTopics() {
    let {  url } = useRouteMatch();

    const linksArray = [
      {
        id: 1,
        title: `החיים בכנרת`,
        src: require("../../../assets/gallery/life-in-kineret/6.jpg"),
        nestedURL: "life-in-kineret"
      },
      {
        id: 2,
        title: `בית המוטור`,
        src: require("../../../assets/gallery/bet-hamotor/3.jpg"),
        nestedURL: "bet-hamotor"
      },
      {
        id: 3,
        title: `בית הקברות בכנרת`,
        src: require("../../../assets/gallery/kineret-cemetery/11.jpg"),
        nestedURL: "kineret-cemetery"
      }
    ];

    return (
      <div className="gallery d-flex row p-3 ">
        {linksArray.map(link => (
          <div key={link.id} className="col-md-4 my-4 image-container">
            <Link to={`${url}/${link.nestedURL}`} className="">
              <img alt="" src={link.src} className="img-fluid " />
            </Link>
            <p className="text-center p-2">{link.title}</p>
          </div>
        ))}
      </div>
    );
  }

  export default PhotosTopics;