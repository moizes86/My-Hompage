import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homepageReducer from './homepage.reducer';

const middlewares =[thunk];

if( process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}


console.log(process.env);
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === 'development');


const homepageStore = createStore(homepageReducer, applyMiddleware(...middlewares));

export default homepageStore;
