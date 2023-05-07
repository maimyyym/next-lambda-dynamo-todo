import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AddForm, AddFormProps } from '../AddForm';

export default {
    title: 'Components/molecules/AddForm',
    component: AddForm,
} as Meta;

const Template: Story<AddFormProps> = (args) => <AddForm {...args} />;

export const AddFormPrimary = Template.bind({});
AddFormPrimary.args = {
    children: 'Primary',
};

export const AddFormSecondary = Template.bind({});
AddFormSecondary.args = {
    children: 'Secondary',
};
