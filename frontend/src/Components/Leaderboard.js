import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../redux/actions/players.actions";

const sortByTotalScore = array =>
  array.slice().sort((a, b) => (a.total_score > b.total_score ? -1 : 1));

class Leaderboard extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players } = this.props;
    return (
      <div className="container">
        <table>
          <thead>
            <th>Ranking</th>
            <th />
            <th>Name</th>
            <th>Won</th>
            <th>Lost</th>
          </thead>
          <tbody>
            {sortByTotalScore(players).map((player, index) => (
              <tr key={player._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={player.slack_image} alt={player.name} />
                </td>
                <td>{player.name}</td>
                <td>{player.games_won}</td>
                <td>{player.games_lost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { players: state.players.playerList };
};

const mapDispatchToProps = {
  fetchPlayers: fetchPlayers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
