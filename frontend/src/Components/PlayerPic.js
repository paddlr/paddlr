import React, { Component } from "react";

class PlayerPic extends Component {
  render() {
    return (
      <div>
        <button className="player-button">
          <img
            className="player-pic"
            src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537275284/EdT_jg1gfi.jpg"
            alt="player one"
          />
        </button>
      </div>
    );
  }
}

export default PlayerPic;
