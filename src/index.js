import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import SignupCard from './components/signup/SignupCard.js';
import ActivityFeed from './components/activity-feed/ActivityFeed.js';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const routes = <Switch>
    <Route exact={true} path="/" component={SignupCard} />
    <Route path="/activity-feed" component={ActivityFeed} />
    <Route path="/notifications" render={() => {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Hello, world!</h1>
            </div>
        );
    }} />
    <Route path="*" component={SignupCard} />
</Switch>;


ReactDOM.render(
    <Router>
        <App>
            {routes}
        </App>
    </Router>,
    document.getElementById('root')
);
