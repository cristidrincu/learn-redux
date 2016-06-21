//this will contain all of our reducers

//we create a reducer for each of our application state
//in our case, if we look at store.js, we have a posts state and a comments state
//const defaultState = {
    //posts,
    //comments
//};

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;