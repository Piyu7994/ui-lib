import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PtRadioButton from './PtRadioButton';
import type { RadioButtonProps } from './PtRadioButton';

const meta: Meta<typeof PtRadioButton> = {
  title: 'Atoms/RadioButton',
  component: PtRadioButton,
};

export default meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const [selected, setSelected] = useState(args.selected);
  return <PtRadioButton {...args} selected={selected} onSelect={() => setSelected(!selected)} />;
};

export const Default = Template.bind({});
Default.args = {
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  selected: false,
  label: 'RadioButton Label',
};

export const SelectedWithLabel = Template.bind({});
SelectedWithLabel.args = {
  selected: true,
  label: 'Selected Label',
};