import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppHomepage from './homepage/App';
import AppTMDB from './tmdb-movies-search/src/App';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import tmdbStore from './tmdb-movies-search/src/redux/store';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { tmdbTheme } from './tmdb-movies-search/src/theme.styles';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' >
    <Redirect to='homepage' />
    </Route>

    <Route path='/homepage' component={AppHomepage} />

    <Route path='/a' exact>
      <Provider store={tmdbStore}>
        <ThemeProvider theme={tmdbTheme}>
          <AppTMDB />
        </ThemeProvider>
      </Provider>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
