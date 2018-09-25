import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { setPlayerScore, endGame, sendMatchToLeaderboard } from "../redux/actions/game";
import { getWinningPlayer } from "../helpers/winningPlayer";

class Game extends Component {
  componentDidMount = () => {
    const { players, history, endGame } = this.props;
    if (!players.every(player => player.id)) {
      endGame();
      history.replace("/");
    }
  };

  componentDidUpdate = () => {
    if (this.props.winningPlayer && this.props.inProgress) {
      this.props.endGame();
      this.props.sendMatchToLeaderboard();
    }
  };

  // I think I need to add swapServes and/or setServe as props
  render() {
    const { winningPlayer, players, setPlayerScore, currentServer } = this.props;
    const displayedPlayers = winningPlayer || players;
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {displayedPlayers.map((player, index) => (
            <section key={player._id || index}>
              <figure>
                <img src={player.slack_image} alt={player.id} />
                <figcaption>{player.name}</figcaption>
              </figure>
              {winningPlayer ? (
                "WINNER"
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setPlayerScore(index, 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    disabled={player.score === 0}
                    onClick={() => {
                      setPlayerScore(index, -1);
                    }}
                  >
                    -
                  </button>
                </div>
              )}
              <div>Score: {player.score}</div>
              {/* This is my latest useless implementation `player.currentServer` 
              which it can't read because I haven't given Game the incrementScore() prop
              which dispatches the serving functions.
              I'm just not sure if `setServe()` and `swapServe()` should be
              props too - it feels like they should. */}
              {currentServer === index && <div>Serving</div>}
            </section>
          ))}
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})),
  winningPlayer: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({}).isRequired,
  setPlayerScore: PropTypes.func.isRequired,
  currentServer: PropTypes.number.isRequired,
  // swapServes: Proptypes.func.isRequired,
};

const mapStateToProps = state => {
  const players = state.game.players.map(player => ({
    ...state.users.users.find(user => user._id === player.id),
    ...player,
  }));
  return {
    players,
    currentServer: state.game.currentServer,
    inProgress: state.game.inProgress,
    winningPlayer: getWinningPlayer(players),
  };
};

const mapDispatchToProps = {
  setPlayerScore,
  endGame,
  sendMatchToLeaderboard,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game)
);
