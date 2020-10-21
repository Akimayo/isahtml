import React from 'react';

import './App.scss';
import {Route, Router, Switch} from "react-router";
import HomePage from "./pages/Homepage";
import Header from "./components/Header";

import { createBrowserHistory } from "history";
import P5JPage from "./pages/P5J";

const customHistory = createBrowserHistory();

function App() {
    return (
        <Router history={customHistory}>
            <Header/>

            <Switch>
                <Route path={'/'}>
                    <HomePage/>
                </Route>
                <Route path={'/p5j'}>
                    <P5JPage />
                </Route>
                <Route path={'/accessibility'}>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
