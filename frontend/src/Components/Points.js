import React, { Component } from 'react';

class Points extends Component {
  render() {
    return <div className="points-score">{this.props.points}</div>;
  }
}

export default Points;
