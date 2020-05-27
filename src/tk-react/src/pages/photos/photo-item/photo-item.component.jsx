import React from "react";



  function PhotoItem({ topicId, imgNum }) {
    return (
      <div key={imgNum} className="col-sm-6 col-md-4 my-4 d-flex img-thumbnail">
        {/**LightBox2 */}
        <img
          alt={`${imgNum}`}
          src={require(`../../../assets/gallery/${topicId}/${imgNum}.jpg`)}
          className="img-fluid"
        />
      </div>
    );
  }

  export default PhotoItem;