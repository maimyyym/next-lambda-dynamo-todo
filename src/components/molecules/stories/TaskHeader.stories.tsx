import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskHeader, TaskHeaderProps } from '../TaskHeader';

export default {
  title: 'Components/molecules/TaskHeader',
  component: TaskHeader,
} as Meta;

const Template: Story<TaskHeaderProps> = (args) => <TaskHeader {...args} />;

export const TaskHeaderPrimary = Template.bind({});
TaskHeaderPrimary.args = {
};

export const TaskHeaderSecondary = Template.bind({});
TaskHeaderSecondary.args = {
};


