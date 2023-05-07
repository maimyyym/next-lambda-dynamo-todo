import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DoneButton, DoneButtonProps } from '../DoneButton';

export default {
    title: 'Components/atoms/DoneButton',
    component: DoneButton,
} as Meta;

const Template: Story<DoneButtonProps> = (args) => <DoneButton {...args} />;

export const DonePrimary = Template.bind({});
DonePrimary.args = {
    children: 'Primary DoneButton',
};

export const DoneSecondary = Template.bind({});
DoneSecondary.args = {
    children: 'Secondary DoneButton',
};
