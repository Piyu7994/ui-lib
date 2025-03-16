import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PtSwitch from './PtSwitch';
import type { SwitchProps } from './PtSwitch';

const meta: Meta<typeof PtSwitch> = {
  title: 'Atoms/Switch',
  component: PtSwitch,
};

export default meta;

const Template: StoryFn<SwitchProps> = (args) => {
  const [isEnabled, setIsEnabled] = useState(args.value);
  return <PtSwitch {...args} value={isEnabled} onValueChange={() => setIsEnabled(!isEnabled)} />;
};

export const Default = Template.bind({});
Default.args = {
  value: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  value: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: false,
  label: 'Switch Label',
};

export const EnabledWithLabel = Template.bind({});
EnabledWithLabel.args = {
  value: true,
  label: 'Enabled Label',
};