import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Game from './Game';
import Leaderboard from './Leaderboard';
import StartGame from './StartGame';

class Routes extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="content-pane">
          <span className="net" />
          <Switch>
            <Route exact path="/" component={StartGame} />
            <Route path="/game" component={Game} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default Routes;
