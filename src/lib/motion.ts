import type { Transition, Variants } from "framer-motion";

// Custom easing from Lakshya Design Contract: [0.22, 1, 0.36, 1]
export const transitionDefault: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const transitionQuick: Transition = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeInOnScroll: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionDefault,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const strokeDrawVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};
