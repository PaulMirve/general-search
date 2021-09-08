import React from 'react';
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import Landing from './components/layout/Landing';
import history from './history';


export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </Router>
    )
}
