import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '../../../shared';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

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
