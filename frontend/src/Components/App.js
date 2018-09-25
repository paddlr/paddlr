import React, { Component } from "react";
import "../App.css";
import Navbar from './Navbar';
import Game from './Game'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'game' 
    };
  }
  render() {
    if(this.state.view == 'game'){   //if the state is game it returns our game component 
    return (   //buttons in the navbar component should  update the state of app. rather than it just being a huge button at the bottom :) 
      <div>
        <Navbar />  
        <Game/>         

        {/* <button onClick ={ () => {this.setState({view: 'leaderboard'})}} className = "score_button" >show me the leaderboard</button>   */}

          </div>
        
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