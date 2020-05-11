import React from 'react';

import { Route, withRouter } from 'react-router-dom';

// COMPONENTS
import Introduction from './introduction/introduction.component';
import Portfolio from './portfolio/portfolio.component';
import MyCV from './my-cv/my-cv.component';
import ContactMe from './contact-me/contact-me.component';

import './content.styles.scss';

const Content = ({match}) => {
  console.log('CONTENT');
  return (
    <div className='content'>
        <Route exact path={`${match.url}/introduction`} component={Introduction} />
        <Route exact path={`${match.url}/portfolio`} component={Portfolio} />
        <Route exact path={`${match.url}/cv`} component={MyCV} />
        <Route exact path={`${match.url}/contact`} component={ContactMe} />
      </div>
  );
};

export default withRouter(Content);
