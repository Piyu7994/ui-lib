import type { Meta, StoryFn } from '@storybook/react';
import PtDropDown from './PtDropDown';
import type { DropdownProps } from './PtDropDown';

// Define the meta for the component
const meta: Meta<typeof PtDropDown> = {
  title: 'Molecules/Dropdown',
  component: PtDropDown,
};

export default meta;

// Template for creating stories
const Template: StoryFn<DropdownProps> = (args) => <PtDropDown {...args} />;

// Default Dropdown Story
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (option) => console.log('Selected:', option),
  placeholder: 'Choose an option',
};

// Dropdown with Pre-selected Option Story
export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (option) => console.log('Selected:', option),
  placeholder: 'Choose an option',
};