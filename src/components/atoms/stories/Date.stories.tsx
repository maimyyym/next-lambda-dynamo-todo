import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Date, DateProps } from '../Date';

export default {
  title: 'Components/atoms/Date',
  component: Date,
} as Meta;

const Template: Story<DateProps> = (args) => <Date {...args} />;

export const DatePrimary = Template.bind({});
DatePrimary.args = {
  children: 'Primary Button',
};

export const DateSecondary = Template.bind({});
DateSecondary.args = {
  children: 'Secondary Button',
};


