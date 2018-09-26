import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../redux/actions/players.actions";

class StartGame extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    const { players } = this.props;
    return <div className="container" />;
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
)(StartGame);
