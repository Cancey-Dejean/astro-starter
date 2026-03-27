import { cn } from "../../lib/utils"

export default function StoryWrapper({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="story-wrapper"
      className={cn(
        "mx-auto flex h-[90vh] w-full items-center justify-center",
        className
      )}
      {...props}
    />
  )
}
