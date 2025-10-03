"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
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

  const [windowWidth, setWindowWidth] = useState(0);

  let moveDistance = windowWidth < 768 ? 100 : 300;

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? moveDistance : moveDistance - moveDistance * 2,
    },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
