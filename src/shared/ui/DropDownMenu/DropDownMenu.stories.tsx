import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button/Button';

import { DropDownMenu } from './DropDownMenu';

export default {
  title: 'shared/Dropdown',
  component: DropDownMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DropDownMenu>;

const Template: ComponentStory<typeof DropDownMenu> = (args) => <DropDownMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
