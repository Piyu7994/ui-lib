import type { Meta, StoryFn } from '@storybook/react';
import PtText from './PtText';
import type { TextProps } from './PtText';

// Define the meta for the component
const meta: Meta<typeof PtText> = {
  title: 'Atoms/PtText',
  component: PtText,
};

export default meta;

// Template for creating stories
const Template: StoryFn<TextProps> = (args) => <PtText {...args} />;

// Default Text Story
export const Default = Template.bind({});
Default.args = {
  text: 'Default Text',
};

// H1 Text Story
export const Heading1 = Template.bind({});
Heading1.args = {
  text: 'Heading 1',
  h1: true,
};

// H2 Text Story
export const Heading2 = Template.bind({});
Heading2.args = {
  text: 'Heading 2',
  h2: true,
};

// H3 Text Story
export const Heading3 = Template.bind({});
Heading3.args = {
  text: 'Heading 3',
  h3: true,
};

// Custom Style Story
export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: 'Custom Styled Text',
  defaultStyle: { color: 'blue', fontWeight: 'bold' },
};