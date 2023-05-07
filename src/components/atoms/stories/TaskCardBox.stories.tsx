import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TaskCardBox, TaskCardBoxProps } from '../TaskCardBox';

export default {
    title: 'Components/atoms/TaskCardBox',
    component: TaskCardBox,
} as Meta;

const Template: Story<TaskCardBoxProps> = (args) => <TaskCardBox {...args} />;

export const TaskCardBoxPrimary = Template.bind({});
TaskCardBoxPrimary.args = {
    children: 'Primary',
};

export const TaskCardBoxSecondary = Template.bind({});
TaskCardBoxSecondary.args = {
    children: 'Secondary',
};
