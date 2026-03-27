import type { Meta, StoryObj } from "@storybook/react-vite"
import CardReact from "../CardReact"

const meta: Meta<typeof CardReact> = {
  title: "Components/CardReact",
  component: CardReact,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <CardReact {...args} />
    </div>
  ),
}
