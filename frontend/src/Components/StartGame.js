import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlayers } from '../redux/actions/players.actions';
import {
  setPlayer1ID,
  setPlayer2ID,
  startGame,
  resetGame,
} from '../redux/actions/game.actions';

const SIZER_GIF =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

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
    this.props.history.push('/game');
  };

  render() {
    const { players, player1ID, player2ID, player1, player2 } = this.props;
    return (
      <div className="container start-game">
        <div className="panels">
          <div>
            <figure className="player-thumb">
              <img
                src={player1 ? player1.slack_image_512 : SIZER_GIF}
                alt={player1 ? player1.name : ''}
              />
            </figure>
            <select id="select_server" value={player1ID || ''} onChange={this.selectPlayer1ID}>
              <option value="">First Serve</option>
              {players.map(player => (
                <option
                  disabled={player2ID === player._id}
                  key={player._id}
                  value={player._id}
                >
                  {player.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <figure className="player-thumb">
              <img
                src={player2 ? player2.slack_image_512 : SIZER_GIF}
                alt={player2 ? player2.name : ''}
              />
            </figure>
            <select id={"select_challenger"} value={player2ID || ''} onChange={this.selectPlayer2ID}>
              <option value="">Challenger</option>
              {players.map(player => (
                <option
                  disabled={player1ID === player._id}
                  key={player._id}
                  value={player._id}
                >
                  {player.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="start-button">
          <button id="start_game_button" disabled={!player1ID || !player2ID} onClick={this.startGame}>
            Start
          </button>
        </div>
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
