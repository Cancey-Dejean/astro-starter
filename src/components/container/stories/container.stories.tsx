import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@/components/container/container";
import { CONTAINER_SIZES } from "@/components/container/container.variants";
import StoryWrapper from "@/_utility/story-wra  pper";

const meta: Meta = {
  title: "Components/Container",
  component: Container,
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    size: "base",
  },
  argTypes: {
    size: {
      control: "select",
      options: CONTAINER_SIZES,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container
      {...args}
      className="flex h-30 items-center justify-center gap-1 rounded-2xl border border-dashed border-red-500/40 bg-red-500/20 text-white capitalize"
    >
      Container size: <strong>{args.size}</strong>
    </Container>
  ),
};
