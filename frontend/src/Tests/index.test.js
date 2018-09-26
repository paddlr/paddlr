import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import Game from '../Components/Game.js'

describe('game', () => {

  let game = shallow(<Game />)

  it('Renders the About title', () => {
    expect(game('h3').text()).toEqual('Server')
  });


//   it('Displays the about info', () => {
//     let aboutInfo = "Founded: July 23, 2018"
//     expect(about.find('p').at(0).text()).toEqual(aboutInfo)
//   });

});