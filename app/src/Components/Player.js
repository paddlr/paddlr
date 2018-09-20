import React, { Component } from 'react';
import ScoreButton from './ScoreButton'
import Points from './Points'
import PlayerPic from './PlayerPic';

class Player extends Component {
  constructor(props){
    super(props);

    this.state = {points: 0};
  }
  render() {

    return (
      <div>
        <Points points={this.state.points} />
        <ScoreButton points={this.state.points} increasePoints={(points) => this.setState({points})}/>
        <PlayerPic/>
      </div>
    );
  }
}

export default Player;
