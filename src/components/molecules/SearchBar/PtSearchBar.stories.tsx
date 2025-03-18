import type { Meta, StoryFn } from '@storybook/react';
import PtSearchBar from './PtSearchBar';
import type { SearchBarProps } from './PtSearchBar';
import { fn } from '@storybook/test';

// Define the meta for the component
const meta: Meta<typeof PtSearchBar> = {
  title: 'Molecules/SearchBar',
  component: PtSearchBar,
  args: { onClear: fn() }
};

export default meta;

// Template for creating stories
const Template: StoryFn<SearchBarProps> = (args) => <PtSearchBar {...args} />;

// Default SearchBar Story
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  onSearch: (query) => console.log('Searching for:', query),
};

// SearchBar with Clear Button Story
export const WithClearButton = Template.bind({});
WithClearButton.args = {
  placeholder: 'Search...',
  onSearch: (query) => console.log('Searching for:', query),
  onClear: () => console.log('Input cleared'),
};