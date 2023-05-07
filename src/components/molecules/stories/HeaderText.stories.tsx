import React from 'react';
import { Story, Meta } from '@storybook/react';

import { HeaderText, HeaderTextProps } from '../HeaderText';

export default {
    title: 'Components/molecules/HeaderText',
    component: HeaderText,
} as Meta;

const Template: Story<HeaderTextProps> = (args) => <HeaderText {...args} />;

export const HeaderTextPrimary = Template.bind({});
HeaderTextPrimary.args = {
    children: 'Primary',
};

export const HeaderTextSecondary = Template.bind({});
HeaderTextSecondary.args = {
    children: 'Secondary',
};
