import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomeTitle, HomeTitleProps } from '../HomeTitle';

export default {
    title: 'Components/atoms/HomeTitle',
    component: HomeTitle,
} as Meta;

const Template: Story<HomeTitleProps> = (args) => <HomeTitle {...args} />;

export const HomeTitlePrimary = Template.bind({});
HomeTitlePrimary.args = {
    children: 'Primary',
};

export const HomeTitleSecondary = Template.bind({});
HomeTitleSecondary.args = {
    children: 'Secondary',
};
