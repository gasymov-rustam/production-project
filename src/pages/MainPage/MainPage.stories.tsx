import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from '../../shared';
import { Theme } from '../../app';
import { ReactNode } from 'react';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
