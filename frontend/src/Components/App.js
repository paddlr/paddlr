import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "../redux/store";

import Routes from "./Routes";

import "../App.css";
// import Navbar from "./Navbar";
// import Game from "./Game";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;

// <Navbar />
// <Game />
