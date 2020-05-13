import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ListItemLink from '../../list-item-link/list-item-link.component';

import './navigation.styles.scss';

const Navigation = ({ match, location, sectionsLinks }) => {
  // console.log(props);

  return (
    <div className='navigation'>
      <ul>
        {sectionsLinks.map((section, idx) => (
          <ListItemLink
            key={idx}
            section={section}
            active={
              `${match.path}/${section}` === location.pathname
                ? true
                : false
            }
          />
        ))}
        {/**
            {console.log(`${match.path}/${sections[0]}` === location.pathname)}
            {console.log(location.pathname)}
          
          */}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Navigation));
