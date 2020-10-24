import React, {useCallback, useContext} from 'react'
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from "react-router-dom";
import {UserContext} from "../../contexts/User.context";
import AuthService from "../../services/Auth.service";

const Header = () => {
  const { t } = useTranslation();
  const userContext = useContext(UserContext);

  const handleLogout = useCallback(() => {
    AuthService.logout();
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">{t("appName")}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label={t("toggleNavbar")}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">{t("home")}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/webgl" className="nav-link" activeClassName="active">{t("webgl")}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/accessibility" className="nav-link" activeClassName="active">{t("accessibility")}</NavLink>
          </li>

          {userContext && (
            <li className="nav-item">
              <NavLink exact to="/dashboard" className="nav-link" activeClassName="active">{t("dashboard")}</NavLink>
            </li>
          )}

          {!userContext && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">{t("login")}</NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={handleLogout}>{t("logout")}</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header;
