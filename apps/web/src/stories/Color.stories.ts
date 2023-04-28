import type { Meta, StoryObj } from "@storybook/react"
// import { within, userEvent } from "@storybook/testing-library"

import { Color } from "./Color"

const meta: Meta<typeof Color> = {
  title: "Example/Color",
  component: Color,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof Color>

export const ColorList: Story = {}
