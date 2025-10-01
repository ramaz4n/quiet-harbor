"use client";

import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/shared/utils/cn";

type MotionComponentProps = PropsWithChildren<{
  direction: "right" | "left";
  className?: string;
}>;

export default function MotionComponent({
  children,
  direction = "right",
  className,
}: MotionComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  const variants = {
    hidden: { opacity: 0, x: direction === "right" ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("size-full", { className })}
    >
      {children}
    </motion.div>
  );
}
