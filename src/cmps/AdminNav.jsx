// import React, { useEffect, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/images/coola_like_logo.svg";
import AccountMenu from "./navbar/AccountMenu";
import { ProjectsFilter } from "./navbar/ProjectsFilter";

export function AdminNav({ location }) {
  const isMargin = () => {
    return location.includes('/about') ? 'no-margin' : 'margin10'
  }
  const projectsToFilter = useSelector(state => state.entities.projects.list)
  const userToFilter = useSelector(state => state.entities.user)
  //when user come from server
  // const isAdmin = () => {
  //   userToFilter.roles.some(role => role.name === 'ROLE_ADMIN')
  // }
  const isAdmin = false

  useEffect(() => {
    // console.log('userToFilter',userToFilter);
  }, [userToFilter])

  const logoLink = () => {
    window.location.href = '/'
  }

  return (
    <section className={`admin-navbar-wrapper full ${isMargin()}`}>
      <div className="main-layout">
        <div className="admin-navbar">
          <div className="left-list clean-list">
            <AccountMenu />
            {isAdmin && <ProjectsFilter projectsToFilter={projectsToFilter} userToFilter={userToFilter} />}
          </div>

          <ul className="list clean-list flex">
            <li>
              <NavLink activeClassName="active-link" exact to="/">
                <span>בית</span>
              </NavLink>
            </li>
            <li>
              {/* <NavLink activeClassName="active-link" className="disabled-link"  to="/about"> */}
              <NavLink activeClassName="active-link" to="/about">
                <span>אודות</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/jobs">
                <span>לוח משרות</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/events">
                <span>אירועים</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" className="disabled-link" to="/tips">
                <span>טיפים ומידע</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/projects">
                <span>פרויקטים</span>
              </NavLink>
            </li>
          </ul>

          <Link to="/">
            <object data={logo} type="image/svg+xml" className="logo" />
          </Link>
        </div>
      </div>
    </section>
  );
}
