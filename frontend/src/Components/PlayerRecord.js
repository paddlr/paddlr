import React, { Component } from "react";
import PlayerPic from './PlayerPic';

class PlayerRecord extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="rank">1</div>
          <div className="playername">Player1</div>
          <div className="score">35</div>
          <div className="winPercent">98%</div>
          </div>
      </div>
    );
  }
}

export default PlayerRecord;
