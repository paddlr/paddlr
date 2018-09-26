import React, { Component } from "react";
import Points from "./Points";
import PlayerPic from "./PlayerPic";

class Player extends Component {
  render() {
    const { player, points, onScoreIncremented, onScoreDecremented, hasWon } = this.props;
    return (
      <div>
        <Points points={points} />
        {!hasWon && (
          <div>
            <button onClick={onScoreIncremented}>SCORE +</button>
            <button onClick={onScoreDecremented}>SCORE -</button>
          </div>
        )}
        <PlayerPic src={player.slack_image} alt={player.name} />
      </div>
    );
  }
}

export default Player;
