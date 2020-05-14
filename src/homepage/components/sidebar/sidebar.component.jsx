import React from 'react';

import PersonalInfo from './personal-info/personal-info.component';
import Navigation from './navigation/navigation.component';
import GetInTouch from './get-in-touch/get-in-touch.component';

import './sidebar.styles.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <PersonalInfo />
      <Navigation />
      <GetInTouch />
    </div>
  );
};

export default Sidebar;
