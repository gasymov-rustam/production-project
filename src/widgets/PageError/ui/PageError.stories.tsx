import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from '../../../shared';
import { Theme } from '../../../app';

export default {
  title: 'widget/ErrorPage',
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
