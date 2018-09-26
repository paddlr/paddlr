import React, { Component } from "react";
import { connect } from "react-redux";
import Player from "./Player";
import {
  setPlayer1Score,
  setPlayer2Score,
  declareWinner,
  setServeCount,
  setServingPlayer,
} from "../redux/actions/game.actions";

class Game extends Component {
  componentDidMount() {
    this.props.setServingPlayer(this.props.player1ID);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.player1Score !== this.props.player1Score ||
      prevProps.player2Score !== this.props.player2Score
    ) {
      this.findWinner();
      this.findNextServe();
    }
  }

  findWinner() {
    const { player1Score, player2Score, player1ID, player2ID, declareWinner } = this.props;
    if (player1Score >= 21 && player2Score <= player1Score - 2) {
      declareWinner(player1ID);
    }
    if (player2Score >= 21 && player1Score <= player2Score - 2) {
      declareWinner(player2ID);
    }
  }

  changeServingPlayer() {
    const { setServingPlayer, whichPlayerIsServing, player1ID, player2ID } = this.props;
    setServingPlayer(whichPlayerIsServing === player1ID ? player2ID : player1ID);
  }

  findNextServe() {
    const { player1Score, player2Score, serveCount, setServeCount } = this.props;
    const currentServeCount = serveCount + 1;
    if ((player1Score >= 20 && player2Score >= 20) || currentServeCount % 5 === 0) {
      this.changeServingPlayer();
    }
    setServeCount(currentServeCount);
  }

  render() {
    const {
      inProgress,
      player1ID,
      player2ID,
      player1Score,
      player2Score,
      winningPlayer,
      whichPlayerIsServing,
      setPlayer1Score,
      setPlayer2Score,
    } = this.props;

    if (!winningPlayer) {
      return (
        <div>
          <div className="left">
            <Player
              points={player1Score}
              onScoreIncremented={() => setPlayer1Score(player1Score + 1)}
            />
          </div>
          <div className="right">
            <Player
              points={player2Score}
              onScoreIncremented={() => setPlayer2Score(player2Score + 1)}
            />
          </div>
          <h1>the next person to serve is player {whichPlayerIsServing || player1ID} </h1>
        </div>
      );
    }
    return <div> the winner is player {winningPlayer}</div>;
  }
}

const mapStateToProps = state => {
  return {
    inProgress: state.game.inProgress,
    player1ID: state.game.player1ID,
    player2ID: state.game.player2ID,
    player1Score: state.game.player1Score,
    player2Score: state.game.player2Score,
    winningPlayer: state.game.winningPlayer,
    serveCount: state.game.serveCount,
    whichPlayerIsServing: state.game.whichPlayerIsServing,
  };
};

const mapDispatchToProps = {
  setPlayer1Score: setPlayer1Score,
  setPlayer2Score: setPlayer2Score,
  declareWinner: declareWinner,
  setServeCount: setServeCount,
  setServingPlayer: setServingPlayer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
