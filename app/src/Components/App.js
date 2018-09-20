import React, { Component } from "react";
import "../App.css";
import Navbar from './Navbar';
import PlayerPic from './PlayerPic';
import Points from './Points'
import Paddle from './Paddle'
import ScoreButton from './ScoreButton'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <div className="left">

            <PlayerPic/>
            <Points/>
            <Paddle direction = 'paddle-pic-left'/>

          </div>
          <div className="right">
          <Points player = 'player 1'/>
            <PlayerPic/>
            <Paddle direction = 'paddle-pic-right'/>

          </div>
        </section>
      </div>
    );
  }
}

export default App;
