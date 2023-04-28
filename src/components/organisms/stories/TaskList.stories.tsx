import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskList, TaskListProps } from '../TaskList';

export default {
  title: 'Components/organisms/TaskList',
  component: TaskList,
} as Meta;

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const TaskListPrimary = Template.bind({});
TaskListPrimary.args = {
  children: 'Primary',
};

export const TaskListSecondary = Template.bind({});
TaskListSecondary.args = {
  children: 'Secondary',
};


