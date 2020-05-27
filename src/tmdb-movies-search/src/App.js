import React, { useEffect } from 'react';
import GlobalFonts from './assets/fonts/fonts';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import MovieContainer from './components/movie-container/movie-container.component';
import MyModal from './components/my-modal/my-modal.component';
import ButtonHome from '../../components/button-home/button-home.component';

import { connect } from 'react-redux';
import { onFetchMovieStartAsync } from './redux/main-page/main-page.actions';

// * * * * STYLES * * * *//
import {
  AppBackgroundImage,
  FixedBackgroundGradient,
  AppPadding,
} from './App.styles';

import './index.css';

// LOADER
import { LoaderContainer } from '../../components/loader/loader.styles';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { CSSTransition } from 'react-transition-group';
import './transitions.css';

const AppTMDB = (props) => {
  //  ** ** ** **
  // SETTINGS
  const { mounted, isLoading, data } = props;
  const backgroundImg = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
  };

      
  useEffect(() => {
    props.onFetchMovieStartAsync(data.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  ** ** ** **
  // RENDER
  return isLoading ? (
    <LoaderContainer className='spinner-app'>
      <Loader type='TailSpin' color='#00BFFF' />
    </LoaderContainer>
  ) : (
    <CSSTransition in={mounted} appear={true} timeout={500} classNames='fade'>
      <AppBackgroundImage style={backgroundImg}>
        <FixedBackgroundGradient>
          <GlobalFonts />
          <AppPadding>
            <MyModal />
            <ButtonHome />
            <Header />
            <MovieContainer />
            <Footer />
          </AppPadding>
        </FixedBackgroundGradient>
      </AppBackgroundImage>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => {
  const { movieID, data, mounted, isLoading } = state.mainPage;
  return { movieID, data, mounted, isLoading };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchMovieStartAsync: (movieID) => dispatch(onFetchMovieStartAsync(movieID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppTMDB);
