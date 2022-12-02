import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '../../../../shared';

import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
  StoreDecorator({
    articlesPage: {
      ids: [],
      entities: {},
      isLoading: false,
    },
  }),
];
