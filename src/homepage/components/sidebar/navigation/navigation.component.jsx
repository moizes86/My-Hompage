import React from 'react';
import { withRouter } from 'react-router-dom';

import './navigation.styles.scss';


// Styling for className 'sidebar-link' is in sidebar.styles.scss

const Navigation = ({ history, match }) => {
  return (
    <div className='navigation'>
      <ul>
        <li
          className='sidebar-link'
          onClick={() => history.push(`${match.url}/portfolio`)}
        >
          PORTFOLIO
        </li>
        <li
          className='sidebar-link'
          onClick={() => history.push(`${match.url}/cv`)}
        >
          MY CV
        </li>
        <li
          className='sidebar-link'
          onClick={() => history.push(`${match.url}/contact`)}
        >
          CONTACT ME
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navigation);
