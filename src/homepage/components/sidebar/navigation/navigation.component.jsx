import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ListItemLink from '../../list-item-link/list-item-link.component';

import './navigation.styles.scss';

const Navigation = ({ sections, history, match }) => {
  // const sectionsArr = ['portfolio', 'cv', 'contact'];

  return (
    <div className='navigation'>
      <ul>
        {sections.map((section, idx) => (
          <ListItemLink key={idx} section={section} className={`${match}`} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Navigation));
