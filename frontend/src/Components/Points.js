import React, { Component } from "react";

class Points extends Component {
   render() {
    return (
      <div>
        <h1 className="score-left">{this.props.points}</h1>
      </div>
    );
  }
}

export default Points;
