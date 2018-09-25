import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>

      <nav class="nav">
  <div class="nav-bar">
    <a class="nav-link" href="#sect-2">Play</a>
    <a class="nav-link" href="#sect-3">Leaderboard</a>
    <span class="nav-slider"></span>
  </div>
</nav>
      
        {/* <nav className="navbar navbar-inverse navbar-fixed-top">
            <ul className="navbar-right">
              <button className="paddle-button">
                <img
                  className="paddle-logo"
                  src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537263060/image_pr1hqh.png"
                  alt="app logo"/>
              </button>
              <div className="menu-items">
                  <a className="menu-item">PLAY</a>
                  <a className="menu-item">LEADERBOARDS</a>
              </div>
              <button type="button" className="profile-button">
              </button>
            </ul>
        </nav> */}
      
      </div>
    );
  }
}

export default Navbar;
