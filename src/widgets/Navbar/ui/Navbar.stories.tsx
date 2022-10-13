import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '../../../app';
import { StoreDecorator, ThemeDecorator } from '../../../shared';

import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavBar = Template.bind({});
AuthNavBar.args = {};
AuthNavBar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authUser: {} } })];