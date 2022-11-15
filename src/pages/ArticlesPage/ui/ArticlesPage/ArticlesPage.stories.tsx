import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '../../../../shared';

import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

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
