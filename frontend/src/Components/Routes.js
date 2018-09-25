import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import StartGame from "./StartGame";
import Game from "./Game";
import Leaderboard from "./Leaderboard";

const Routes = () => (
  <div className="App">
    <Nav />
    <Switch>
      <Route exact path="/" component={StartGame} />
      <Route path="/game" component={Game} />
      <Route path="/leaderboard" component={Leaderboard} />
    </Switch>
  </div>
);

export default Routes;
