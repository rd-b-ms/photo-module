import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should load <App /> without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});

describe('PhotosContainer', () => {
  it('should have a button with text "Save" on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('SaveButton').text()).toEqual('Save');
  });
  it('should have a button with text "Share" on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('ShareButton').text()).toEqual('Share');
  });
});
