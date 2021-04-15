import { mount, shallow } from 'enzyme';
import React from 'react';

import VersionEmitter from '../VersionEmitter';

describe('VersionEmitter', () => {
  it('VersionEmitter needs some tests', () => {
    const COMPONENT = mount(<VersionEmitter />);
    expect(1).toEqual(2); // Fails as a reminder
  });
});
