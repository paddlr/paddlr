import React, { Component } from "react";

class Paddle extends Component {
  render() {
    return (
      <div>
        <img className= {`${this.props.direction}`} src="https://res.cloudinary.com/dani-devs-and-designs/image/upload/v1537289738/Screen_Shot_2018-09-17_at_16.26.32_atdrl5.png"
            />
      </div>
    );
  }
}

export default Paddle;
