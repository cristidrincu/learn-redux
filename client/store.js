//think about a store as an empty database or an empty object where we are going to put all of our information

import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer - the parent for all reducers in the app
import rootReducer from './reducers/index';

//import data like comments and posts
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts, //posts: posts - in es6, if the key and value are identical, posts: posts, we can just write posts
    comments //comments: comments - in es6, if the key and value are identical, comments: comments, we can just write comments
};

//both params are needed when creating a store, that's why we created a defaultState
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

//If we want to export a single value or to have a fallback value for our module, we use a default export:
export default store;