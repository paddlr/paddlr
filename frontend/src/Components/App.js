import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "../redux/store";

import Routes from "./Routes";

import "../App.css";
// import Navbar from "./Navbar";
// import Game from "./Game";

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

    } else if(this.state.view == 'leaderboard'){ //table should be it's own component, but just as an example
      return (

      <div>
     <button onClick ={ () => {this.setState({view: 'game'})}} className = "score_button" >Play a game of ping pong</button>

      this is the leaderboard
      <table>
  <tbody>
    <tr>
    	<th>Rank</th>
    	<th>Username</th>
    	<th>Points</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Jessie</td>
      <td>102,345</td>
	</tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>2,321</td>
	</tr>
  </tbody>
</table>
</div>)

    }
  }
}

export default App;

// <Navbar />
// <Game />
