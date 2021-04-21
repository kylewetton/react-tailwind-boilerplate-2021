import React from 'react';
import { Story, Meta } from '@storybook/react';
import ExampleComponent from './ExampleComponent';
import { ExampleComponentProps } from './types';

export default {
    title: 'Components/ExampleComponent',
    component: ExampleComponent
} as Meta;

const Template: Story<ExampleComponentProps> = (args) => (
    <>
        <ExampleComponent {...args} >
            Boxed ExampleComponent component successfully...
        </ExampleComponent>
    </>
)

export const Primary = Template.bind({});
Primary.args = {
    // status: 'blue'
};