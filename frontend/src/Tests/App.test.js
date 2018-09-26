import React from 'react';
import ReactDom from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

import App from '../Components/App.js'

describe('app', () => {

  let app = shallow(<App/>)

  it('Renders the About title', () => {
    console.log(shallow(<App />));
    expect(app.find('h3').text()).toEqual('Server')
  });


//   it('Displays the about info', () => {
//     let aboutInfo = "Founded: July 23, 2018"
//     expect(about.find('p').at(0).text()).toEqual(aboutInfo)
//   });

});