import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { fetchUsers } from "../redux/actions/users";
import { setPlayerId, startGame, resetPlayers, resetServe } from "../redux/actions/game";

class StartGame extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
    this.props.resetPlayers();
    this.props.resetServe();
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
        {players.map((player, index, playerList) => {
          const user = users.find(user => user._id === player.id);
          return (
            <div key={index}>
              <h3 id={"head"+index}>
                {index === 0 ? "Server" : "Challenger"}
                {user && `: ${user.name}`}
              </h3>
              <figure id={"pic"+index}
                style={{ display: "block", width: 64, height: 64, backgroundColor: "lightgrey" }}
              >
                {user && <img width={64} src={user.slack_image} alt={user.name} />}
              </figure>
              <select value={player.id || ""} onChange={this.onSelectOption(index)} id={"player_selector"+index}>
                <option>Select Player</option>
                {users.map(user => (
                  <option
                    key={user._id}
                    disabled={playerList.map(p => p.id).includes(user._id) && player !== user._id}
                    value={user._id}
                  >
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
        <div>
          <button id="start_game_button" disabled={!players.every(player => player.id)} onClick={this.startGame}>
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
  resetServe: PropTypes.func.isRequired,
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
  resetServe,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StartGame)
);
