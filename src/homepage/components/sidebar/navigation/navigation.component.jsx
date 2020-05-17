import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ListItemLink from '../../list-item-link/list-item-link.component';

import './navigation.styles.scss';

const Navigation = ({ match, location, sectionsLinks }) => {

  return (
    <div className='navigation'>
      <ul>
        {sectionsLinks.map((section, idx) => (
          <ListItemLink
            key={idx}
            section={section}
            active={
              `${match.path}/${section}` === location.pathname ? true : false
            }
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Navigation));
