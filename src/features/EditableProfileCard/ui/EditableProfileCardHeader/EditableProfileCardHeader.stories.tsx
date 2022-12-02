import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '../../../../shared';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
  title: 'features/editableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
  StoreDecorator({
    profile: {},
  }),
];
