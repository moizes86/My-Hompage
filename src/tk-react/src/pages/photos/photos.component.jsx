import React from "react";
import PageTitle from "../../components/page-title/page-title.component";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox

import { SRLWrapper } from "simple-react-lightbox";

import PhotosTopics from "./photos-topics/photos-topics.component";
import PhotosByTopic from "./photos-by-topic/photos-by-topic.component";

import "./photos.styles.scss";

export default function Photos() {
  const pageTitle = "תמונות";
  const pageTitleLink = "/tk-react/photos";
  let { path } = useRouteMatch();

  return (
    <div className="photos ">

    {/** Page title is a link so going back to Topics is easier */}
      <Link to={pageTitleLink}>
        <PageTitle title={pageTitle} />
      </Link>

      <SimpleReactLightbox>

      <Switch>
        <Route exact path={path}>
          <PhotosTopics />
        </Route>

        <Route path={`${path}/:topicId`}>
        {/**LightBox Wrapper */}
          <SRLWrapper>
            <div className=" photos-container">
              <PhotosByTopic />
            </div>
          </SRLWrapper>
        </Route>
      </Switch>
      </SimpleReactLightbox>

    </div>
  );
}
