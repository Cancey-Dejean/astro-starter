import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerBase = cn("mx-auto w-full px-6");

const containerConfig = {
  variants: {
    size: {
      base: "max-w-7xl",
      contained: "max-w-[1024px]",
      thin: "max-w-[980px]",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "base",
  },
} as const;

export const containerCva = cva(containerBase, {
  ...containerConfig,
  compoundVariants: [...containerConfig.compoundVariants],
});

// Export the size variants
export const CONTAINER_SIZES = Object.keys(
  containerConfig.variants.size,
) as (keyof typeof containerConfig.variants.size)[];

export const containerVariants = containerCva;
