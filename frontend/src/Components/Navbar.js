import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Paddle from './Paddle';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="nav-paddle">
            <Paddle scale={0.75} />
          </li>
          <li>
            <NavLink
              activeClassName="active-link"
              exact
              to="/"
              className="menu-item"
            >
              Start
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active-link"
              to="/game"
              className="menu-item"
            >
              Scoreboard
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active-link"
              to="/leaderboard"
              className="menu-item"
            >
              Ranking
            </NavLink>
          </li>
          <li />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
