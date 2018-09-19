import React from 'react';
import ReactDOM from 'react-dom';
import PlayerPic from './PlayerPic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerPic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
