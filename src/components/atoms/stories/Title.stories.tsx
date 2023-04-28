import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from '../Title';

export default {
  title: 'Components/atoms/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const TitlePrimary = Template.bind({});
TitlePrimary.args = {
  children: 'Primary',
};

export const TitleSecondary = Template.bind({});
TitleSecondary.args = {
  children: 'Secondary',
};


