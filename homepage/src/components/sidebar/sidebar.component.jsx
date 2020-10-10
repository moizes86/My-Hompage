import React from 'react';

import { connect } from 'react-redux';
import { onToggleNavbarDropdown } from '../../redux/homepage.actions';

import PersonalInfo from './personal-info/personal-info.component';
import Navigation from './navigation/navigation.component';
import GetInTouch from './get-in-touch/get-in-touch.component';

import './sidebar.styles.scss';

const Sidebar = ({ toggleNavbarDropdown }) => {
  return (
    <div className='sidebar'>
      <div className='hamburger' onClick={toggleNavbarDropdown}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <PersonalInfo />
      <Navigation />
      <GetInTouch />
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  toggleNavbarDropdown: () => dispatch(onToggleNavbarDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
