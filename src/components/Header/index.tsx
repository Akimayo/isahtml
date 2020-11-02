import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';
import { UserContext } from "../../contexts/User.context";
import {LogoComponent} from "../Logo";

interface HeaderProps {
  handleLogout: () => void
}

const ClickLink = styled.a`
cursor: pointer;
`

const Header = ({ handleLogout }: HeaderProps) => {
  const { t } = useTranslation();
  const userContext = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" aria-label={t("appName")} id="homeLogoLink">
        <LogoComponent />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label={t("toggleNavbar")}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">{t("home")}</NavLink>
          </li>

          {userContext.data.user && (
            <>
              <li className="nav-item">
                <NavLink exact to="/dashboard" className="nav-link" activeClassName="active">{t("dashboard")}</NavLink>
              </li>
              <li className="nav-item">
                <ClickLink className="nav-link" onClick={handleLogout} tabIndex={0}>{t("login.logout")}</ClickLink>
              </li>
            </>
          )}

          {!userContext.data.user && (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">{t("login.login")}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" activeClassName="active">{t("register.register")}</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header;
