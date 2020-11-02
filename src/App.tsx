import React, { useCallback, useEffect, useState } from 'react';

import './App.scss';
import { Route, Switch, useHistory } from "react-router";
import { BrowserRouter } from 'react-router-dom';

import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";

import Header from "./components/Header";
import AuthService from "./services/Auth.service";
import { UserContext, UserData } from './contexts/User.context';
import { DashboardPage } from "./pages/Dashboard";
import { Progress } from './components/Progress';
import RegisterPage from "./pages/Register";

const initialUserData = { user: null, isLoading: false }

function App() {
  const history = useHistory()
  const [userData, setUserData] = useState<UserData>(initialUserData)

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

  const handleLogout = useCallback(async () => {
    try {
      await AuthService.logout();
      setUserData(initialUserData)
      history.push('/login')
    } catch (e) {
      console.error(e)
    }
  }, [history])

  if (userData.isLoading) {
    return <Progress />
  }

  return (
    <UserContext.Provider value={{ data: userData, update: setUserData }}>
      <BrowserRouter>
        <Header handleLogout={handleLogout} />

        <Switch>
          <Route exact path={'/'} component={HomePage} />
          {!userData.user && (
            <>
              <Route path={'/login'} component={LoginPage} />
              <Route path={'/register'} component={RegisterPage} />
            </>
          )}

          {userData.user && (
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
