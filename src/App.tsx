import React from 'react';

import './App.scss';
import { Route, Switch } from "react-router";
import HomePage from "./pages/Homepage";
import AnimationsPage from "./pages/Animations";
import Header from "./components/Header";

import AccessibilityPage from './pages/Accessibility';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/webgl'} component={AnimationsPage} />
        <Route path={'/accessibility'} component={AccessibilityPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
