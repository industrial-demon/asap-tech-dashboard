// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  args: {
    defaultValue: '',
    addonRight: <span className="bg-red-300">E</span>,
  },
};
