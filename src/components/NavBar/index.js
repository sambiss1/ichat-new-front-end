/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { HiChat, HiUserGroup } from "react-icons/hi";

import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [isActiveLink, setIsActiveLink] = useState("isActive");
  const [noActiveLink, setNotActiveLink] = useState("nav__bar--item");
  const location = useLocation();

  return (
    <nav className="nav__bar--container">
      <ul className="nav__bar--menu">
        <NavLink
          to="/"
          className={location.pathname === "/" ? isActiveLink : noActiveLink}
        >
          <HiChat className="nav__bar--icon" />
        </NavLink>
        <NavLink
          to="/user"
          className={
            location.pathname === "/user" ? isActiveLink : noActiveLink
          }
        >
          <HiUserGroup className="nav__bar--icon" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
