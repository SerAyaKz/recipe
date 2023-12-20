import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"; // Assuming you have a separate CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/random">Random</NavLink>
          </li>
          <li>
            <NavLink to="/trend">Trend</NavLink>
          </li>
           <li>
            <a href="https://aspap.vercel.app/">Another Project</a>
          </li>
          {/* <li>
            <NavLink to="/account">Account</NavLink>
            <ul className="dropdown">
              <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/login">Remember</NavLink></li>
              <li><NavLink to="/login">Favourite</NavLink></li>
              <li><NavLink to="/login">My</NavLink></li>

            </ul>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
            <ul className="dropdown">
              <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
          </li>*/}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
