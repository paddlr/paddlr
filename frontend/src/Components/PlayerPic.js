import React, { Component } from "react";

class PlayerPic extends Component {
  render() {
    return (
      <div>
        <button className="player-button">
          <img
            className="player-pic"
            src={this.props.pic}
            alt="player one"
          />
        </button>
      </div>
    );
  }
}

export default PlayerPic;
