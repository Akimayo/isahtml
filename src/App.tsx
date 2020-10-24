import React from 'react';

import './App.scss';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';

import HomePage from "./pages/Homepage";
import AnimationsPage from "./pages/Animations";
import AccessibilityPage from './pages/Accessibility';
import LoginPage from "./pages/Login";

import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/webgl'} component={AnimationsPage} />
        <Route path={'/accessibility'} component={AccessibilityPage} />
        <Route path={'/login'} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
