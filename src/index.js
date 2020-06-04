import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// Components
import AppHomepage from './homepage/App';
import AppTMDB from './tmdb-movies-search/src/App';
import TKReact from './tk-react/src/App';
import GlobalTrekking from './global-trekking/global-trekking-index';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import * as serviceWorker from './serviceWorker';

// Redux
import { Provider } from 'react-redux';
import tmdbStore from './tmdb-movies-search/src/redux/store';
import homepageStore from './homepage/redux/store';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { tmdbTheme } from './tmdb-movies-search/src/theme.styles';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />

    {/* REDIRECT TO HOMEPAGE */}
    <Route exact path='/'>
      <Redirect to='/homepage' />
    </Route>

    {/* HOMEPAGE */}
    <Provider store={homepageStore}>
      <Route path='/homepage' component={AppHomepage} />
    </Provider>

    {/* TMDB */}
    <Route path='/tmdb'>
      <Provider store={tmdbStore}>
        <ThemeProvider theme={tmdbTheme}>
          <AppTMDB />
        </ThemeProvider>
      </Provider>
    </Route>

    {/* TK-REACT */}
    <Route path='/tk-react'>
      <TKReact />
    </Route>

    {/* GLOBAL-TREKKING */}
    <Route path='/global-trekking'>
      <GlobalTrekking />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
