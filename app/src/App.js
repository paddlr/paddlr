import React, { Component } from "react";
import "./App.css";
import Navbar from './Navbar';
import PlayerPic from './PlayerPic';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section>
          <div className="left">
            <h2 className="games-won-left">1</h2>
            <PlayerPic/>
            <h1 className="score-left"> 8</h1>
            <img
              className="paddle-pic-left"
              src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
            <button className="score_button">SCORE</button>
          </div>
          <div className="right">
            <h2 className="games-won-right">1</h2>
            <PlayerPic/>
            <h1 className="score-right">15</h1>
            <img
              className="paddle-pic-right"
              src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
            <button className="score_button">SCORE</button>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
