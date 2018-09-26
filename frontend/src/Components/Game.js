import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    const { player1ID, player2ID, history, setServingPlayer } = this.props;
    if (!player1ID || !player2ID) {
      history.replace("/");
    } else {
      setServingPlayer(this.props.player1ID);
    }
  }

  componentDidUpdate(prevProps) {
    // Whether the serve count has decremented
    const hasSubtractedServeCount = prevProps.serveCount > this.props.serveCount;
    // Whether the serve count has just passed a multiple of 5
    const shouldSwapSubtractedPlayersUnder20 =
      prevProps.serveCount % 5 === 0 && this.props.serveCount % 5 !== 0;
    // Whether both players have a score of 20 or more
    const shouldSwapSubtractedPlayersOver20 =
      this.props.player1Score >= 20 && this.props.player2Score >= 20;
    // Whether we should swap the serving player when
    // the serve count has decreased
    const shouldSwapSubtractedPlayers =
      shouldSwapSubtractedPlayersUnder20 || shouldSwapSubtractedPlayersOver20;
    // If one of the players' scores is higher
    // than it used to be, find out if there's
    // a winner, and determine who's serving next.
    if (
      prevProps.player1Score < this.props.player1Score ||
      prevProps.player2Score < this.props.player2Score
    ) {
      this.findWinner();
      this.findNextServe();
    }
    // If the serve count is reduced, find out
    // if the last serve changed who was serving
    // and, if it did, swap back to the previous
    // server. Also check to see if there's a
    // winner (will set as undefined if not).
    if (hasSubtractedServeCount && shouldSwapSubtractedPlayers) {
      this.findWinner();
      this.changeServingPlayer();
    }
  }

  findWinner() {
    const { player1Score, player2Score, player1ID, player2ID, declareWinner } = this.props;
    if (player1Score >= 21 && player2Score <= player1Score - 2) {
      declareWinner(player1ID);
    } else if (player2Score >= 21 && player1Score <= player2Score - 2) {
      declareWinner(player2ID);
    } else {
      declareWinner(undefined);
    }
  }

  changeServingPlayer() {
    const { setServingPlayer, whichPlayerIsServing, player1ID, player2ID } = this.props;
    setServingPlayer(whichPlayerIsServing === player1ID ? player2ID : player1ID);
  }

  findNextServe() {
    const { player1Score, player2Score, serveCount } = this.props;
    if ((player1Score >= 20 && player2Score >= 20) || serveCount % 5 === 0) {
      this.changeServingPlayer();
    }
  }

  render() {
    const {
      inProgress,
      player1,
      player2,
      player1ID,
      player2ID,
      player1Score,
      player2Score,
      winningPlayer,
      servingPlayer,
      setPlayer1Score,
      setPlayer2Score,
      serveCount,
      setServeCount,
    } = this.props;
    return player1 && player2 ? (
      <div>
        <div className="left">
          <Player
            player={player1}
            points={player1Score}
            onScoreIncremented={() => {
              setServeCount(serveCount + 1);
              setPlayer1Score(player1Score + 1);
            }}
            onScoreDecremented={
              player1Score === 0
                ? undefined
                : () => {
                    setServeCount(serveCount - 1);
                    setPlayer1Score(player1Score - 1);
                  }
            }
            hasWon={player1ID === winningPlayer}
          />
        </div>
        <div className="right">
          <Player
            player={player2}
            points={player2Score}
            onScoreIncremented={() => {
              setServeCount(serveCount + 1);
              setPlayer2Score(player2Score + 1);
            }}
            onScoreDecremented={
              player2Score === 0
                ? undefined
                : () => {
                    setServeCount(serveCount - 1);
                    setPlayer2Score(player2Score - 1);
                  }
            }
            hasWon={player2ID === winningPlayer}
          />
        </div>
        {servingPlayer && <h1>{servingPlayer.name} is serving</h1>}
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  const players = state.players.playerList;
  const player1ID = state.game.player1ID;
  const player2ID = state.game.player2ID;
  const whichPlayerIsServing = state.game.whichPlayerIsServing;
  return {
    players: players,
    player1ID: player1ID,
    player2ID: player2ID,
    whichPlayerIsServing: whichPlayerIsServing,
    player1: players.find(player => player._id === player1ID),
    player2: players.find(player => player._id === player2ID),
    inProgress: state.game.inProgress,
    player1Score: state.game.player1Score,
    player2Score: state.game.player2Score,
    winningPlayer: state.game.winningPlayer,
    serveCount: state.game.serveCount,
    servingPlayer: players.find(player => player._id === whichPlayerIsServing),
  };
};

const mapDispatchToProps = {
  setPlayer1Score: setPlayer1Score,
  setPlayer2Score: setPlayer2Score,
  declareWinner: declareWinner,
  setServeCount: setServeCount,
  setServingPlayer: setServingPlayer,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game)
);
