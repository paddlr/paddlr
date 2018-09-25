import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavLink from "./NavLink";

const Nav = ({ inProgress }) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="menu-items">
      <NavLink className="menu-item" to="/" disabled={inProgress}>
        Play
      </NavLink>
      <NavLink className="menu-item" to="/game" disabled={!inProgress}>
        Game In Progress
      </NavLink>
      <NavLink className="menu-item" to="/leaderboard">
        Leaderboard
      </NavLink>
    </div>
  </nav>
);

Nav.propTypes = {
  inProgress: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  inProgress: state.game.inProgress,
});

export default connect(mapStateToProps)(Nav);
