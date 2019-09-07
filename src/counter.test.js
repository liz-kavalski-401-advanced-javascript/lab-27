import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


import Counter from '../src/components/counter/counter.js';

describe('<Counter/>', ()=> {
  it('renders without crashing', () => {
    const component = shallow(<Counter/>);
    expect(component.find('section').exists()).toBeTruthy()
  });

  it('changes state on a click to less then 0',() => {
    let component = mount(<Counter/>);
    let button = component.find(".downclicker");
    button.simulate('click');
    
    expect(component.state('count')).toBeLessThanOrEqual(0);
  });

  it('changes state on a click to greater then 0',() => {
    let component = mount(<Counter/>);
    let button = component.find(".upclicker");
    button.simulate('click');
    
    expect(component.state('count')).toBeGreaterThanOrEqual(0);
  });


  it('renders correctly', () =>{
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
