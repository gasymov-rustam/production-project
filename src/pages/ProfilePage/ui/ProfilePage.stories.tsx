import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Country, Currency } from '../../../entities';
import { StoreDecorator, Theme, ThemeDecorator, avatarImg } from '../../../shared';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        userName: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'Hasymov',
        first: 'Rustam',
        city: 'Dnipro',
        currency: Currency.USD,
        avatar: avatarImg,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        userName: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'Hasymov',
        first: 'Rustam',
        city: 'Dnipro',
        currency: Currency.USD,
        avatar: avatarImg,
      },
    },
  }),
];
