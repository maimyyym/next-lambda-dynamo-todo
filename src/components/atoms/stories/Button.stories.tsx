import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, Props } from '../Button';

export default {
    title: 'Components/atoms/Button',
    component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
};
