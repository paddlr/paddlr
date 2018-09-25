import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { setPlayerScore, endGame, sendMatchToLeaderboard } from "../redux/actions/game";
import { getWinningPlayer } from "../helpers/winningPlayer";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextServeCounter: 2,
      toServe: 1,
    };
  }

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

  findNextServe() {
    if (this.state.nextServeCounter !== 5) {
      this.setState({ nextServeCounter: this.state.nextServeCounter + 1 });
    } else {
      this.setState({ nextServeCounter: 1 }, () => this.swapServes());
    }
  }

  swapServes() {
    this.state.toServe === 1 ? this.setState({ toServe: 2 }) : this.setState({ toServe: 1 });
  }

  render() {
    const { winningPlayer, players, setPlayerScore } = this.props;
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
              <div>Score: {player.score}</div>
              {winningPlayer ? (
                "WINNER"
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setPlayerScore(index, 1);
                      this.findNextServe();
                      console.log(`the next person to serve is ${this.state.toServe}`);
                    }}
                  >
                    +
                  </button>
                  <button disabled={player.score === 0} onClick={() => setPlayerScore(index, -1)}>
                    -
                  </button>
                </div>
              )}
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
};

const mapStateToProps = state => {
  const players = state.game.players.map(player => ({
    ...state.users.users.find(user => user._id === player.id),
    ...player,
  }));
  return {
    players,
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
