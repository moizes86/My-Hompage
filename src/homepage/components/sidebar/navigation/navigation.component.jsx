import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LinkInternal from '../../link-internal/link-internal.component';

import './navigation.styles.scss';

const Navigation = ({ match, location, homepageSections }) => {

  return (
    <div className='navigation'>
      <ul>
        {homepageSections.map((section, idx) => (
          <LinkInternal
            key={idx}
            section={section}
            text={section.toUpperCase()}
            inHomepage={true}
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
