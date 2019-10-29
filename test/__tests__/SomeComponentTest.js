import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SomeComponent from '../../SomeComponent';


Enzyme.configure({ adapter: new Adapter() });

describe('SomeComponent', () => {
  it('should test component', () => {
    const wrapper = shallow(React.createElement(SomeComponent, { value: 1 }));
    expect(wrapper.text()).toBe('6');
  });
});
