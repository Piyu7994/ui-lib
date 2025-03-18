import { fn } from '@storybook/test';
import PtButton from './PtButton';
import type { ButtonProps } from './PtButton';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof PtButton> = {
    title: 'Atoms/PtButton',
    component: PtButton,
    args: { onClick: fn() }
  };

export default meta;

// Template for creating stories
const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <PtButton {...args} />;

// Primary Button Story
export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Button',
  type: 'primary'
};

// Disabled Button Story
export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Button',
  type: 'disabled'
};

// Loading Button Story
export const Loading = Template.bind({});
Loading.args = {
  title: 'Loading Button',
  type: 'loading'
};

// Error Button Story
export const Error = Template.bind({});
Error.args = {
  title: 'Error Button',
  type: 'error'
};

// Success Button Story
export const Success = Template.bind({});
Success.args = {
  title: 'Success Button',
  type: 'success'
};