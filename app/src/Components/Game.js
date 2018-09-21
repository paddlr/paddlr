import React, { Component } from 'react';
import Player from './Player';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { player1Points: 0, player2Points:0 }
  }
  
  render() {

    const { player1Points, player2Points } = this.state;

    return (
      <div>
        <Player points={player1Points} onScoreIncremented={
          () => this.setState({ player1Points: player1Points+1 })}/>
        <Player/>
      </div>
    );
  }
}

export default Game;
