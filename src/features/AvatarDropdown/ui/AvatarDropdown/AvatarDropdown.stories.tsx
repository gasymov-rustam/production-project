import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '../../../../shared';

import { AvatarDropdown } from './AvatarDropdown';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = () => <AvatarDropdown />;

export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({
    profile: {},
  }),
];
