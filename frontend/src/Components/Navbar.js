import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <ul className="navbar-right">
              <button className="paddle-button">
                <img
                  className="paddle-logo"
                  src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537263060/image_pr1hqh.png"
                  alt="app logo"
                />
              </button>
              <div className="menu-items">
                <li>
                  <a className="menu-item">PLAY</a>
                </li>
                <li>
                  <a className="menu-item">TOURNAMENTS</a>
                </li>
                <li>
                  <a className="menu-item">LEADERBOARDS</a>
                </li>
                <li>
                  <a className="menu-item">LOGOUT</a>
                </li>
              </div>
              <button type="button" className="profile-button">
              </button>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
