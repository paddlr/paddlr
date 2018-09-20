import React, { Component } from "react";
import "../App.css";
import Navbar from './Navbar';
import ProfilePic from './ProfilePic';
import Points from './Points'
import Paddle from './Paddle'
import ScoreButton from './ScoreButton'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section>
          <div className="left">
            <ProfilePic/>
            <Points/>
            <Paddle direction = 'paddle-pic-left'/>
           
          </div>
          <div className="right">
          <Points/>
            <ProfilePic/>
            <Paddle direction = 'paddle-pic-right'/>

           
          </div>
        </section>
      </div>
    )
  }
}

export default App;
