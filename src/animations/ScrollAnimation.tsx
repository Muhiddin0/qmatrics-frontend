"use client";

import { AnimationProps, motion } from "framer-motion";
import { AnimationVariants } from "./animations";
import { useScrollAnimation } from "./use-scroll-animation";

interface Props {
  children: React.ReactNode;
  variants: AnimationVariants;
  transition?: AnimationProps["transition"];
}

export function AnimatedComponent({
  children,
  variants,
  transition = { duration: 0.6, ease: "easeOut" },
}: Props) {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
