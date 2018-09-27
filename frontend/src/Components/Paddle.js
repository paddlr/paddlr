import React, { Component } from 'react';

class Paddle extends Component {
  render() {
    const { scale, woodColour, ballColour, rubberColour } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.4"
        clipRule="evenodd"
        viewBox="0 0 52 54"
        width={52 * scale}
        height={54 * scale}
      >
        <g transform="matrix(.10441 0 0 .10441 -1 0)">
          <circle cx="66.7" cy="56" r="56" fill={ballColour} />
        </g>
        <path
          fill={woodColour}
          d="M9.4 24.1l20 19.9c-2.5 0-5-.5-7.3-1.4-1-.2-4.6-.8-6 .7-3.3 3.2-6.3 7.6-7.9 9.3-1.6 1.6-4 1-6-1.3-2.3-2.1-2.9-4.5-1.3-6 1.6-1.6 6-4.7 9.3-8 1.5-1.4.7-5.5.6-6.1-.9-2.3-1.3-4.7-1.4-7z"
        />
        <path
          fill={rubberColour}
          d="M45.5 7.8c-9.7-9.6-22.4-6.2-30.2 1.7-3 3-4.8 6.6-5.5 10.4l24 23.7C37.4 43 41 41 44 38.1c7.9-8 11.2-20.7 1.5-30.3z"
        />
      </svg>
    );
  }
}

Paddle.defaultProps = {
  scale: 1,
  woodColour: '#FFC700',
  ballColour: '#FFC700',
  rubberColour: '#FFC700',
};

export default Paddle;
