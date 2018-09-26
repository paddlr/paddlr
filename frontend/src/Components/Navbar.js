import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <img
                className="paddle-logo"
                src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537263060/image_pr1hqh.png"
                alt="app logo"
              />
              {/* <div className="menu-items"> */}
              <li>
                <Link to="/" className="menu-item">
                  PLAY
                </Link>
              </li>
              <li>
                <Link to="/game" className="menu-item">
                  GAME
                </Link>
              </li>
              <li>
                <Link to="/leaderboards" className="menu-item">
                  LEADERBOARDS
                </Link>
              </li>
              {/* </div> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
