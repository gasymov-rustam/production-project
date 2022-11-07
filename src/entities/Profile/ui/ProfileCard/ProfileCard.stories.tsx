import { ComponentMeta, ComponentStory } from '@storybook/react';

import { avatarImg } from '../../../../shared';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Hasymov',
    first: 'Rustam',
    city: 'Dnipro',
    currency: Currency.USD,
    avatar: avatarImg,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
