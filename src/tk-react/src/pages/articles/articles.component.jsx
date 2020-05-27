import React, {useEffect} from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import PageTitle from "../../components/page-title/page-title.component";
import ArticlesArray from "./articlesArray/articles.array";
import ArticlesTopics from "./articles-topics/articles-topics.component";
import ArticleItem from "./article-item/article-item.component";

import "./articles.styles.scss";

export default function Articles() {
  const pageTitle = "מאמרים";
  const articles = ArticlesArray;
  let { path } = useRouteMatch();


  // ComponentDidMount? Start from the top!
  // Problem was: Clicking on the <Link>s at the homepage would
  // go to the articles but wouldn't start from the top, but 
  // from its position in the homepage window.
  
  useEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="articles">
      <Link to={path}>
        <PageTitle title={pageTitle} />
      </Link>

      <Switch>
        <Route exact path={path}>
          <ArticlesTopics articlesArr={articles} />
        </Route>

        <Route path={`${path}/:articleId`}>
          <ArticleItem articlesArr={articles} />
        </Route>
      </Switch>
    </div>
  );
}
