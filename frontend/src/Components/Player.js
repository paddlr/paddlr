import React, { Component } from 'react';
import Points from './Points';
import PlayerPic from './PlayerPic';
import Paddle from './Paddle';

class Player extends Component {
  render() {
    const {
      inProgress,
      player,
      points,
      onScoreIncremented,
      onScoreDecremented,
      shouldShowButtons,
      isServing,
      isWinningPlayer,
    } = this.props;
    return (
      <div className="player">
        <div className="points">
          <Points points={points} />
        </div>
        <div className="treble">
          <div>
            <button id={"minus_id"+player.name[0]}
              class="score-button"
              disabled={!shouldShowButtons}
              onClick={onScoreDecremented}
            >
              -
            </button>
          </div>
          <div>
            <PlayerPic src={player.slack_image} alt={player.name} />
          </div>
          <div>
            <button id={"plus_id"+player.name[0]}
              class="score-button"
              disabled={!shouldShowButtons}
              onClick={onScoreIncremented}
            >
              +
            </button>
          </div>
        </div>
        <div className="subtitle-container">
          {isWinningPlayer || (isServing && inProgress) ? (
            <div className="subtitle serving-paddle">
              <div>
                <Paddle scale={0.4} rubberColour="#CB5151" />
              </div>
              <div>{isWinningPlayer ? 'Winner!!' : 'Now serving'}</div>
            </div>
          ) : (
            <div className="subtitle">...</div>
          )}
        </div>
        <div className={`ribbon ${isWinningPlayer ? 'gold' : ''}`}>
          <span />
          <h1>{player.name}</h1>
          <span />
        </div>
      </div>
    );
  }
}

export default Player;
