import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPlayers } from "../redux/actions/players.actions";
import { setPlayer1ID, setPlayer2ID, startGame, resetGame } from "../redux/actions/game.actions";

class StartGame extends Component {
  componentDidMount() {
    this.props.resetGame();
    this.props.fetchPlayers();
  }

  selectPlayer1ID = event => {
    this.props.setPlayer1ID(event.target.value);
  };

  selectPlayer2ID = event => {
    this.props.setPlayer2ID(event.target.value);
  };

  startGame = () => {
    this.props.startGame();
    this.props.history.push("/game");
  };

  render() {
    const { players, player1ID, player2ID, player1, player2 } = this.props;
    return (
      <div className="container">
        <div>
          {player1 && <img src={player1.slack_image} alt={player1.name} />}
          <select value={player1ID || ""} onChange={this.selectPlayer1ID}>
            <option>First Serve</option>
            {players.map(player => (
              <option disabled={player2ID === player._id} key={player._id} value={player._id}>
                {player.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {player2 && <img src={player2.slack_image} alt={player2.name} />}
          <select value={player2ID || ""} onChange={this.selectPlayer2ID}>
            <option>Challenger</option>
            {players.map(player => (
              <option disabled={player1ID === player._id} key={player._id} value={player._id}>
                {player.name}
              </option>
            ))}
          </select>
        </div>
        <button disabled={!player1ID || !player2ID} onClick={this.startGame}>
          Start Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const players = state.players.playerList;
  const player1ID = state.game.player1ID;
  const player2ID = state.game.player2ID;
  return {
    players: players,
    player1ID: player1ID,
    player2ID: player2ID,
    player1: players.find(player => player._id === player1ID),
    player2: players.find(player => player._id === player2ID),
  };
};

const mapDispatchToProps = {
  fetchPlayers: fetchPlayers,
  setPlayer1ID: setPlayer1ID,
  setPlayer2ID: setPlayer2ID,
  startGame: startGame,
  resetGame: resetGame,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StartGame)
);
