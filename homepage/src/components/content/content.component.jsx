import React from 'react';

import { Route, withRouter } from 'react-router-dom';

// COMPONENTS
import Introduction from './introduction/introduction.component';
import Portfolio from './portfolio/portfolio.component';
import MyCV from './my-cv/my-cv.component';
import ContactMe from './contact-me/contact-me.component';

import './content.styles.scss';

const Content = ({ match }) => {
  const componentsArr = [
    { name: Introduction, route: '' },
    { name: Portfolio, route: 'portfolio' },
    { name: MyCV, route: 'cv' },
    { name: ContactMe, route: 'contact' },
  ];

  return (
    <div className='content'>
      {componentsArr.map((component, idx) => (
        <Route exact path={`${match.url}${component.route}`} key={idx} component={component.name} />
      ))}
    </div>
  );
};
export default withRouter(Content);
