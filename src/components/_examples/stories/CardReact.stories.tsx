import type { Meta, StoryObj } from "@storybook/react-vite"
import CardReact from "../CardReact"
import StoryWrapper from "../../_utility/story-wrapper"

const meta: Meta<typeof CardReact> = {
  title: "Components/Cards/CardReact",
  component: CardReact,
  decorators: [
    (Story) => (
      <StoryWrapper className="w-full max-w-5xl">
        <Story />
      </StoryWrapper>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <CardReact {...args} />,
}
