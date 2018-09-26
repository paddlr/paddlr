import React, { Component } from "react";

class PlayerPic extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <div>
        <button className="player-button">
          <img className="player-pic" src={src} alt={alt} />
        </button>
      </div>
    );
  }
}

export default PlayerPic;
