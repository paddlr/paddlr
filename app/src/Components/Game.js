import React, { Component } from "react";
import Player from "./Player";
import Paddle from "./Paddle"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Points: 0,
      player2Points: 0,
      winner: null,
      toServe: 1
    };
  }

  findWinner(p1 = this.state.player1Points, p2 = this.state.player2Points) {
    if (p1 >= 21 && p2 <= p1 - 2) {
      this.setState({ winner: 1 });
    }
    if (p2 >= 21 && p1 <= p2 - 2) {
      this.setState({ winner: 2 });
    }
  }

  findNextServe() {
    if ((this.state.player1Points + this.state.player2Points) % 5 === 0) {
      this.swapServes();
    }
  }

  swapServes() {
    this.state.toServe === 1 ? this.setState({ toServe: 2 }) : this.setState({ toServe: 1 });
  }

  scoreButtonClick() {
    //handles all the click methods
    console.log(`the next person to serve is ${this.state.toServe}`);

    this.findNextServe();
    this.findWinner();
  }

  render() {
    const { player1Points, player2Points, toServe } = this.state;

    if (!this.state.winner) {
      return (
        <div>
          <div className="left">
            <Player
              points={player1Points}
              onScoreIncremented={() =>
                this.setState({ player1Points: player1Points + 1 }, () => {
                  this.scoreButtonClick();
                })
              }
            />
            {toServe === 1 ? <Paddle direction = 'paddle-pic-left'/> : null}
          </div>
          <div className="right">
            <Player
              points={player2Points}
              onScoreIncremented={() =>
                this.setState({ player2Points: player2Points + 1 }, () => {
                  this.scoreButtonClick();
                })
              }
            />
            {toServe === 2 ? <Paddle direction = 'paddle-pic-right'/> : null}
          </div>
          <button onClick={() => console.log(this.state)}>show me state</button>
          <h1>the next person to serve is player {this.state.toServe} </h1>
        </div>
      );
    } else return <div> the winner is player {this.state.winner}</div>;
  }
}

export default Game;

/* <Paddle direction = 'paddle-pic-right'/> */
