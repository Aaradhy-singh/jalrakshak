import { type Variants, type Transition } from 'framer-motion';

/**
 * JalRakshak Motion System
 * Adheres to the 4 motion layers: Atmosphere, Arrival, Interaction, Continuity.
 * Calm, cultural, deliberate easing curves (no bouncy startup animations).
 */

// Calm civic easing curve
export const calmEase = [0.22, 1, 0.36, 1] as const;
export const gentleEase = [0.25, 0.1, 0.25, 1] as const;

export const transitionCalm: Transition = {
  duration: 0.65,
  ease: calmEase,
};

export const transitionSmooth: Transition = {
  duration: 0.5,
  ease: gentleEase,
};

// Hero Stagger Container
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// Individual Hero Item (Eyebrow, lines, copy, CTAs)
export const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: calmEase,
    },
  },
};

// Heading Line Reveal
export const heroHeadingLineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: calmEase,
    },
  },
};

// Horizontal Accent Divider Draw
export const dividerDrawVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: calmEase,
    },
  },
};

// Integrity Note (Soft reveal)
export const heroIntegrityVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: gentleEase,
    },
  },
};

// Section Header Reveal
export const sectionHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: calmEase,
    },
  },
};

// Staggered Container for Cards / Pillars
export const staggerGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Pillar Card Reveal
export const pillarCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: calmEase,
    },
  },
};

// Ghat Step Band Alternating Reveal (Left)
export const ghatBandLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: calmEase,
    },
  },
};

// Ghat Step Band Alternating Reveal (Right)
export const ghatBandRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 28,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: calmEase,
    },
  },
};

// Reusable viewport configuration for scroll-triggered animations
export const standardViewport = {
  once: true,
  amount: 0.2,
};
