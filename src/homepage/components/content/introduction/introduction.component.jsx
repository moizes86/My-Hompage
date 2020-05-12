import React from 'react';

import { connect } from 'react-redux';

import ListItemLink from '../../list-item-link/list-item-link.component';

import './introduction.styles.scss';

const Introduction = ({sections}) => {
  return (
    <div className='introduction'>
      <div className='center'>
        <h1>Hey, I'm Moshe,</h1>
        <h2>a junior web developer looking for an entry position.</h2>
      </div>
      <ul className='bottom'>
      {
        sections.map((section, idx)=> <ListItemLink key={idx} section={section} />)
      }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Introduction);
