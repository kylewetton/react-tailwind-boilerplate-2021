import React from 'react';
import { Story, Meta } from '@storybook/react';
import __box__ from './__box__';
import { __box__Props } from './types';

export default {
    title: 'Components/__box__',
    component: __box__
} as Meta;

const Template: Story<__box__Props> = (args) => (
    <>
        <__box__ {...args} >
            Boxed __box__ component successfully...
        </__box__>
    </>
)

export const Primary = Template.bind({});
Primary.args = {
    // status: 'blue'
};