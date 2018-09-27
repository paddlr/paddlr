import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Player from './Player';
import {
  setPlayer1Score,
  setPlayer2Score,
  declareWinner,
  setServeCount,
  setServingPlayer,
  endGame,
} from '../redux/actions/game.actions';

class Game extends Component {
  componentDidMount() {
    const { player1ID, player2ID, history, setServingPlayer } = this.props;
    if (!player1ID || !player2ID) {
      history.replace('/');
    } else {
      setServingPlayer(this.props.player1ID);
    }
  }

  componentDidUpdate(prevProps) {
    // Whether the serve count has decremented
    const hasSubtractedServeCount =
      prevProps.serveCount > this.props.serveCount;
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
    // If the players' scores differ from their
    // previous values, we need to see whether
    // either of them has won or shouldn't win.
    if (
      prevProps.player1Score !== this.props.player1Score ||
      prevProps.player2Score !== this.props.player2Score
    ) {
      this.findWinner();
    }
    // If one of the players' scores is higher
    // than it used to be, find out if there's
    // a winner, and determine who's serving next.
    if (
      prevProps.player1Score < this.props.player1Score ||
      prevProps.player2Score < this.props.player2Score
    ) {
      this.findNextServe();
    }
    // If the serve count is reduced, find out
    // if the last serve changed who was serving
    // and, if it did, swap back to the previous
    // server.
    if (hasSubtractedServeCount && shouldSwapSubtractedPlayers) {
      this.changeServingPlayer();
    }
  }

  findWinner() {
    const {
      player1Score,
      player2Score,
      player1ID,
      player2ID,
      declareWinner,
    } = this.props;
    if (player1Score >= 21 && player2Score <= player1Score - 2) {
      declareWinner(player1ID);
    } else if (player2Score >= 21 && player1Score <= player2Score - 2) {
      declareWinner(player2ID);
    } else {
      declareWinner(undefined);
    }
  }

  changeServingPlayer() {
    const {
      setServingPlayer,
      whichPlayerIsServing,
      player1ID,
      player2ID,
    } = this.props;
    setServingPlayer(
      whichPlayerIsServing === player1ID ? player2ID : player1ID
    );
  }

  findNextServe() {
    const { player1Score, player2Score, serveCount } = this.props;
    if ((player1Score >= 20 && player2Score >= 20) || serveCount % 5 === 0) {
      this.changeServingPlayer();
    }
  }

  incrementPlayer1Score = () => {
    this.props.setServeCount(this.props.serveCount + 1);
    this.props.setPlayer1Score(this.props.player1Score + 1);
  };

  decrementPlayer1Score = () => {
    if (this.props.player1Score > 0) {
      this.props.setServeCount(this.props.serveCount - 1);
      this.props.setPlayer1Score(this.props.player1Score - 1);
    }
  };

  incrementPlayer2Score = () => {
    this.props.setServeCount(this.props.serveCount + 1);
    this.props.setPlayer2Score(this.props.player2Score + 1);
  };

  decrementPlayer2Score = () => {
    if (this.props.player2Score > 0) {
      this.props.setServeCount(this.props.serveCount - 1);
      this.props.setPlayer2Score(this.props.player2Score - 1);
    }
  };

  decreaseWinningScore = () => {
    if (this.props.winningPlayer === this.props.player1ID) {
      this.decrementPlayer1Score();
    } else {
      this.decrementPlayer2Score();
    }
  };

  sendFinalResultAndEndGame = () => {
    fetch('https://paddlr-test.herokuapp.com/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        players: [
          {
            player_id: this.props.player1ID,
            player_score: this.props.player1Score,
          },
          {
            player_id: this.props.player2ID,
            player_score: this.props.player2Score,
          },
        ],
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log('Game saved', response);
        this.props.endGame();
      });
  };

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
      whichPlayerIsServing,
    } = this.props;
    return player1 && player2 ? (
      <div className="container scoreboard">
        <div className="net-container">
          <div
            className={`net-shadow ${
              whichPlayerIsServing === player1ID ? 'left' : 'right'
            }`}
          />
          <div className="net" />
        </div>
        <div className="panels">
          <div>
            <Player
              player={player1}
              points={player1Score}
              onScoreIncremented={this.incrementPlayer1Score}
              onScoreDecremented={this.decrementPlayer1Score}
              shouldShowButtons={!winningPlayer}
              isServing={whichPlayerIsServing === player1ID}
              isWinningPlayer={winningPlayer === player1ID}
              inProgress={inProgress}
            />
          </div>
          <div>
            <Player
              player={player2}
              points={player2Score}
              onScoreIncremented={this.incrementPlayer2Score}
              onScoreDecremented={this.decrementPlayer2Score}
              shouldShowButtons={!winningPlayer}
              isServing={whichPlayerIsServing === player2ID}
              isWinningPlayer={winningPlayer === player2ID}
              inProgress={inProgress}
            />
          </div>
        </div>
        {winningPlayer &&
          inProgress && (
            <div className="are-you-sure">
              <div>Finish game?</div>
              <button onClick={this.decreaseWinningScore}>✗</button>
              <button onClick={this.sendFinalResultAndEndGame}>✓</button>
            </div>
          )}
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
  };
};

const mapDispatchToProps = {
  setPlayer1Score: setPlayer1Score,
  setPlayer2Score: setPlayer2Score,
  declareWinner: declareWinner,
  setServeCount: setServeCount,
  setServingPlayer: setServingPlayer,
  endGame: endGame,
};

export { Game };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game)
);
