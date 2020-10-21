import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
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
        </ul>
      </div>
    </nav>
  )
}

export default Header;
