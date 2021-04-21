import { mount, shallow } from 'enzyme';
import React from 'react';

import ExampleComponent from '../ExampleComponent';

describe('ExampleComponent', () => {
  it('ExampleComponent needs some tests', () => {
    const COMPONENT = mount(<ExampleComponent />);
    expect(1).toEqual(2); // Fails as a reminder
  });
});
