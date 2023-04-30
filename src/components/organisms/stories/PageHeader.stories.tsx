import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PageHeader, PageHeaderProps } from '../PageHeader';

export default {
  title: 'Components/organisms/PageHeader',
  component: PageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const PageHeaderPrimary = Template.bind({});
PageHeaderPrimary.args = {
};

export const PageHeaderSecondary = Template.bind({});
PageHeaderSecondary.args = {
};


