import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rating } from './Rating';

export default {
  title: 'shared/Rating',
  component: Rating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // example props
  // title: 'Title lorem ipsun',
  // text: 'Description Description Description Description',
};
