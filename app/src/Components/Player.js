import React, { Component } from "react";
import Points from "./Points";
import PlayerPic from "./PlayerPic";

class Player extends Component {
  render() {
    return (
      <div>
        <Points points={this.props.points} />
        <div>
          <button
            onClick={() => this.props.onScoreIncremented()}
            className="score_button">
            {this.props.toServe === 0 ? 'To Serve?' : 'Score'}
          </button>
        </div>
        <PlayerPic pic ={this.props.pic} />
      </div>
    );
  }
}

export default Player;
