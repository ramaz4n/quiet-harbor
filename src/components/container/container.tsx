import { PropsWithChildren } from "react";
import { cn } from "@/shared/utils/cn";

type ContainerProps = PropsWithChildren<{
  width?: number;
  className?: string;
}>;

export default function Container({
  children,
  width = 1400,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn("w-full px-6 mx-auto", className)}
      style={{ maxWidth: width }}
    >
      {children}
    </div>
  );
}
