import { cn } from "@/lib/utils";
import { containerVariants } from "@/components/container/container.variants";
import type { ContainerProps } from "@/components/container/container.types";

function Container({ size = "base", className, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      data-size={size}
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  );
}

export { Container };
