import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskListTitle, TaskListTitleProps } from '../TaskListTitle';

export default {
    title: 'Components/atoms/TaskListTitle',
    component: TaskListTitle,
} as Meta;

const Template: Story<TaskListTitleProps> = (args) => (
    <TaskListTitle {...args} />
);

export const TaskListTitlePrimary = Template.bind({});
TaskListTitlePrimary.args = {
    children: 'Primary',
};

export const TaskListTitleSecondary = Template.bind({});
TaskListTitleSecondary.args = {
    children: 'Secondary',
};
