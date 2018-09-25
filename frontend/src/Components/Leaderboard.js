import React, { Component } from "react";
import PlayerRecord from './PlayerRecord';

class Leaderboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="rank">Rank</div>
        <div className="playername">NAME</div>
        <div className="score">Number of Wins</div>
        <div className="winPercent">Win Percentage</div>
        </div>
        <PlayerRecord/>
        <PlayerRecord/>
        <PlayerRecord/>
        <PlayerRecord/>
        <PlayerRecord/>
      </div>
    );
  }
}

export default Leaderboard;
