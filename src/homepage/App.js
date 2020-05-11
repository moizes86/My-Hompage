import React from 'react';
import Content from './components/content/content.component';
import Sidebar from './components/sidebar/sidebar.component';
import './App.styles.scss';

const AppHomepage = () => {
  return (
    <div className='homepage'>
      <Sidebar />
      <Content />
    </div>
  );
};

export default AppHomepage;
