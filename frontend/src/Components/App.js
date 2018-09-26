import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "../redux/store";

import Routes from "./Routes";

import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'game'
    };
  }
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
