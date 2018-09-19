import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
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
        </section>
        <section>
          <div className="left">
            <h2 className="games-won-left">1</h2>
            <button className="player-button">
              <img
                className="player-pic"
                src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537275284/EdT_jg1gfi.jpg"
              />
            </button>
            <h1 className="score-left"> 8</h1>
            <img
              className="paddle-pic-left"
              src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
            <button className="score_button">SCORE</button>
          </div>
          <div className="right">
            <h2 className="games-won-right">1</h2>
            <button className="player-button">
              <img
                className="player-pic"
                src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537275292/Tim_r7gqrq.png"
              />
            </button>
            <h1 className="score-right">15</h1>
            <img
              className="paddle-pic-right"
              src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
            <button className="score_button">SCORE</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
