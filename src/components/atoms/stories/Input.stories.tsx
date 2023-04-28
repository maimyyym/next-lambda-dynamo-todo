import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '../Input';

export default {
  title: 'Components/atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputPrimary = Template.bind({});
InputPrimary.args = {
};

export const InputSecondary = Template.bind({});
InputSecondary.args = {
};


