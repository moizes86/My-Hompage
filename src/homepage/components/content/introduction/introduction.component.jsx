import React from 'react';

import { connect } from 'react-redux';

import ListItemLink from '../../list-item-link/list-item-link.component';

import './introduction.styles.scss';

const Introduction = ({sectionsLinks}) => {
  return (
    <div className=' introduction'>
      <div className='center'>
        <h1>Hey, I'm Moshe,</h1>
        <h2>a front end web developer looking for a position.</h2>
      </div>
      <ul className='bottom'>
      {
        sectionsLinks.map((section, idx)=> <ListItemLink key={idx} section={section} />)
      }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Introduction);
