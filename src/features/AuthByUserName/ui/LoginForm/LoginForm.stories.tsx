import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '../../../../shared';
import { LoginFormAsync } from './LoginForm.async';

export default {
  title: 'features/LoginForm',
  component: LoginFormAsync,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginFormAsync>;

const Template: ComponentStory<typeof LoginFormAsync> = (args) => <LoginFormAsync {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { userName: '123', password: 'asd' },
  }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    loginForm: { userName: '123', password: 'asd', error: 'ERROR' },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
