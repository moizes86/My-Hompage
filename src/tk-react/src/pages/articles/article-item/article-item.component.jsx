import React from "react";
import { useParams } from "react-router-dom";

import "./article-item.styles.scss";

export default function ArticleItem({ articlesArr }) {
  // get the article id from the route
  let params = useParams();

  // loop through articlesArr and get the article with same as the /:articleId
  const filteredArticle = articlesArr.filter(
    article => article.id === Number(params.articleId)
  );


  return (
    <div className="article-container py-4">

      <div className="text-center">
        {<h4> {filteredArticle[0].title} </h4>}
        {<h5> {filteredArticle[0].subtitle} </h5>}
      </div>

      <div className="article-content-container px-2">
        {filteredArticle[0].content}
      </div>
    </div>
  );
}
