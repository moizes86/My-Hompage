import React from "react";
import { useParams } from "react-router-dom";
import PhotoItem from "../photo-item/photo-item.component";

function PhotosByTopic() {
  // Params === Topic
  let { topicId } = useParams();

  // Number of Images in Folder
  let imgNum;

  let markup = [];

  // Topic is a? imgNum= number of photos in this directory
  switch (topicId) {
    case "life-in-kineret":
      for (imgNum = 1; imgNum <= 6; imgNum++) {
        markup.push(
          <PhotoItem key={imgNum} topicId={topicId} imgNum={imgNum} />
        );
      }
      break;

    case "bet-hamotor":
      for (imgNum = 1; imgNum <= 15; imgNum++) {
        markup.push(
          <PhotoItem key={imgNum} topicId={topicId} imgNum={imgNum} />
        );
      }
      break;

    case "kineret-cemetery":
      for (imgNum = 1; imgNum <= 16; imgNum++) {
        markup.push(
          <PhotoItem key={imgNum} topicId={topicId} imgNum={imgNum} />
        );
      }
      break;

    default:
      topicId = "";
  }

  return markup;
}


export default PhotosByTopic;