import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PageTitle, PageTitleProps } from '../PageTitle';

export default {
  title: 'Components/molecules/PageTitle',
  component: PageTitle,
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const PageTitlePrimary = Template.bind({});
PageTitlePrimary.args = {
  children: 'Primary',
};

export const PageTitleSecondary = Template.bind({});
PageTitleSecondary.args = {
  children: 'Secondary',
};


