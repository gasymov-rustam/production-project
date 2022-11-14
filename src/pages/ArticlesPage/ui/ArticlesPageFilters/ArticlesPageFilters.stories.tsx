import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
  title: 'shared/ArticlePageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // example props
  // title: 'Title lorem ipsun',
  // text: 'Description Description Description Description',
};
