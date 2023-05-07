import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Home, HomeProps } from '../Home';

export default {
    title: 'Components/pages/Home',
    component: Home,
} as Meta;

const Template: Story<HomeProps> = (args) => <Home {...args} />;

export const HomePrimary = Template.bind({});
HomePrimary.args = {
    children: 'Primary',
};

export const HomeSecondary = Template.bind({});
HomeSecondary.args = {
    children: 'Secondary',
};
