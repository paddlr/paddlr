import React, { Component } from "react";
import Player from "./Player";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { player1Points: 0, player2Points: 0 };
  }


  render() {
    const { player1Points, player2Points } = this.state;

    return (
      <div>
        <div className="left">
          <Player
            points={player1Points}
            onScoreIncremented={() => this.setState({ player1Points: player1Points + 1 })}
            showState

          />
        </div>
        <div className="right">
          <Player
            points={player2Points}
            onScoreIncremented={() => this.setState({ player2Points: player2Points + 1 } )}  />
        </div>
      <button onClick ={ () => (console.log(this.state))}>show me state</button>
      </div>



    );
  }
}

export default Game;

/* <Paddle direction = 'paddle-pic-right'/> */
