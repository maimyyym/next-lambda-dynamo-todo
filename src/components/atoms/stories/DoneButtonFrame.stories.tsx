import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DoneButtonFrame, DoneButtonFrameProps } from '../DoneButtonFrame';
import DoneButton from '../DoneButton';

export default {
  title: 'Components/atoms/DoneButtonFrame',
  component: DoneButtonFrame,
} as Meta;

const Template: Story<DoneButtonFrameProps> = (args) => <DoneButtonFrame {...args} />;

export const DoneButtonFramePrimary = Template.bind({});
DoneButtonFramePrimary.args = {
  children: <DoneButton />,
};

export const DoneButtonFrameSecondary = Template.bind({});
DoneButtonFrameSecondary.args = {
  children: 'Secondary',
};


