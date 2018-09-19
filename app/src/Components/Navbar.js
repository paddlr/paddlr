import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();    //use super(props) if you want to access this.props in constructor

    // this.state = {}
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <button type="button" className="paddle-button">
                <img
                  className="paddle-logo"
                  src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537263060/image_pr1hqh.png"
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
                />
              </button>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};

export default Navbar;
