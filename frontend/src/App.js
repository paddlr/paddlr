import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Game from "./Components/Game";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;
