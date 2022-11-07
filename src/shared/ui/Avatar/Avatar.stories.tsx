import { ComponentMeta, ComponentStory } from '@storybook/react';

import { avatarImg } from '../../assets';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: avatarImg,
  alt: 'Something wrong',
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: avatarImg,
  alt: 'Something wrong',
};
