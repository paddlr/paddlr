import React, { Component } from "react";
import Points from "./Points";
import PlayerPic from "./PlayerPic";

class Player extends Component {
  render() {
    const {
      player,
      points,
      onScoreIncremented,
      onScoreDecremented,
      shouldShowButtons,
      isServing,
    } = this.props;
    return (
      <div>
        <Points points={points} />
        {shouldShowButtons && (
          <div>
            <button onClick={onScoreIncremented}>SCORE +</button>
            <button onClick={onScoreDecremented}>SCORE -</button>
          </div>
        )}
        <PlayerPic src={player.slack_image} alt={player.name} />
        {shouldShowButtons && isServing && <div>Serving</div>}
      </div>
    );
  }
}

export default Player;
