import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '../../../app';
import { ThemeDecorator } from '../../../shared';

import { PageError } from './PageError';

export default {
  title: 'widgets/ErrorPage',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
