import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskTitle, TaskTitleProps } from '../TaskTitle';

export default {
    title: 'Components/atoms/TaskTitle',
    component: TaskTitle,
} as Meta;

const Template: Story<TaskTitleProps> = (args) => <TaskTitle {...args} />;

export const TaskTitlePrimary = Template.bind({});
TaskTitlePrimary.args = {
    children: 'Primary',
};

export const TaskTitleSecondary = Template.bind({});
TaskTitleSecondary.args = {
    children: 'Secondary',
};
