import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskCard, TaskCardProps } from '../TaskCard';

export default {
  title: 'Components/molecules/TaskCard',
  component: TaskCard,
} as Meta;

const Template: Story<TaskCardProps> = (args) => <TaskCard {...args} />;

export const TaskCardPrimary = Template.bind({});
TaskCardPrimary.args = {
  children: 'Primary',
};

export const TaskCardSecondary = Template.bind({});
TaskCardSecondary.args = {
  children: 'Secondary',
};


