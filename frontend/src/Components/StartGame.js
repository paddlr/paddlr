import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { fetchUsers } from "../redux/actions/users";
import { setPlayerId, startGame, resetPlayers } from "../redux/actions/game";

class StartGame extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
    this.props.resetPlayers();
  };

  onSelectOption = which => event => {
    this.props.setPlayerId(which, event.target.value);
  };

  startGame = () => {
    this.props.startGame();
    this.props.history.push("/game");
  };

  render() {
    const { users, players } = this.props;
    return (
      <div>
        {players.map((player, index, playerList) => (
          <select key={index} value={player.id || ""} onChange={this.onSelectOption(index)}>
            <option>Select Player</option>
            {users.map(user => (
              <option
                key={user._id}
                disabledLink={playerList.map(p => p.id).includes(user._id) && player !== user._id}
                value={user._id}
              >
                {user.name}
              </option>
            ))}
          </select>
        ))}
        <div>
          <button disabledLink={!players.every(player => player.id)} onClick={this.startGame}>
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

StartGame.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  history: PropTypes.shape({}).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  setPlayerId: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  resetPlayers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
  players: state.game.players,
});

const mapDispatchToProps = {
  fetchUsers,
  setPlayerId,
  startGame,
  resetPlayers,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StartGame)
);
