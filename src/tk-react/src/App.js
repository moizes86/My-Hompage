import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Articles from './pages/articles/articles.component';
import History from './pages/history/history.component';
import Links from './pages/links/links.component';
import Photos from './pages/photos/photos.component';
import SettlersNames from './pages/settlers-names/settlers-names.component';
import ButtonHome from '../../components/button-home/button-home.component';

import './App.scss';

export default function TKReact() {
  return (
    <div>
    <ButtonHome />
    <Router>
      <div className='App-TK-React'>
        <Header />

        <div className='m-2 p-md-3 mt-md-4 page-container'>
          <Switch>
            <Route exact path='/tk-react' component={Homepage}></Route>
            <Route path='/tk-react/articles' component={Articles}></Route>
            <Route path='/tk-react/history/' component={History}></Route>
            <Route path='/tk-react/links' component={Links}></Route>
            <Route path='/tk-react/photos' component={Photos}></Route>
            <Route path='/tk-react/settlers-names' component={SettlersNames}></Route>
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}
