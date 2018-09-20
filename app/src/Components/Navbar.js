import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <button type="button" className="paddle-button">
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
                <img
                  className="profile-pic"
                  src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537268860/angela-profile-image_cyhzx7.jpg"
                  alt="profile pic"
                />
              </button>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
