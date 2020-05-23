import React from 'react';

import { connect } from 'react-redux';

import LinkInternal from '../../link-internal/link-internal.component';

import './introduction.styles.scss';

const Introduction = ({ homepageSections }) => {
  return (
    <div className=' introduction'>
      <div className='center'>
        <h1>Hey, I'm Moshe,</h1>
        <h2>a front end web developer looking for a position.</h2>
      </div>
      <ul className='bottom'>
        {homepageSections.map((section, idx) => (
          <LinkInternal
            key={idx}
            section={section}
            text={section.toUpperCase()}
            inHomepage={true}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Introduction);
