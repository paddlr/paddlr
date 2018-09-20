import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePic from './ProfilePic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfilePic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
