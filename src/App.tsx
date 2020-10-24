import React, {useEffect, useState} from 'react';

import './App.scss';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';

import HomePage from "./pages/Homepage";
import AnimationsPage from "./pages/Animations";
import AccessibilityPage from './pages/Accessibility';
import LoginPage from "./pages/Login";

import Header from "./components/Header";
import AuthService from "./services/Auth.service";
import {User} from "./entities/User";
import { UserContext } from './contexts/User.context';
import {DashboardPage} from "./pages/Dashboard";

interface UserData {
  user: User | null
  isLoading: boolean
}

function App() {

  const [userData, setUserData] = useState<UserData>({ user: null, isLoading: false })

  useEffect(() => {
    const handleLogin = async () => {
      try {
        setUserData({ user: null, isLoading: true })
        const result = await AuthService.getCurrentUser();
        setUserData({ user: result.data, isLoading: false })
      } catch (e) {
        console.error(e)
        setUserData({ user: null, isLoading: false })
      }
    }

    handleLogin()
  }, [])

  if (userData.isLoading) {
    return <h1>Loading ...</h1>
  }

  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/webgl'} component={AnimationsPage} />
          <Route path={'/accessibility'} component={AccessibilityPage} />
          {!userData && (
            <>
              <Route path={'/login'} component={LoginPage} />
            </>
          )}

          {userData && (
            <>
              <Route path={'/dashboard'} component={DashboardPage} />
            </>
          )}

          <Route component={() => (<h1>404 NOT FOUND</h1>)} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
