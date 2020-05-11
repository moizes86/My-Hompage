import React from 'react';
import ListItemLink from '../../list-item-link/list-item-link.component';
import { withRouter } from 'react-router-dom';

import './navigation.styles.scss';


const Navigation = ({ history, match }) => {
  return (
    <div className='navigation'>
      <ul>
      <ListItemLink section='portfolio' className='sidebar-link'/>
      <ListItemLink section='cv' className='sidebar-link'/>
      <ListItemLink section='contact' className='sidebar-link'/>

        
          {/*
            </ul><li className='sidebar-link'
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
          **/}
      </ul>
    </div>
  );
};

export default withRouter(Navigation);
