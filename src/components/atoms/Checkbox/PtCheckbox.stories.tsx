import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PtCheckbox from './PtCheckbox';
import type { CheckboxProps } from './PtCheckbox'

const meta: Meta<typeof PtCheckbox> = {
  title: 'Atoms/Checkbox',
  component: PtCheckbox,
};

export default meta;

const Template: StoryFn<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return <PtCheckbox {...args} checked={checked} onToggle={() => setChecked(!checked)} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  label: 'Checkbox Label',
};

export const CheckedWithLabel = Template.bind({});
CheckedWithLabel.args = {
  checked: true,
  label: 'Checked Label',
};