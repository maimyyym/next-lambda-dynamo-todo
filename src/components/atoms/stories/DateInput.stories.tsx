import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DateInput, DateInputProps } from '../DateInput';

export default {
  title: 'Components/atoms/DateInput',
  component: DateInput,
} as Meta;

const Template: Story<DateInputProps> = (args) => <DateInput {...args} />;

export const DateInputPrimary = Template.bind({});
DateInputPrimary.args = {
  value: "2023-05-01T12:00"
};

export const DateInputSecondary = Template.bind({});
DateInputSecondary.args = {
};


