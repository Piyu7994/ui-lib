import type { Meta, StoryFn } from '@storybook/react';
import PtAlert from './PtAlert';
import type { AlertProps } from './PtAlert';
import { fn } from '@storybook/test';

// Define the meta for the component
const meta: Meta<typeof PtAlert> = {
  title: 'Molecules/Alert',
  component: PtAlert,
  args: { onClose: fn()}
};

export default meta;

// Template for creating stories
const Template: StoryFn<AlertProps> = (args) => <PtAlert {...args} />;

// Success Alert Story
export const Success = Template.bind({});
Success.args = {
  message: 'This is a success alert!',
  type: 'success',
};

// Error Alert Story
export const Error = Template.bind({});
Error.args = {
  message: 'This is an error alert!',
  type: 'error',
};

// Warning Alert Story
export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning alert!',
  type: 'warning',
};

// Info Alert Story
export const Info = Template.bind({});
Info.args = {
  message: 'This is an info alert!',
  type: 'info',
};

// Alert with Close Button Story
export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  message: 'This alert can be closed!',
  type: 'info'
};