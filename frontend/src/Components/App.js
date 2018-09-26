import React, { Component } from "react";
import "../App.css";
import Navbar from './Navbar';
import Game from './Game'; 
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Game/>

          </div>
    );
  }
}

export default App;
