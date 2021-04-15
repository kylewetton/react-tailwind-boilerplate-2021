import React from 'react';
import { Story, Meta } from '@storybook/react';
import VersionEmitter from './VersionEmitter';
import { VersionEmitterProps } from './types';

export default {
    title: 'Components/VersionEmitter',
    component: VersionEmitter,
} as Meta;

const Template: Story<VersionEmitterProps> = (args) => (
    <>
        <VersionEmitter {...args} />
    </>
)

export const Primary = Template.bind({});
Primary.args = {
    // status: 'blue'
};