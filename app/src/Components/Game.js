import React, { Component } from 'react';
import Player from './Player';

class Game extends Component {
  render() {
    return (
      <div>
        <Player/>
        <Player/>
      </div>
    );
  }
}

export default Game;
