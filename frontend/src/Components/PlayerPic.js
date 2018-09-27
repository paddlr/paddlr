import React, { Component } from 'react';

class PlayerPic extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <figure className="player-thumb">
        <img src={src} alt={alt} />
      </figure>
    );
  }
}

export default PlayerPic;
