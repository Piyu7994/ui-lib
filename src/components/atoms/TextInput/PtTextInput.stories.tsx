import type { Meta, StoryFn } from '@storybook/react';
import PtTextInput from './PtTextInput';
import type { PtTextInputProps } from './PtTextInput';

// Define the meta for the component
const meta: Meta<typeof PtTextInput> = {
  title: 'Atoms/PtTextInput',
  component: PtTextInput,
};

export default meta;

// Template for creating stories
const Template: StoryFn<PtTextInputProps> = (args) => <PtTextInput {...args} />;

// Default TextInput Story
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
};

// Filled TextInput Story
export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Filled TextInput',
  type: 'filled',
};

// Password TextInput Story
export const Password = Template.bind({});
Password.args = {
  placeholder: 'Enter password',
  inputType: 'password',
  minLength: 6,
};

// Multiline TextInput Story
export const Multiline = Template.bind({});
Multiline.args = {
  placeholder: 'Enter multiline text',
  inputType: 'multiline',
  maxLines: 4,
};

// Error State Story
export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Enter password',
  inputType: 'password',
  minLength: 6,
};

// Story with Black Background
export const WithBlackBackground = Template.bind({});
WithBlackBackground.args = {
  placeholder: 'Enter text with black background',
};
WithBlackBackground.parameters = {
  backgrounds: {
    default: 'dark', // Set the default background to dark
    values: [
      { name: 'dark', value: '#000000' }, // Black background
    ],
  },
};