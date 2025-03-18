import type { Meta, StoryFn } from '@storybook/react';
import PtIcon from './PtIcon';
import type { IconProps } from './PtIcon';

const meta: Meta<typeof PtIcon> = {
  title: 'Atoms/Icon',
  component: PtIcon,
};

export default meta;

const Template: StoryFn<IconProps> = (args) => <PtIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'home',
  size: 24,
  color: 'black',
};

export const Large = Template.bind({});
Large.args = {
  name: 'star',
  size: 32,
  color: 'gold',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  name: 'settings',
  size: 24,
  color: 'blue',
};