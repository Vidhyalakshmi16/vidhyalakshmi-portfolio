import type { Variants } from "framer-motion";

export const hoverLift: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -6,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
