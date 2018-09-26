import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ to, disabledLink, children }) =>
  disabledLink ? (
    <button id="game" disabled>{children}</button>
  ) : (
    <Link to={to}>
      <button id="play">{children}</button> //NEED TO EDIT THIS ID
    </Link>
  );

NavLink.defaultProps = {
  disabledLink: false,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  disabledLink: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default NavLink;
