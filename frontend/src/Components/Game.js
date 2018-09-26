import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { setPlayerScore, setServe, endGame, sendMatchToLeaderboard } from "../redux/actions/game";
import { getWinningPlayer } from "../helpers/winningPlayer";

class Game extends Component {
  componentDidMount = () => {
    const { players, history, endGame } = this.props;
    if (!players.every(player => player.id)) {
      endGame();
      history.replace("/");
    }
  };

  downgradeWinner = () => {
    const { players, winningPlayer, setPlayerScore } = this.props;
    // First we need to get the index of the winning player
    const winningPlayerIndex = players.map(player => player.id).indexOf(winningPlayer[0].id);
    // We need to go 2 serves back, because
    // setPlayerScore will automatically
    // increment the serves by 1. We want
    // ultimately to be 1 serve back.
    setServe(-2);
    setPlayerScore(winningPlayerIndex, -1);
  };

  finishGameAndSendResultToLeaderboard = () => {
    this.props.endGame();
    this.props.sendMatchToLeaderboard();
  };

  render() {
    const { winningPlayer, players, setPlayerScore, currentServer, inProgress } = this.props;
    const displayedPlayers = winningPlayer && !inProgress ? winningPlayer : players;
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {displayedPlayers.map((player, index) => (
            <section key={player._id || index}>
              <figure>
                <img id={"player_pic"+index} src={player.slack_image} alt={player.id} />
                <figcaption id={"player_name"+index}>{player.name}</figcaption>
              </figure>
              {winningPlayer ? (
                winningPlayer[0].id === player.id ? (
                  <div id={"winner"}>
                    WINNER
                  </div>
                ) : (
                  <div id={"loser"}>
                    LOSER
                  </div>
                )
              ) : (
                <div>
                  <button id={"plus_id"+index}
                    onClick={() => {
                      setPlayerScore(index, 1);
                    }}
                  >
                    +
                  </button>
                  <button id={"minus_id"+index}
                    disabled={player.score === 0}
                    onClick={() => {
                      setPlayerScore(index, -1);
                    }}
                  >
                    -
                  </button>
                </div>
              )}
              <div id={"score_id"+index}>Score: {player.score}</div>
              {currentServer === index && !winningPlayer && <div id="serve">Serving</div>}
            </section>
          ))}
        </div>
        {!!winningPlayer && inProgress ? (
          <div>
            Someone has won. End game?
            <button id="end_game" onClick={this.finishGameAndSendResultToLeaderboard}>End game</button>
            <button id="dont_end_game" onClick={this.downgradeWinner}>Whoops! Nobody won</button>
          </div>
        ) : null}
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
