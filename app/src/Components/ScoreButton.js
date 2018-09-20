import React, { Component } from "react";

class ScoreButton extends Component {
  constructor() {
    super();    //use super(props) if you want to access this.props in constructor

    // this.state = {}
  }

  render() {
    return (
      <div>
        <button className="score_button">SCORE</button>
      </div>
    )
  }
};

export default ScoreButton;
