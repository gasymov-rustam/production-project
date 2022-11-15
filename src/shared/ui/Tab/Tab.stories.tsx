import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tab } from './Tab';

export default {
  title: 'shared/Tab',
  component: Tab,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    { content: 'Tab 1', value: 'Tab 1' },
    { content: 'Tab 2', value: 'Tab 2' },
    { content: 'Tab 3', value: 'Tab 3' },
  ],
  value: 'Tab 2',
  onTabHandler: action('onTabHandler'),
};
