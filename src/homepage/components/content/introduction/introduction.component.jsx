import React from 'react';

import ListItemLink from '../../list-item-link/list-item-link.component';

import './introduction.styles.scss';

const Introduction = (props) => {
  return (
    <div className='introduction'>
      <div className='center'>
        <h1>Hey, I'm Moshe,</h1>
        <h2>a junior web developer looking for an entry position.</h2>
      </div>
      <ul className='bottom'>
        <ListItemLink section='portfolio' />
        <ListItemLink section='cv' />
        <ListItemLink section='contact' />
      </ul>
    </div>
  );
};

export default Introduction;
