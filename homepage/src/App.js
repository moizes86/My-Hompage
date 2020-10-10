import React, { useState, useEffect } from 'react';
import Content from './components/content/content.component';
import Sidebar from './components/sidebar/sidebar.component';

// REDUX
import { connect } from 'react-redux';

// LOADER
import { LoaderContainer } from './components/loader/loader.styles';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// STYLES
import './App.scss';
import './App.styles.scss';

const AppHomepage = () => {

  const [loading, setLoadingState] = useState(true);
  useEffect(()=> setLoadingState(false), [])

  return loading ? (
    <LoaderContainer className='spinner-app'>
      <Loader type='TailSpin' color='#00BFFF' />
    </LoaderContainer>
  ) : (
    <div className='homepage'>
      <Sidebar />
      <Content />
    </div>
  );
};

const mapStateToProps = (state) => state;


export default connect(mapStateToProps)(AppHomepage);
