import React, { Component } from "react";

class Points extends Component {
  constructor() {
    super(); //use super(props) if you want to access this.props in constructor
  }

  render() {
    return (
      <div>
        <h1 className="score-left"> 8</h1>
      </div>
    );
  }
}

export default Points;
