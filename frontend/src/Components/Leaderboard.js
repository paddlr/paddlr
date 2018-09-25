import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchUsers } from "../redux/actions/users";

class Leaderboard extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
  };

  render() {
    const { users } = this.props;
    return (
      <table>
        <thead />
        <tbody>
          {users.sort((a, b) => (a.games_won > b.games_won ? -1 : 1)).map(user => (
            <tr key={user._id}>
              <td>
                <img width={32} src={user.slack_image} alt={user.name} />
              </td>
              <td>{user.name}</td>
              <td>{user.games_won}</td>
              <td>{user.games_lost}</td>
              <td>{user.total_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Leaderboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
