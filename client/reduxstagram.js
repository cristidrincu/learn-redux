import React from 'react'; //if there is no path, it means we are importing directly from node_modules
import { render } from 'react-dom'; //just the render method so we can work with the dom

import css from './styles/style.styl';

//import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//import react router dependencies
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                /* PhotoGrid is a child of Main - it can be accessed by Main using React.props.children**/
                <IndexRoute component={PhotoGrid}></IndexRoute>
                /* Single is a child of Main - it can be accessed by Main using React.props.children**/
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
