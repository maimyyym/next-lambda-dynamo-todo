import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskFooter, TaskFooterProps } from '../TaskFooter';

export default {
  title: 'Components/molecules/TaskFooter',
  component: TaskFooter,
} as Meta;

const Template: Story<TaskFooterProps> = (args) => <TaskFooter {...args} />;

export const TaskFooterPrimary = Template.bind({});
TaskFooterPrimary.args = {
  children: 'Primary',
};

export const TaskFooterSecondary = Template.bind({});
TaskFooterSecondary.args = {
  children: 'Secondary',
};


