import React, { useEffect } from 'react';
import Content from './components/content/content.component';
import Sidebar from './components/sidebar/sidebar.component';

// REDUX
import { connect } from 'react-redux';
import {onMounted} from './redux/homepage.actions'; 

// LOADER
import {LoaderContainer} from '../components/loader/loader.styles';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// STYLES
import './App.styles.scss';

const AppHomepage = (props, { loading }) => {
useEffect(()=> props.onMounted);

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

const mapDispatchToProps = dispatch => ({
  mounted: ()=>dispatch(onMounted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppHomepage);
